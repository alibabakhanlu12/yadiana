import type { NextPage } from 'next'
import Navbar from '../example/homeComponents/Navbar'
import Navigation from '../example/homeComponents/Navigation'
import Head from 'next/head'  
import Questions from '../example/homeComponents/Questions'
import Footer from '../example/homeComponents/Footer'
import  React,{useEffect ,useState} from 'react'
import Image from 'next/image'
import ilustrate1 from   '../assets/ilustrate1.webp'
import ilustrate2 from   '../assets/ilustrate2.webp'
import ilustrate3 from   '../assets/ilustrate3.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from 'swiper'
import "swiper/css/bundle";
import user1 from '../assets/user1.jpeg'
import user2 from '../assets/user2.jpeg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpeg'
import user6 from '../assets/user6.jpeg'
import user7 from '../assets/user7.jpeg'
import "swiper/css";


const Home: NextPage = ({informations,Commentsinformation}:any) => {
 
  const [image , setImage] = useState(ilustrate1);

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
 
 
    <div id='propertys'>
     
    <h1 className=' mt-20 mb-10 text-slate-500  text-center text-3xl'> ویژگی های یادینا
</h1>
<p className=' mb-6 text-center px-48 text-slate-500 text-xl '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
    <div className='flex mt-10   flex-col items-center justify-evenly  md:flex-row-reverse'>
      
      <Image src={image} width={600} height={520} alt='sd'/>
<div className=' gap-4 ' >

    { informations.map((item:any) =>(
      
  
      <div key={item.id}   className='flex transition duration-300 ease-linear hover:transform  active:bg-blue-600 mt-10  items-center justify-center bg-slate-200 cursor-pointer rounded-lg ' onClick={() =>{setImage(item.image)}}>
      
      <div className='flex flex-row-reverse items-center  w-80  ' >
      <h2 className='bg-slate-300 rounded-full w-32 text-center h-10 '>  {item.id}</h2>
     <div className='flex flex-col ' >
      <h2 className='text-2xl text-center'>  {item.title}</h2>
     <p className='text-center'> {item.des}    </p>
      </div>

        </div>


      </div>

  ))}

  </div>
    </div>
    </div>
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
                
                    <Image src={item.image} className=' rounded-full mt-8'   width={100}  height={100}   alt={item.des} />
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

  const info = [
    {
      id:1,
      image:ilustrate1,
      title:"مدیریت محتوا",
      des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
    }, {
      id:2,
      image:ilustrate2,
      title:"یادگیری الکترونیکی",
      des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
    }, {
      id:3,
      image:ilustrate3,
      title:"لورم ایپسوم",
      des:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
    },
  ]
  return {
    props:{
      informations:info,
      Commentsinformation:commentsInfo
    }, 
  }
}
 










 