import Head from 'next/head';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        {/* <Content /> */}
      </main>
    </div>
  )
}

export default Home
