import type { GetServerSidePropsContext, GetServerSidePropsResult, NextApiRequest, NextApiResponse } from "next";
import { type NextAuthOptions } from "next-auth";
export declare function withAuth<T>({ req, res }: GetServerSidePropsContext, authOptions: NextAuthOptions, props: GetServerSidePropsResult<T>): Promise<GetServerSidePropsResult<T>>;
export declare function auth<T>(req: NextApiRequest, res: NextApiResponse, authOptions: NextAuthOptions): Promise<boolean>;
