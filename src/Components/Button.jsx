import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button className={`bg-c2 px-3 py-6 ${className}`}>
      <span className="text-white py-4 px-9 text-lg font-jost font-medium border border-white">
        {text}
      </span>
    </button>
  )
}

export default Button
