import { Response } from "express";
import { JwtPayload } from "jsonwebtoken";
export declare const tokenUtils: {
    getAccessToken: (payload: JwtPayload) => never;
    getRefreshToken: (payload: JwtPayload) => never;
    setAccessTokenCookie: (res: Response, token: string) => void;
    setRefreshTokenCookie: (res: Response, token: string) => void;
    setBetterAuthSessionCookie: (res: Response, token: string) => void;
};
//# sourceMappingURL=token.d.ts.map