import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: "http://192.168.1.148:8001/auth",
});
