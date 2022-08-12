 
 import React, { useState } from 'react'
 import Link from 'next/link'
 import { Formik ,Form, Field ,ErrorMessage} from 'formik' 
 import Image from 'next/image'
 import  * as yup from 'yup'
 import Pass from '../assets/pass.png'
 import { useRouter } from 'next/router'
 const initialValues = {
    name:'',
    family:'',
    email:'' ,
    phone:'',
    pass:'',
    repass:''
  } 

 const validationSchema = yup.object().shape({
    name:yup.string().required('name is requierd'),
    family:yup.string().required(' family name is requird'),

    email: yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),

      phone: yup.string()
      .required('must have phone number')
      .min(11, 'phonenumber must be 11 characters long'),
    pass:yup.string().required('pass is reqiured').min(8, 'password must have 8 characters long'),
   repass: yup.string()
    .oneOf([yup.ref('pass'), null], 'Passwords must match')
    .required('Confirm Password is required')

  })


function SignUp() {
  const router = useRouter()
  
const onSubmit =(values:any)=>{
    console.log(values);
    router.push('/')
  }
  const [Type , setType] = useState('password')
  const [Type2 , setType2] = useState('password') 

 
  return (  
    
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} className='ml-10 bg-slate-600 mb-10'> 
        <React.Fragment>
  <h1 className='text-center text-4xl font-extrabold mt-10   text-blue-700'>ثبت نام در سیستم</h1> 
 
          <Form className='flex flex-col  text-right w-4/6  md:w-2/6 ml-36  md:ml-96 gap-2 '>
        
        <div className='flex flex-col gap-2'>
        <label htmlFor='name'>نام</label>
        <Field
            dir="rtl" 
            type='text'
             className='rounded-md p-2' 
            name = 'name'
            placeholder= 'نام و نام خانوادگی خود را وارد کنید'
          
              />
              <div className='text-red-700'>
         <ErrorMessage  name='name'  />    
         </div>
         </div>

         <div className='flex flex-col gap-2'>
        <label htmlFor='family'>نام خانوادگی</label>
        <Field 
       
         dir="rtl"  
        type='text' 
        className='rounded-md p-2' 
        id='family'
        name ='family'
        placeholder= 'نام و نام خانوادگی خود را وارد کنید'
          
         />
                       <div className='text-red-700'>
       <ErrorMessage name='family'/>    </div>
      </div>
         
      <div className='flex flex-col gap-2'>
        <label htmlFor='phone'> شماره موبایل</label>
        
        <Field 
        dir="rtl" 
         type='text'
         id='phone' 
         className='rounded-md p-2' 
        name= 'phone'
        placeholder=  'شماره موبایل خود را وارد کنید'
         />
           <div className='text-red-700'>
         <ErrorMessage name='phone'/>   
          </div>
        
      
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='email'>ایمیل</label>
        <Field          
         type='email' 
         id='email'
         className='rounded-md p-2' 
        name='email'
        dir="rtl" 
        placeholder=  '   ایمیل خود را وارد کنید'
         />
          <div className='text-red-700'>
          <ErrorMessage name='email'/>  
         </div>
          </div>
     
          <div className='flex flex-col gap-2'>
        <label htmlFor='pass'>رمز عبور</label>
        <div className='flex flex-row-reverse'>
        <Field 
          className='rounded-md p-2 pl-40' 
         id='pass' 
        type={Type}
         name='pass'  
         dir="rtl" 
         placeholder=  'رمز عبور خود را وارد کنید'    
           /> 
         <Image 
           onClick={( )=> Type==='password' ?setType('text') :setType('password') }
            width={25} 
            height={25} 
            src={Pass} 
            alt ='f'
            />   
        
        </div> 
        <div className='text-red-700'>
        <ErrorMessage name='pass'/>   
        </div>

        </div>
        <div className='flex flex-col gap-2' >
        <label htmlFor='repass'> تکرار رمز عبور</label>
        <div className='flex flex-row-reverse'>
        <Field
         className='rounded-md p-2 pl-40' 
         id='repass' 
        type={Type2}
        name='repass'
        dir="rtl" 
        placeholder=  'رمز عبور خود را دوباره وارد کنید'    
            /> 
              <Image
             onClick={( )=> Type2==='password' ?setType2('text') :setType2('password') } 
           width={25} 
           height={25}
            src={Pass} 
            alt ='f'
            />       
          </div>
          <div className='text-red-700'>
          <ErrorMessage name='repass'/>    
         </div>
          </div>
           <button className='bg-blue-700 px-3 py-1 font-serif text-xl rounded-md text-white' type="submit"  > ثبت نام </button>
        </Form>
         <h2 className='text-center mb-10'>قبلا عضو شده اید؟ <Link href='/login' className='text-blue-400 ' >ورود </Link>  </h2>
</React.Fragment>

    </Formik>
    
  )
}

export default SignUp