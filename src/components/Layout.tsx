import Head from 'next/head';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>Hasura+GraphQL</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  data-testid="home-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Home
                </a>
              </Link>
              <Link href="/local-state-a">
                <a
                  data-testid="makevar-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  makeVar
                </a>
              </Link>
              <Link href="/hasura-main">
                <a
                  data-testid="fetchpolicy-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  fetchPolicy(Hasura)
                </a>
              </Link>
              <Link href="/hasura-crud">
                <a
                  data-testid="crud-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  CRUD(Hasura)
                </a>
              </Link>
              <Link href="/hasura-ssg">
                <a
                  data-testid="ssg-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  SSG+SSR(Hasura)
                </a>
              </Link>
              <Link href="/hooks-memo">
                <a
                  data-testid="memo-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  custom hook + memo
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">{children}</main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <small>&copy;2022 suzu</small>
      </footer>
    </div>
  );
};
