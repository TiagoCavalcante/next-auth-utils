import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiRequest,
  NextApiResponse,
} from "next"
import { getServerSession, type NextAuthOptions } from "next-auth"

export async function withAuth<T>(
  { req, res }: GetServerSidePropsContext,
  authOptions: NextAuthOptions,
  props: GetServerSidePropsResult<T>,
) {
  const session = await getServerSession(req, res, authOptions)

  if (session) return props

  return {
    redirect: {
      destination: "/api/auth/signin",
      permanent: false,
    },
  }
}

export async function auth<T,>(
  req: NextApiRequest,
  res: NextApiResponse,
  authOptions: NextAuthOptions,
) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) res.status(401).end()

  return !!session
}
