import React from 'react'

const button = ({text,className}) => {
  return (
    <div>
      <button className={`bg-c2 px-3 py-6 ${className}`}><span className={`bg-c2 text-white py-4 px-9 text-lg font-jost font-medium border border-white' ${className}`}>{text}</span></button>
    </div>
  )
}

export default button
