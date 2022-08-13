 
import React, { useState } from 'react'
import Link from 'next/link'
import { Formik ,Form, Field ,ErrorMessage} from 'formik' 
import Image from 'next/image'
import  * as yup from 'yup'
import Pass from '../assets/pass.png'
import { useRouter } from 'next/router'
const initialValues = {
   email:'' ,
   pass:'',

 } 

const validationSchema = yup.object().shape({
    email: yup.string()
   .email('Please enter a valid email')
   .required('Email is required'),

   

 })
function ForgetPassWord() {
    const router = useRouter()
  
    const onSubmit =(values:any)=>{
        console.log(values);
        router.push('/')
      }
    
     
    return (  
    
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} className=' bg-slate-600'> 
        <React.Fragment>
  <h1 className='text-center text-4xl font-extrabold mt-10   text-blue-700'>   فراموشی رمز عبور  </h1> 
  <h1 className='text-center text-xl  mt-2  text-slate-500'>   جهت ارسال کد تایید ، ایمیل خود را وارد کنید. </h1> 
 
          <Form className='flex flex-col  text-right w-4/6  md:w-2/6 ml-36  md:ml-96 gap-2 '>
        
 
     

      <div className='flex flex-col gap-2'>
        <label htmlFor='email'>ایمیل</label>
        <Field          
         type='email' 
         id='email'
         className='rounded-md p-1' 
        name='email'
        dir="rtl" 
        placeholder=  '   ایمیل خود را وارد کنید'
         />
          <div className='text-red-700'>
          <ErrorMessage name='email'/>  
         </div>
          </div>
      
       


           <button className='bg-blue-700 px-3 py-1 font-serif text-xl rounded-md text-white' type="submit"  > ارسال لینک </button>
        </Form>
        
         <h2 className=' text-center mt-3'>اکانتی ندارید؟<Link href='/signup' className='text-blue-900 ' > ثبت نام </Link> کنید</h2>
</React.Fragment>

    </Formik>
    
 
  )
}

export default ForgetPassWord