import type { NextPage } from 'next'
import Navbar from '../example/homeComponents/Navbar'
import Navigation from '../example/homeComponents/Navigation'
import Head from 'next/head'  
import Questions from '../example/homeComponents/Questions'
import Footer from '../example/homeComponents/Footer'
import  React,{useEffect } from 'react'
import Image from 'next/image'
 
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from 'swiper'
import "swiper/css/bundle";
import user1 from '../public/assets/user1.jpeg'
import user2 from '../public/assets/user2.jpeg'
import user3 from '../public/assets/user3.jpg'
import user4 from '../public/assets/user4.jpg'
import user5 from '../public/assets/user5.jpeg'
import user6 from '../public/assets/user6.jpeg'
import user7 from '../public/assets/user7.jpeg'
import "swiper/css";
import Propertys from '../example/homeComponents/Propertys'


const Home: NextPage = ({ Commentsinformation}:any) => {
 
 

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
   
     <div id="comments">
      <h3 className="text-center text-2xl text-blue-600 font-bold font-serif mt-20">
        نظرات کاربران 
    
       </h3> 
       <h2 className="text-center text-xl text-blue-300  mb-5" >مارا در شبکه های اجتماعی دنبال کنید</h2>
      <br />
      <Swiper 
      watchSlidesProgress={true}  slidesPerView={4} className="mySwiper" autoplay={{delay: 3000  }} loop={true}   modules={[Autoplay]}
       >
         <div className="">
        {  Commentsinformation.map((item:any  )=>  {
                   
                   return (
                   < SwiperSlide  key={item.id} className=' bg-slate-100 rounded-2xl flex  items-center justify-center flex-col m-10 mt-10'>
                
                    <Image src={item.image} className=' rounded-full mt-8'   width={100}  height={100}   alt={item.id} />
                    <h2 className="mt-3"> {item.username}</h2>
                    <p dir="rtl" className="h-40 mt-12 text-center text-slate-600"> {item.des}</p>
                   
                    </SwiperSlide>
)})}
        </div>
         </Swiper>
    </div>
   
 
    
    <Footer></Footer>



  </div>
  )
}

export default Home




export async function getServerSideProps( ) {

  const  commentsInfo=[{ 
    id:1,
    image :user1,
    username:"@hsjf",
    des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    icon:"../assets/insta.jpeg"
 },
 {
    id:2,
    image :user2,
    username:"@fdfgdf",
    des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    icon:"../assets/insta.jpeg"
 },{
    id:3,
    image :user3,
    username:"@ddfgdfgd",
    des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    icon:"../assets/twiiter.png"
 },{
    id:4,
    image :user4,
    username:"@dfgdfgdfg",
    des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    icon:"../assets/linkedin.png"
 },{
    id:5,
    image :user5,
    username:"@dffgd",
    des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    icon:"../assets/twiiter.png"
 },{
    id:6,
    image :user6,
    username:"@r4reter",
    des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    icon:"../assets/linkedin.png"
 },
 {
    id:7,
    image :user7,
    username:"@teterteg",
    des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    icon:"../assets/twiiter.png"
 },
 {
    id:8,
    image : user4,
    username:"@errerg",
    des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    icon:"../assets/insta.jpeg"
 },{
    id:9,
    image :user2,
    username:"@erte4tr",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
      
    icon:"../assets/linkedin.png"
 },] 

   
  return {
    props:{
 
      Commentsinformation:commentsInfo
    }, 
  }
}
 










 