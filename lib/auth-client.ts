import { createAuthClient } from "better-auth/react";

// better-auth 1.7 registers generic OAuth providers as regular social
// providers, so no client plugin is needed; sign in with `signIn.social`.
export const authClient = createAuthClient();
