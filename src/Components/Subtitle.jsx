import React from 'react'

const Subtitle = ({ className, Text , position}) => {
  return (
  <h4
       className={`group relative inline-block cursor-pointer font-medium font-vol text-lg text-c2 overflow-hidden ${className}`}
    >
      {/* Icon wrapper */}
      <span className="hidden  absolute left-0 top-1/2 -translate-y-1/2 md:flex items-center transform -translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        
        {/* Line */}
        <span className="w-10 h-[2px] bg-red-400"></span>

        {/* Dot */}
        <span className="w-3 h-3 bg-red-400 rounded-full "></span>
      </span>

      {/* Text (padding so text doesn't overlap) */}
      <span className="pl-14">{Text}</span>
    </h4>
  )
}

export default Subtitle
