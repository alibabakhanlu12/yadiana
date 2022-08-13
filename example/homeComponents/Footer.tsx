import React from 'react'

function Footer() {
  return (
    <div id="footer" className='bg-blue-700 mb-2 items-center justify-evenly text-white flex md:flex-row-reverse flex-col'>
      <div  className='mr-4'>

        <h1 className='text-right  text-3xl mt-3 ' >سامانه یادینا </h1>
        <p className='text-right w-96  mt-2'>   هدف سامانه ارتقا سطح فنی و تخصصی شرکت کنندگان در دوره های پیشنهادی با سناریوهای مختلف آموزشی می باشد. این سامانه آمادگی برگزاری دوره های مختلف آموزش کارمندان سازمان ها و موسسات را دارد</p>
      </div>
    <div className='ml-3'>
    <h3 className='text-right text-3xl mt-3 mb-3'>ارتباط با ما </h3>
    <h2 className='text-right'>آدرس: تبریز– خ ۲۹ بهمن–دانشگاه تبریز–دانشکده برق–۱۴۰</h2>
    <h2 className='text-right'>شماره تماس: ۳۳۸۳۰۷۲۸– ۰۴۱</h2>
    <h2 className='text-right'>ایمیل: info@yadina.ir</h2>

    </div>
    </div>
  )
}

export default Footer