import Head from 'next/head';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import { getSession } from 'next-auth/react';

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Content /> 
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}