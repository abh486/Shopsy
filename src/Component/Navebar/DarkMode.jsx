import React from 'react'
import Lightbutton from "/src/assets/website/icons8-toggle-button-64.png"
import Darkbutton from "/src/assets/website/icons8-toggle-button-78.png"

const DarkMode = () => {
    const [theme , setTheme] = React.useState(
        localStorage.getItem("theme") ||   "light"
      )

      const element = document.documentElement
     
      React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
           
        } else {
            element.classList.remove("dark");
        }
        localStorage.setItem("theme" , "light");
      },[theme])

  return (
    <div className='relative'>
      <img src={Lightbutton} alt=""
      onClick={() => setTheme(theme ==="light" ? "dark" : "light")}
      className={`w-12 cursor-pointer 
        drop-shadow-custom
         transition-all duration-300
         absolute right-0 z-10 ${
      theme === "dark" ? "opacity-0 ": "opacity-100"
      }` }
       />
      <img src={Darkbutton} alt="" 
       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-custom transition-all 
        duration-300
        "  />
    </div>
  )
}

export default DarkMode
