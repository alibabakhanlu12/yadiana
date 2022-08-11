import React,{useState} from 'react'
import Pass from '../assets/pass.png'
import Image from 'next/image'
 import Link from 'next/link'
function SignUp() {
  const [Type , setType] = useState('password')
  const [Type2 , setType2] = useState('password')

  const [name , setname] = useState('')
  const [ family, setfamily] = useState('')
  const [phone , setphone] = useState('')
  const [email , setemail ] = useState('')
  const [pass , setpass] = useState('')
  const [repass , setrepass] = useState('')
  

 const onsubmitHandler =(e:any) =>{
  e.preventDefault()
console.log(name , family , pass , repass, phone , email);

  }

  return (  
    <div className='flex flex-col '> 

      <h1 className='text-center text-3xl  text-blue-700'>ثبت نام در سیستم</h1>

    <form onSubmit={onsubmitHandler}  className='flex flex-col text-right justify-center items-end w-4/6   gap-4'>
        <label htmlFor='name'>نام</label>
        <input   dir="rtl"  type='text' name='name' className='' value={name} onChange={ (e:any) =>{setname(e.target.value)}}/>

        <label htmlFor='name'>نام خانوادگی</label>
        <input dir="rtl"  type='text' className='' value={family} onChange={(e:any) =>{setfamily(e.target.value)}}/>

        <label htmlFor='name'> شماره موبایل</label>
        <input dir="rtl"  type='text' className='' value={phone} onChange={(e:any) =>{setphone(e.target.value)}}/>

        <label htmlFor='name'>ایمیل</label>
        <input dir="rtl"  type='email' className='' value={email} onChange={(e:any) =>{setemail(e.target.value)}}/>


        <label htmlFor='name'>رمز عبور</label>
        <div className='flex flex-row-reverse'>
        <input  dir="rtl"  type={Type}  value={pass} onChange={(e:any) =>{setpass(e.target.value)}}/> <Image onClick={( )=> Type==='password' ?setType('text') :setType('password') } width={25} height={25} src={Pass} alt ='f'/>   
        
        </div>
        <label htmlFor='name'> تکرار رمز عبور</label>
        <div className='flex flex-row-reverse'>
        <input dir="rtl"  type={Type2}  className='' value={repass} onChange={(e:any) =>{setrepass(e.target.value)}}/>  <Image onClick={( )=> Type2==='password' ?setType2('text') :setType2('password') } width={25} height={25} src={Pass} alt ='f'/>  
        
        </div>
      <button ></button>
       <button className='bg-blue-900 rounded-md px-3 py-1 text-white' > ثبت نام </button>
    </form>
    <h2 className='text-center'>قبلا عضو شده اید؟ <Link href='/login' >ورود </Link>  </h2>


    </div>
  )
}

export default SignUp