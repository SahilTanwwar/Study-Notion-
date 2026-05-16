import React from 'react'
import {Link} from "react-router-dom"

const Button = ({children, active, linkto}) => {
  const handleClick = (e) => {
    if (linkto && linkto.startsWith('#')) {
      e.preventDefault();
      document.querySelector(linkto)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link to={linkto} onClick={handleClick}>
        <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold
        ${active ? "bg-yellow-50 text-black":" bg-richblack-800"}
        hover:scale-95 transition-all duration-200
        `}>
            {children}
        </div>
    </Link>
  )
}

export default Button
