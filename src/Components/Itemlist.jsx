import React from 'react'

const Itemlist = ({Text,classname}) => {
  return (
    <div>
      <li className={`font-jost text-lg font-normal text-c1 duration-300 cursor-pointer hover:text-c2 ${classname}`}>{Text}</li>
    </div>
  )
}

export default Itemlist
