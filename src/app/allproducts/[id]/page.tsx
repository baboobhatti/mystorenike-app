'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Product {
  id: number;
  tittle: string;
  detail: string;
  price: number;
  imgurl: string;
}

const pdetail: Product[] = [
  {
    id: 1,
    tittle: 'Nike Court Legacy Lift',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl: '/prdimg/image1.png',
  },
  {
    id: 2,
    tittle: 'Nike Air Force 1 Mid',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl: '/prdimg/image2.png',
  },
  {
    id: 3,
    tittle:'Nike Dunk Low Retro',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image3.png'
  },
  {
    id: 4,
    tittle:'Nike Dunk Low Retro',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image4.png'
  },
  {
    id: 5,
    tittle:'Nike Air Force 1 Mid',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image5.png'
  },
  {
    id: 6,
    tittle:'Nike Court Legacy Lift',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image6.png'
  },
  {
    id: 7,
    tittle:'Nike Dri-FIT UV Hyverse',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image7.png'
  },
  {
    id: 8,
    tittle:'Nike Dri-FIT UV Miler',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image8.png'
  },
  {
    id: 9,
    tittle:'Nike Court Vision Low Next Nature',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image9.png'
  },
  {
    id: 10,
    tittle:'Nike Dri-FIT Ready',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image10.png'
  },
  {
    id: 11,
    tittle:'Nike Dri-FIT UV Hyverse',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image11.png'
  },
  {
    id: 12,
    tittle:'Nike Swoosh',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image12.png'
  },
  {
    id: 13,
    tittle:'Nike One Leak Protection: Period',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image13.png'
  },
  {
    id: 14,
    tittle:'Nike Standard Issue',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image14.png'
  },
  {
    id: 15,
    tittle:'Older Kids "Oversized Woven Jacket"',
    detail:'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouet.',
    price: 3999,
    imgurl:'/prdimg/image15.jpg'
  }
];

const Dynamic = () => {
  const params = useParams();
  const id = Number(params.id); // Convert id to a number
  const cart = pdetail.find((data) => data.id === id);
  
  if (!cart) {
    return <h1>Product not found</h1>; // Handle case where product doesn't exist
  }

  return (
    <div className="flex flex-col items-center md:justify-center md:flex-row mt-10 mb-24 gap-8">
      {/* Left */}
      <div className="">
        <Image className="w-[400] sm:[450]" src={cart.imgurl} alt={cart.tittle} width={440} height={440} />
      </div>

      {/* Right */}
      <div className="">
        <div className="w-72 md:w-64 border-2 sm:mt-7 md:mt-14">
          <h1 className="text-2xl font-semibold">{cart.tittle}</h1>
          <p className="text-sm text-gray-700 mt-6">{cart.detail}</p>
          <h2 className="text-xl font-semibold mt-4 mb-6">{`Rs. ${cart.price}`}</h2>
          <Link href="/#">
            <button className="bg-black text-white px-4 py-2 rounded-full" type="button">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;

