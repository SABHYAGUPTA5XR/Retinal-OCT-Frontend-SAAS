// This file should now be named "proxy.ts"

import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  // These routes will be accessible to everyone (no login required)
  publicRoutes: ["/", "/about"],

  // These routes will be completely ignored by Clerk's authentication
  ignoredRoutes: ["/api/webhook", "/api/getproducts", "/api/stripewebhook"],
});

export const config = {
  // This matcher is correct
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};