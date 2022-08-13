import React from 'react'
import Image from 'next/image'
import Intro from '../../assets/intro.png'
import Link from 'next/link'
function Navigation () {
  return (
    <div className="flex flex-col-reverse  md:flex-row" id='navigation'>
      
      <div className='mt-10'>
        <Image alt='f' src={Intro}/>
        </div>  
        <div className='flex items-center  gap-5  flex-col justify-center'>
            <h1 className='text-4xl text-center mt-24'>سامانه جامع آموزش دوره‌های تخصصی</h1>
        <p className='items-center text-center'>
        سامانه ای هوشمند آموز برپایه محتوا، آموزش برخط و طراحی آزمون، جهت ارتقا سطح فنی و تخص کت کنندگان در دوره های پیشنهادی با سناریوهای مختل

        </p>
        <Link href='/login' className='text-blue-800 hover:bg-sky-500 px-2 py-2 rounded-md '> ورود به سامانه</Link>
        </div>

    </div>
  )
}

export default Navigation 