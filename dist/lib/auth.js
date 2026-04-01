import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { bearer, emailOTP } from "better-auth/plugins";
import { Role, UserStatus } from "../generated/prisma/enums";
import { envVars } from "../app/config/env";
import { sendEmail } from "../app/utils/email";
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    baseURL: process.env.FRONTEND_URL,
    trustedOrigins: [process.env.FRONTEND_URL],
    //...other options
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            prompt: "select_account",
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: true,
                defaultValue: Role.TOURIST
            },
            status: {
                type: "string",
                required: true,
                defaultValue: UserStatus.ACTIVE
            },
            needPasswordChange: {
                type: "boolean",
                required: true,
                defaultValue: false
            },
            isDeleted: {
                type: "boolean",
                required: true,
                defaultValue: false
            },
            deletedAt: {
                type: "date",
                required: false,
                defaultValue: null
            },
        }
    },
    plugins: [
        bearer(),
        emailOTP({
            overrideDefaultEmailVerification: true,
            async sendVerificationOTP({ email, otp, type }) {
                if (type === "email-verification") {
                    const user = await prisma.user.findUnique({
                        where: {
                            email,
                        }
                    });
                    if (!user) {
                        console.error(`User with email ${email} not found. Cannot send verification OTP.`);
                        return;
                    }
                    if (user && user.role === Role.SUPER_ADMIN) {
                        console.log(`User with email ${email} is a super admin. Skipping sending verification OTP.`);
                        return;
                    }
                    if (user && !user.emailVerified) {
                        sendEmail({
                            to: email,
                            subject: "Verify your email",
                            templateName: "otp",
                            templateData: {
                                name: user.name,
                                otp,
                            }
                        });
                    }
                }
                else if (type === "forget-password") {
                    const user = await prisma.user.findUnique({
                        where: {
                            email,
                        }
                    });
                    if (user) {
                        sendEmail({
                            to: email,
                            subject: "Password Reset OTP",
                            templateName: "otp",
                            templateData: {
                                name: user.name,
                                otp,
                            }
                        });
                    }
                }
            },
            expiresIn: 2 * 60, // 2 minutes in seconds
            otpLength: 6,
        })
    ],
    session: {
        expiresIn: 60 * 60 * 60 * 24, // 1 day in seconds
        updateAge: 60 * 60 * 60 * 24, // 1 day in seconds
        cookieCache: {
            enabled: true,
            maxAge: 60 * 60 * 60 * 24, // 1 day in seconds
        }
    },
    redirectURLs: {
        signIn: `${envVars.BETTER_AUTH_URL}/api/v1/auth/google/success`,
    },
    // trustedOrigins: [process.env.BETTER_AUTH_URL || "http://localhost:5000", envVars.FRONTEND_URL],
    // account: { skipStateCookieCheck: true }, // solved redirect issue
    advanced: {
        cookies: {
            session_token: {
                name: "session_token", // Force this exact name
                attributes: {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    partitioned: true,
                },
            },
            state: {
                name: "session_token", // Force this exact name
                attributes: {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    partitioned: true,
                },
            },
        },
    },
    // plugins: [oAuthProxy()],
});
//# sourceMappingURL=auth.js.map