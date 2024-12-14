import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div>
  <div className='pl-10 sm:pl-0 sm:grid sm:gap-6 md:grid-cols-12 md:gap-0'>
    {/* 01 */}
  <div className='flex flex-col gap-4 
                   sm:flex-row sm:justify-evenly
                   md:col-span-8 md:justify-start md:gap-0
                   '>  
      <div className='md:w-4/12'>
      <ul className='md:ml-4'>
      <li><Link className='text-lg' href='#'>FIND A STORE</Link></li>
      <li><Link className='' href='#'>Become A Member</Link></li>
      <li><Link className='' href='#'>Sign Up for Email</Link></li>
      <li><Link className='' href='#'>Send Us Feedback</Link></li>
      <li><Link className='' href='#'>Student Discounts</Link></li>
      </ul>
      </div>

      <div className='md:w-5/12'>
      <ul className=''>
      <li><Link className='text-lg' href='#'>GET HELP</Link></li>
      <li><Link className='' href='#'>Order Status</Link></li>
      <li><Link className='' href='#'>Delivery</Link></li>
      <li><Link className='' href='#'>Returns</Link></li>
      <li><Link className='' href='#'>Payment Options</Link></li>
      <li><Link className='' href='#'>Contact Us On Nike.com Inquiries</Link></li>
      <li><Link className='' href='#'>Contact Us On All Other Inquiries</Link></li>
      </ul>
      </div>
      
      <div className='md:w-3/12'>
      <ul className='text-lg'>
      <li><Link className='' href='#'>ABOUT NIKE</Link></li>
      <li><Link className='' href='#'>News</Link></li>
      <li><Link className='' href='#'>Careers</Link></li>
      <li><Link className='' href='#'>Investors</Link></li>
      <li><Link className='' href='#'>Sustainability</Link></li>
      </ul>
      </div>
  </div>
  {/* 02 */}
    <div className='hidden sm:block md:col-span-4'>
     <div className='flex justify-center gap-6 md:gap-2'>
     <Image className='rounded-3xl' src='/images/fabicon.png' alt='photo' width={50} height={50}/>
     <Image className='rounded-3xl' src='/images/ticon.jpg' alt='photo' width={50} height={50}/>
     <Image className='rounded-3xl' src='/images/inicon.png' alt='photo' width={50} height={50}/>
     <Image className='rounded-3xl' src='/images/yticon.png' alt='photo' width={50} height={50}/>   
     </div>
    </div>
  </div>
{/* 02 */}
   <div className='h-8 bg-black'></div>
  </div>
    </>
  )
}

export default Footer
