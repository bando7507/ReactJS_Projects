import React from 'react'

export default function Card({
    item
}) {
  return (
    <div className='card'>
        <img src={item.urls.small} className="imgs" alt="" />
    </div>
  )
}
