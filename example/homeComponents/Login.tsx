 
 import Link from 'next/link'
 import { Formik ,Form, Field ,ErrorMessage} from 'formik' 
import React from 'react' 
 import  * as yup from 'yup'
 
 import { useRouter } from 'next/router'
 const initialValues = {
    email:'' ,
    pass:'',
 
  } 

 const validationSchema = yup.object().shape({
     email: yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),

       
    pass:yup.string().required('pass is reqiured').min(8, 'password must have 8 characters long'),
  //  repass: yup.string()
  //   .oneOf([yup.ref('pass'), null], 'Passwords must match')
  //   .required('Confirm Password is required')

  })


  
function Login() {
  const router = useRouter()
  
const onSubmit =(values:any)=>{
    console.log(values);
    router.push('/admin/dashboard')
  }
 
 
  return (  
    
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} className='flex flex-col items-center justify-center bg-slate-600'> 
        <React.Fragment>
  <h1 className='text-center text-4xl font-extrabold mt-10   text-blue-700'>ورود به سیستم</h1> 
 
          <Form className='flex flex-col    items-center justify-center  text-right  px-20  mt-10 gap-2 '>
        
 
     

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
     
          <div className='flex flex-col gap-2'>
        <label htmlFor='pass'>رمز عبور</label>
        <div className='flex flex-row-reverse -gap-10'>
        <Field 
          className='rounded-md  p-1 ' 
         id='pass' 
        type='password'
         name='pass'  
         dir="rtl" 
         placeholder=  'رمز عبور خود را وارد کنید'    
           /> 
        
        </div> 
        <div className='text-red-700'>
        <ErrorMessage name='pass'/>   
        </div>

        </div>
       


           <button className='bg-blue-700 px-3 py-1 font-serif text-xl rounded-md text-white' type="submit"  > ورود </button>
        </Form>
        <h2 className='text-center'>   اگر رمز عبور خود را فراموش کرده اید ؟<Link href='/forget-password'><span className='text-blue-900'> کلیک </span></Link> کنید</h2>
      
         <h2 className='text-center'>اکانتی ندارید؟<Link href='/signup' className='text-blue-900 ' >    ثبت نام </Link> کنید</h2>
</React.Fragment>

    </Formik>
    
  )
}

export default Login