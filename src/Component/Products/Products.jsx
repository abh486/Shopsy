import React from 'react'
import Img1 from "/src/assets/women/expressive-young-woman-posing-studio.jpg"
import Img2 from "/src/assets/women/thoughtful-young-beautiful-girl-holding-shopping-bags-looking-right-side-with-finger-cheek-isolated-white-wall.jpg"
import Img3 from "/src/assets/women/young-girl-wearing-orange-t-shirt-holding-paper-bags-looking-camera-with-hapy-face-smiling-cheerfully-standing-white-background (1).jpg"
import Img4 from "/src/assets/women/young-woman-with-shopping-bags-beautiful-dress.jpg"
import Img5 from "/src/assets/women/girl-yellow-wall-with-shopping-bags.jpg"
import { FaStar } from 'react-icons/fa';
const ProductsData = [

  {
    id:1,
    img: Img1,
    title:"Women Ethnic",
    rating:5.0,
    color:"white",
    aosDelay:"0",
  },
  {
    id:2,
    img: Img2,
    title:"Women western",
    rating:4.5,
    color:"white",
    aosDelay:"0",
  },
  {
    id:3,
    img: Img3,
    title:"Women Tops",
    rating:5.0,
    color:"white",
    aosDelay:"0",
  },
  {
    id:4,
    img: Img4,
    title:"Women churithar",
    rating:5.4,
    color:"white",
    aosDelay:"0",
  },
  {
    id:5,
    img: Img5,
    title:"Women saree",
    rating:5.9,
    color:"white",
    aosDelay:"0",
  },
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
      {/* Header section */}
      <div className='text-center mb-10 max-w-[600px]
       mx-auto'>
        <p data-aos="fade-up" className='text-sm text-primary'>Top Selling products for you</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
        <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. 
          sit asperiores modi sit asperiores modi</p>
      </div>
       {/* Body section */}
       <div>
        <div className='grid grid-cols-1 sm:grid-cols-3
          md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 '>
            {/* card section */}
            {
              ProductsData.map((data) =>(

                <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                 key={data.id} className='space-y-3'>
                  <img src={data.img} alt=""
                 className='h-[220px] w-[300px] object-cover rounded-md ' />
                 <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400'/>
                    <span>{data.rating}</span>
                  </div>
                 </div>
                </div>
                
              ))}
        </div>
        {/* View all button */}
        <div className='flex justify-center'>
          <button className='text-center mt-10
            cursor-pointer bg-primary text-white py-1 px-5
            rounded-md'>View All Button</button>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Products
