import React from 'react'
import Image1 from "/src/assets/shirts/clean-blank-shirt-hanger (1).jpg"
import Image2 from "/src/assets/shirts/clean-blank-shirt-hanger.jpg"
import Image3 from "/src/assets/shirts/cute-woman-picking-outfit-choosing-shirt.jpg"
import { FaStar } from 'react-icons/fa'
const ProductsData =[
    {
        id: 1,
        img: Image1,
        title: "Upto 70% off on all Products Sale",
        description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      },
      {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        description: "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      },
      {
        id: 3,
        img: Image3,
        title: "30% off on all unisex Wear",
        description: "lorem His Life will forever be changed dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      },
    
]
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className='container'>
{/* Header section */}
<div className='text-left mb-24 '>
        <p data-aos="fade-up" className='text-sm text-primary'>Top rated products for you</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold'> Best Products</h1>
        <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. 
          sit asperiores modi sit asperiores modi</p>
      </div>

{/* Body section */}
<div className='grid grid-cols-1 sm:grid-cols-2
  md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
    {
        ProductsData.map((data)  =>(
             <div key={data.id} className='
             rounded-2xl bg-white dark:bg-gray-800
             hover:bg-black/80 dark:hover:bg-primary
             hover:text-white relative shadow-xl
             duration-300 group max-w-[300px]
             ' data-aos="zoom-in">
                {/* image section */}
                    <div className='h-[100px]'>
                        <img src={data.img}alt=""
                         className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300
                         drop-shadow-md' />
                    </div>
                    {/* details section */}
                    <div className='p-4 text-center'>
                        {/* star rating */}
                      <div className='w-full flex items-center
                         justify-center gap-1'>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                      </div>
                      <h1 className='text-xl font-bold'>{data.title}</h1>
                      <p className='text-gray-500 group-hover:text-white
                      duration-300 text-sm line-clamp-2'>{data.description}</p>
                      <button className='bg-primary hover:scale-105
                          duration-300 text-white py-1 px-4
                           rounded-full mt-4 group-hover:bg-white
                           group-hover:text-primary'
                            onClick={handleOrderPopup}
                            >
                        Order Now 
                      </button>
                    </div>
             </div>
        ))}
</div>
      </div>
    </div>
  )
}

export default TopProducts
