# next-auth-utils

Utilities for a next-auth protect website

## Install

next-auth-utils is distributed as a
[npm package](https://www.npmjs.com/package/next-auth-utils)
and can be installed as follows:
```
// with npm
npm install next-auth-utils
// with yarn
yarn add next-auth-utils
```

## Example

```ts
// This should be in your repository, if it isn't
// there you should read next-auth's documentation:
// https://next-auth.js.org/getting-started/example
import { authOptions } from "@/pages/api/auth/[...nextauth]"

// In a server side rendered page:
import { withAuth } from "next-auth-utils"
// Used in TS projects
import { GetServerSidePropsContext } from "next"

export default function Page() {
	...
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
) {
  ...

	// This will redirect the user to the sign-in
	// page if the user isn't signed-in.
  return withAuth(context, { props: { ... } })
}

// In a API route:
import { auth } from "next-auth-utils"
// Used in TS projects
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
	// If the user is not signed-in will exit
	// and return a 401 status code.
  if (!await auth(req, res, authOptions)) return

	...
}
```
