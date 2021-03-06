import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
import * as sdls_listings_sdl from "../graphql/listings.sdl";
sdls.listings_sdl = sdls_listings_sdl;
import { db } from "../lib/db";
import { logger } from "../lib/logger";
let services = {};
import * as services_listings_listings from "../services/listings/listings";
services.listings_listings = services_listings_listings;
export const handler = createGraphQLHandler({
  loggerConfig: {
    logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVHcmFwaFFMSGFuZGxlciIsImRiIiwibG9nZ2VyIiwiaGFuZGxlciIsImxvZ2dlckNvbmZpZyIsIm9wdGlvbnMiLCJkaXJlY3RpdmVzIiwic2RscyIsInNlcnZpY2VzIiwib25FeGNlcHRpb24iLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2dyYXBocWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR3JhcGhRTEhhbmRsZXIgfSBmcm9tICdAcmVkd29vZGpzL2dyYXBocWwtc2VydmVyJ1xuXG5pbXBvcnQgZGlyZWN0aXZlcyBmcm9tICdzcmMvZGlyZWN0aXZlcy8qKi8qLntqcyx0c30nXG5pbXBvcnQgc2RscyBmcm9tICdzcmMvZ3JhcGhxbC8qKi8qLnNkbC57anMsdHN9J1xuaW1wb3J0IHsgZGIgfSBmcm9tICdzcmMvbGliL2RiJ1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnc3JjL2xpYi9sb2dnZXInXG5pbXBvcnQgc2VydmljZXMgZnJvbSAnc3JjL3NlcnZpY2VzLyoqLyoue2pzLHRzfSdcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVHcmFwaFFMSGFuZGxlcih7XG4gIGxvZ2dlckNvbmZpZzogeyBsb2dnZXIsIG9wdGlvbnM6IHt9IH0sXG4gIGRpcmVjdGl2ZXMsXG4gIHNkbHMsXG4gIHNlcnZpY2VzLFxuICBvbkV4Y2VwdGlvbjogKCkgPT4ge1xuICAgIC8vIERpc2Nvbm5lY3QgZnJvbSB5b3VyIGRhdGFiYXNlIHdpdGggYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICBkYi4kZGlzY29ubmVjdCgpXG4gIH0sXG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxvQkFBVCxRQUFxQywyQkFBckM7Ozs7Ozs7OztBQUlBLFNBQVNDLEVBQVQ7QUFDQSxTQUFTQyxNQUFUOzs7O0FBR0EsT0FBTyxNQUFNQyxPQUFPLEdBQUdILG9CQUFvQixDQUFDO0VBQzFDSSxZQUFZLEVBQUU7SUFBRUYsTUFBRjtJQUFVRyxPQUFPLEVBQUU7RUFBbkIsQ0FENEI7RUFFMUNDLFVBRjBDO0VBRzFDQyxJQUgwQztFQUkxQ0MsUUFKMEM7RUFLMUNDLFdBQVcsRUFBRSxNQUFNO0lBQ2pCO0lBQ0FSLEVBQUUsQ0FBQ1MsV0FBSDtFQUNEO0FBUnlDLENBQUQsQ0FBcEMifQ==