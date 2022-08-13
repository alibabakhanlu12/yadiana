import React , {useState} from 'react'
import Image from 'next/image'
import ilustrate1 from   '../../assets/ilustrate1.webp'
import ilustrate2 from   '../../assets/ilustrate2.webp'
import ilustrate3 from   '../../assets/ilustrate3.webp'

function Propertys() {
 
  const [image , setImage] = useState(ilustrate1);

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
  return (
    <div id='propertys'>
     
    <h1 className=' mt-20 mb-10 text-slate-500  text-center text-3xl'> ویژگی های یادینا
</h1>
<p className=' mb-6 text-center px-48 text-slate-500 text-xl '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
    <div className='flex mt-10   flex-col items-center justify-evenly  md:flex-row-reverse'>
      
      <Image src={image} width={600} height={520} alt='sd'/>
<div className=' gap-4 ' >

    {info.map((item) =>(
      
  
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
 
 

    </div></div>
  )
}

export default Propertys