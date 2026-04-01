import { UserStatus } from "../../../generated/prisma/enums";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { IChangePasswordPayload, ILoginUserPayload, IRegisterPatientPayload } from "./auth.interface";
export declare const AuthService: {
    registerTourist: (payload: IRegisterPatientPayload) => Promise<{
        accessToken: never;
        refreshToken: never;
        tourist: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            userId: string;
            profilePhoto: string | null;
            contactNumber: string | null;
            address: string | null;
        };
        token: null;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined | undefined;
            role: string;
            status: string;
            needPasswordChange: boolean;
            isDeleted: boolean;
            deletedAt?: Date | null | undefined;
        };
    } | {
        accessToken: never;
        refreshToken: never;
        tourist: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            userId: string;
            profilePhoto: string | null;
            contactNumber: string | null;
            address: string | null;
        };
        token: string;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined | undefined;
            role: string;
            status: string;
            needPasswordChange: boolean;
            isDeleted: boolean;
            deletedAt?: Date | null | undefined;
        };
    }>;
    loginUser: (payload: ILoginUserPayload) => Promise<{
        accessToken: never;
        refreshToken: never;
        redirect: boolean;
        token: string;
        url?: string | undefined;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined | undefined;
            role: string;
            status: string;
            needPasswordChange: boolean;
            isDeleted: boolean;
            deletedAt?: Date | null | undefined;
        };
    }>;
    getMe: (user: IRequestUser) => Promise<{
        tourist: ({} & {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            userId: string;
            profilePhoto: string | null;
            contactNumber: string | null;
            address: string | null;
        }) | null;
        moderator: ({} & {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            userId: string;
            profilePhoto: string | null;
            contactNumber: string | null;
            address: string | null;
            registrationNumber: string;
            experience: number;
            gender: import("../../../generated/prisma/enums").Gender;
            appointmentFee: number;
            qualification: string;
            currentWorkingPlace: string;
            designation: string;
            averageRating: number;
        }) | null;
        admin: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            userId: string;
            profilePhoto: string | null;
            contactNumber: string | null;
        } | null;
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        role: import("../../../generated/prisma/enums").Role;
        status: UserStatus;
        needPasswordChange: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
    }>;
    getNewToken: (refreshToken: string, sessionToken: string) => Promise<{
        accessToken: never;
        refreshToken: never;
        sessionToken: string;
    }>;
    changePassword: (payload: IChangePasswordPayload, sessionToken: string) => Promise<{
        accessToken: never;
        refreshToken: never;
        token: string | null;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined;
        } & Record<string, any> & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined;
        };
    }>;
    logoutUser: (sessionToken: string) => Promise<{
        success: boolean;
    }>;
    verifyEmail: (email: string, otp: string) => Promise<void>;
    forgetPassword: (email: string) => Promise<void>;
    resetPassword: (email: string, otp: string, newPassword: string) => Promise<void>;
    googleLoginSuccess: (session: Record<string, any>) => Promise<{
        accessToken: never;
        refreshToken: never;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map