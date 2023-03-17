import React from 'react'

function Input({
    id,
    label,
    onChange,
    type,
    value
}) {
  return (
    <div className='relative'>
        <input 
        className="
        block 
        w-full 
        text-md
        px-6 
        pt-6 
        pb-1
        text-white
        rounded-md
        bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        "
        placeholder=''
        type={type} 
        onChange={onChange}
        value={value}
        />

        <label 
        className="
        absolute
        text-zinc-400
        text-md
        duration-500
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        left-6
        origin[0]
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-50
        peer-focus:-translate-y-3
        "
        htmlFor={id}>
            {label}
        </label>
    </div>


// origin[0]
// peer-placeholder-shown:scale-100
// peer-placeholder-shown:translate-y-0
// peer-focus:scale-50
// peer-focus:translate-y-0
  )
}

export default Input