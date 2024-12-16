
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      {/* Section-1 */}
      <div className='flex flex-col bg-gray-100 justify-center text-xs mt-3 py-2 sm:text-lg'>
        <div className='text-center'><p>Hello Nike App</p></div>
        <div className='text-center'><p>Download the app to access everything Nike. <a className='underline' href="#">Get App</a> </p></div>
      </div>

      <div className="w-auto mx-auto flex flex-col items-center mb-8 ">
        <div className="w-[94%] inline-block">
          <Image className="w-full" src='/images/homepage.png' alt='photo' width={1200} height={1200} />
        </div>

        <div className="flex  flex-col justify-center items-center mt-10">
          <p className="text-center font-semibold mb-2 text-lg">First Look</p>
          <p className=" text-center text-3xl sm:text-5xl font-semibold mb-3 sm:tracking-wider sm:mb-6">NIKE AIR MAX PULSE</p>
          <p className="text-center w-3/5 text-xs sm:font-semibold sm:text-sm mb-6">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse designed to push you past your limits and help you go to the max.</p>

          <div className="text-center flex gap-2">
            <button type="button" className="bg-black text-white px-5 py-2 text-sm rounded-3xl">Notify Me</button>
            <button type="button" className="bg-black text-white px-5 py-2 text-sm rounded-3xl">Shop Air Max</button>
          </div>
        </div>
      </div>

      {/*Cards Section*/}
      <div className='w-[94%] mb-6 mx-auto'>
        {/* 01 */}
      <div className='flex justify-between items-center'>
          <div className='ml-4 text-xl font-semibold'><p>Best of Air Max</p></div>
          <div className='flex py-2 gap-2 items-center mr-1'>
            <div className='text-sm mr-6  font-semibold ns:mr-0'><p>Shop</p></div>
            <div className='bg-gray-100 p-1 rounded-full'><Image className="" src='/images/back48.png' alt='photo' width={10} height={10} /></div>
            <div className='bg-gray-200 p-1 rounded-full'><Image className="" src='/images/more48.png' alt='photo' width={10} height={10} /></div>
          </div>
        </div>

        {/* 02 */}
        <div className='ns:grid ns:grid-cols-3 ns:gap-3'>
          {/* cart-1 */}
          <div className='mb-4 ns:mb-1'>
            <Image className="w-full" src='/images/boot1.png' alt='photo' width={500} height={500} />
            <div className='text-xs ml-1 mt-1 sm:ml-0 md:text-sm  font-semibold'>
              <div className='flex justify-between ns:flex-col sm:flex-row sm:justify-between'>
                <p>Nike Air Max 97 SE</p>
                <p>Rs. 16995</p>
              </div>
              <p className='text-gray-500'>Mens Shoes</p>
            </div>
          </div>

          {/* cart-2 */}
          <div className='mb-4 ns:mb-1'>
            <Image className="w-full" src='/images/boot2.png' alt='photo' width={500} height={500} />
            <div className='text-xs ml-1 mt-1 sm:ml-0 md:text-sm font-semibold'>
              <div className='flex justify-between ns:flex-col sm:flex-row sm:justify-between'>
                <p>Nike Air Max 97 SE</p>
                <p>Rs. 16995</p>
              </div>
              <p className='text-gray-500'>Female Shoes</p>
            </div>
          </div>

          {/* cart-3 */}
          <div className='mb-4 ns:mb-1'>
            <Image className="w-full" src='/images/boot3.png' alt='photo' width={500} height={500} />
            <div className='text-xs ml-1 mt-1 sm:ml-0 md:text-sm font-semibold'>
              <div className='flex justify-between ns:flex-col sm:flex-row sm:justify-between'>
                <p>Nike Air Max 97 SE</p>
                <p>Rs. 16995</p>
              </div>
              <p className='text-gray-500'>Mens Shoes</p>
            </div>
          </div>
        
        </div>

      </div>








      {/* Image div */}
      {/* <div className="w-auto mx-auto flex flex-col items-center mb-8 mt-10 "> */}
        {/* image */}
        {/* <div className="w-[94%] lg:h-[550] xl:h-[620] inline-block">
          <p className="mb-2 font-semibold text-lg">Featured</p>
          <Image className="w-full h-full" src='/images/running.jpg' alt='photo' width={1200} height={1200} />
        </div> */}

        {/*text 02 */}
        {/* <div className="flex  flex-col justify-center items-center mt-10">
          <p className=" text-center text-2xl ns:text-3xl sm:text-4xl font-semibold mb-3 md:text-5xl md:tracking-wide sm:mb-4">STEP INTO WHAT FEELS GOOD</p>
          <p className="text-center w-3/5 text-xs sm:font-semibold sm:text-xs mb-4">Cause everyone should know the feeling of running in that perfect pair.</p>

          <div className="text-center flex">
            <button type="button" className="bg-black text-white px-5 py-2 text-sm rounded-3xl">Find Your Shoe</button>
          </div>
        </div>
      </div> */}


      {/*Cards 02*/}
      {/* <div className="w-[94%] mx-auto  mt-10"> */}

        {/* 01 */}
        {/* <div className="text-lg font-semibold mb-2"><p>Gear Up</p></div> */}

        {/* div-2 */}
        {/* <div className="mx-auto flex flex-col gap-2 ns:gap-3 ns:flex-row"> */}
          {/* <div className="ns:w-6/12">
            <div className='flex gap-1 items-center justify-center mb-2'>
              <div className='text-xs mr-4 font-semibold ns:mr-0'><p>Shop Mens</p></div>
              <div className='hidden ns:block bg-gray-100 p-1 rounded-full'><Image className="" src='/images/back48.png' alt='photo' width={10} height={10} /></div>
              <div className='hidden ns:block bg-gray-100 p-1 rounded-full'><Image className="" src='/images/more48.png' alt='photo' width={10} height={10} /></div>
            </div>
            <div className="flex gap-1">
              <div className=""><Image className="" src='/images/femal.png' alt='photo' width={500} height={500} />
                <div className='text-xs ml-1 mt-2 sm:ml-0 md:text-sm  font-semibold'>
                  <div className='flex flex-col lg:flex-row md:justify-between'>
                    <p>Nike Air Max 97 SE</p>
                    <p>Rs. 16995</p>
                  </div>
                  <p className='text-gray-500'>Mens Shoes</p>
                </div>
              </div>
              <div className=""><Image className="" src='/images/lowertrnk2.png' alt='photo' width={500} height={500} />
                <div className='text-xs ml-1 mt-2 sm:ml-0 md:text-sm  font-semibold'>
                  <div className='flex flex-col lg:flex-row md:justify-between'>
                    <p>Nike Air Max 97 SE</p>
                    <p>Rs. 16995</p>
                  </div>
                  <p className='text-gray-500'>Mens Shoes</p>
                </div>
              </div>
            </div>
          </div>
 */}



          {/* womens */}

          {/* <div className="ns:w-6/12">
            <div className='flex gap-1 items-center justify-center mb-2'>
              <div className='text-xs mr-4 font-semibold ns:mr-0'><p>Shop Womens</p></div>
              <div className='hidden ns:block bg-gray-100 p-1 rounded-full'><Image className="" src='/images/back48.png' alt='photo' width={10} height={10} /></div>
              <div className='hidden ns:block bg-gray-100 p-1 rounded-full'><Image className="" src='/images/more48.png' alt='photo' width={10} height={10} /></div>
            </div>
            <div className="flex gap-1">
              <div className=""><Image className="" src='/images/femal.png' alt='photo' width={500} height={500} />
                <div className='text-xs ml-1 mt-2 sm:ml-0 md:text-sm  font-semibold'>
                  <div className='flex flex-col lg:flex-row md:justify-between'>
                    <p>Nike Air Max 97 SE</p>
                    <p>Rs. 16995</p>
                  </div>
                  <p className='text-gray-500'>Mens Shoes</p>
                </div>
              </div>
              <div className=""><Image className="" src='/images/lowertrnk2.png' alt='photo' width={500} height={500} />
                <div className='text-xs ml-1 mt-2 sm:ml-0 md:text-sm  font-semibold'>
                  <div className='flex flex-col lg:flex-row md:justify-between'>
                    <p>Nike Air Max 97 SE</p>
                    <p>Rs. 16995</p>
                  </div>
                  <p className='text-gray-500'>Mens Shoes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* Image div */}
      {/* <div className="w-auto mx-auto flex flex-col items-center mb-8 mt-10 "> */}
        {/* image */}
        {/* <div className="w-[94%] lg:h-[550] xl:h-[620] 2xl:h-[680] inline-block mb-6">
          <p className="mb-2 font-semibold text-lg">Dont Miss</p>
          <Image className="w-full h-full" src='/images/jordndob.png' alt='photo' width={1200} height={1200} />
        </div> */}

        {/*text 02 */}
        {/* <div className="flex  flex-col justify-center items-center">
          <p className=" text-center text-2xl ns:text-3xl sm:text-4xl font-semibold mb-3 md:text-5xl md:tracking-wide sm:mb-4">FLIGHT ESSENTIALS</p>
          <p className="text-center w-3/5 text-xs sm:font-semibold sm:text-xs mb-4">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p> */}

          {/* <div className="text-center flex">
            <button type="button" className="bg-black text-white px-5 py-2 text-sm rounded-3xl">Shop</button>
          </div>
        </div>
      </div> */}


      {/* <div className='w-[94%] pb-14 mx-auto mt-10'> */}
        {/* 01 */}
        {/* <div className='flex justify-between items-center'>
          <div className='mb-4 text-xl font-semibold'><p>The Essentials</p></div>
        </div> */}

        {/* 02 */}
        {/* <div className='flex flex-col gap-2 ns:flex-row ns:gap-1 sm:gap-2 md:gap-4'> */}
          {/* cart-1 */}
          {/* <div className='w-[92%] h-[230] mx-auto ns:w-4/12 ns:h-[200] sm:w-4/12 sm:h-[230] md:h-[280] lg:h-[340] 2xl:h-[420]'>
            <Image className="w-full h-full" src='/images/mens.png' alt='photo' width={500} height={300} />
            <button className="relative bottom-14 left-6 bg-white rounded-full px-3 py-1" type="button">Mens</button>
          </div> */}


          {/* cart-2 */}
          {/* <div className='w-[95%] h-[260] mx-auto hidden ns:block ns:w-4/12 ns:h-[200] sm:w-4/12 sm:h-[230] md:h-[280] lg:h-[340] 2xl:h-[420]'>
            <Image className="w-full h-full" src='/images/womens.png' alt='photo' width={500} height={300} />
            <button className="relative bottom-14 left-6 bg-white rounded-full px-3 py-1" type="button">Womens</button>
          </div> */}

          {/* cart-3 */}
          {/* <div className='w-[92%] h-[230] mx-auto ns:w-4/12 ns:h-[200] sm:h-[230] md:h-[280] lg:h-[340] 2xl:h-[420]'>
            <Image className="w-full h-full" src='/images/kids.png' alt='photo' width={500} height={300} />
            <button className="relative bottom-14 left-6 bg-white rounded-full px-3 py-1" type="button">kids</button>
          </div>
        </div>
      </div> */}




    </>
  );
}
