import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
      <>
    <div className='w-[98%] sm:w-[380] h-[490] mx-auto mb-8 mt-6'>
      <div className=''>
        <div className='flex justify-center items-center'><Image src='/images/nikelogo.png' alt='photo' width={80} height={80}/>
        </div>
        <div className='text-1xl font-semibold flex justify-center mx-auto items-start text-center'><p className='w-6/12 sm:w-5/12'>YOUR ACCOUNT FOR EVERYTHING NIKE</p></div>
     </div>

      <div>
        <form className='mt-4' action="">
            
            <input className='block border-2 w-[280] pl-4 py-1 mx-auto mb-4 rounded' type="email" placeholder='Email' />
            <input className='block border-2 w-[280] pl-4 py-1 mx-auto rounded' type="password" placeholder='Password' />
            <div className=' flex justify-between w-[280] mx-auto text-xs mt-3 items-center'>
                <div className='flex items-center'>
                <input  className='' type="checkbox"/>
                <label  className='ml-2'>Keep me signed in</label>
                </div>
                <div className=''>
                    <p>Forgetten password?</p>
                </div>
            </div>

            <p className='w-[280] text-sm mx-auto mt-5'>By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
            <button className=' w-[240] sm:w-[280] bg-black text-white mx-auto block rounded-full py-2 mt-6' type='button'>SIGN IN</button>
            <p className='w-[280] mx-auto text-sm mt-2 text-center'>Not a Member? <Link className='ml-3 underline' href="/joinus">Join US</Link></p>
        </form>
      </div>
    </div>
      </>
  )
}
export default login
