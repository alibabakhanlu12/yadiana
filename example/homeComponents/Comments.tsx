 
import  React,{useEffect ,useState} from 'react'
import Image from 'next/image'
 
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from 'swiper'
import "swiper/css/bundle";
 
function Comments({Commentsinformation}:any) {
  return (
      
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
   
  )
}

export default Comments