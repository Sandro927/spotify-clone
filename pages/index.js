import Head from 'next/head';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';

const Home = () => {
  return (
    <div className="">
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
