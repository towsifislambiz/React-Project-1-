import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button className={`bg-c2 px-2 py-4 md:px-3 md:py-6 ${className}`}>
      <span className="text-white py-2 px-4 md:py-4 md:px-9  text-base md:text-lg font-jost font-medium border border-white">
        {text}
      </span>
    </button>
  )
}

export default Button
