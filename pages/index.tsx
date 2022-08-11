import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import Head from 'next/head'
import Propertys from '../components/Propertys'
import Questions from '../components/Questions'
 import Comments from '../components/Comments'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> سامانه یادینا</title>
      </Head>
     <Navbar></Navbar>
    <Navigation></Navigation>
    <Propertys></Propertys>
    <Questions></Questions>
    <Comments></Comments>
  </div>
  )
}

export default Home
