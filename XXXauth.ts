import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

// export const {
//   //   handlers: { GET, POST, PUT, DELETE },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_ID || '',
//       clientSecret: process.env.GITHUB_SECRET || '',
//     }),
//   ],
// });

export default NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
});

export enum AuthProviders {
  GITHUB = 'github',
}
