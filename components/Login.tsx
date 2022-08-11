import React,{useState} from 'react'
import Pass from '../assets/pass.png'
import Image from 'next/image'
 import Link from 'next/link'
function Login() {
  const [Type , setType] = useState('password')
 
 
 
  const [email , setemail ] = useState('')
  const [pass , setpass] = useState('')
 
 
  const emailhandler = (e:any) =>{
    setemail( e.target.value)
  }
  const passhandler = (e:any) =>{
    setpass(  e.target.value)
  }

 

 const onsubmitHandler =(e:any) =>{
  if(email.length<=6){
    console.log('sfdffsdf');
  }
  e.preventDefault()
console.log(  pass  , email);

  }
  const keydownhandler = ()=>{
    if(email.length<=8){
      console.log("not enoufh");
    } else {
      console.log('its enought');
    }
  }

  return (  
    <div className='flex flex-col '> 

      <h1 className='text-center text-3xl  text-blue-700'> ورود به سیستم</h1>

    <form onSubmit={onsubmitHandler}  className='flex flex-col text-right justify-center items-end w-4/6   gap-4'>
        
        <label htmlFor='name'>ایمیل</label>
        <input dir="rtl" onKeyDown={keydownhandler} type='email' className='' value={email} onChange={emailhandler}/>


        <label htmlFor='name'>رمز عبور</label>
        <div className='flex flex-row-reverse'>
        <input  dir="rtl"  type={Type}  value={pass} onChange={passhandler}/> <Image onClick={( )=> Type==='password' ?setType('text') :setType('password') } width={25} height={25} src={Pass} alt ='f'/>   
        
        </div> 
 
       <button className='bg-blue-900 rounded-md px-3 py-1 text-white' > ورود</button>
    </form>
    <h2 className='text-center'>قبلا عضو شده اید؟ <Link href='/signup' > ثبت نام</Link>  کنید</h2>
   


    </div>
  )
}

export default Login