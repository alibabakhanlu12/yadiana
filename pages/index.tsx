import type { NextPage } from 'next'
import Navbar from '../example/homeComponents/Navbar'
import Navigation from '../example/homeComponents/Navigation'
import Head from 'next/head'
import Propertys from '../example/homeComponents/Propertys'
import Questions from '../example/homeComponents/Questions'
 import Comments from '../example/homeComponents/Comments'
 import Footer from '../example/homeComponents/Footer'
import  React,{useEffect } from 'react'

const Home: NextPage = () => {

  <Head>
    <title> صفحه اصلی </title>
  </Head>
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
