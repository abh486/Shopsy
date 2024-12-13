import React from "react";
import footerlogo from "/src/assets/icons8-bag-100.png";
import Banner from "/src/assets/silhouettes-hills-street-lamps-cloudy-sky-beautiful-sunset.jpg";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa"


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#services",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white ">
      <div className="container">
        <div data-aos ="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
            {/* company details */}
            <div className="py-8 px-4">
                <h1
                className="
                     sm:text-3xl text-xl font-bold sm:text-left
                     text-justify mb-3 flex items-center gap-3">
                    <img src={footerlogo}alt=""
                    className="max-w-[50px]" />
                    Shopsy
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adiisicing 
                    elit. Quasi saepe voluptas veniam
                     voluptatibus sint perferendis illo, l
                     aboriosam earum? Praesentium doloribus err
                     or vero facere aspernatur si
                    milique a odit repellat repudiandae minima!
                </p>
            </div>
             {/* footer details */}
             <div className="grid grid-cols-2 sm:grid-cols-3
              col-span-2 md:pl-10">
                <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl
                font-bold sm:text-left text-justify mb-3"> Links</h1>
                <ul className="flex flex-col gap-3">
                    {
                        FooterLinks.map((link) => (
                            <li key={link.title} 
                               className="cursor-pointer
                                  hover:text-primary hover:translate-x-1
                                  duration-300 text-gray-200">
                                    <span>{link.title}</span>
                                  </li>
                    ))}
                </ul>
              </div>
             </div>
               {/* Social Links */}
               <div>
                <div className="flex items-center gap-3 mt-10">
                   <a href="#">
                   < FaInstagram className="text-3xl"/>
                   </a>
                   <a href="#">
                    <FaFacebook className="text-3xl" />
                   </a>
                   <a href="#">
                    <FaLinkedin className="text-3xl" />
                   </a>
                </div>
                <div className="mt-6">
                    <div className="flex items-center gap-3">
                        <FaLocationArrow/>
                        <p>Noida,delhi</p>
                    </div>
                    <div className="flex items-center gap-3
                    mt-3">
                      <FaMobileAlt/>
                      <p>+91 7012333024</p>
                    </div>
                </div>
               </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;