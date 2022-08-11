import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import Head from 'next/head'
import Propertys from '../components/Propertys'
import Questions from '../components/Questions'
 import Comments from '../components/Comments'
 import Footer from '../components/Footer'
import  React,{useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

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
    <Footer></Footer>
  </div>
  )
}

export default Home
