import React from 'react'

function Header({category, title}) {
    return (
        <div className='mb-10'> 
            <p className='text-lg text-gray-400'>{category}</p>
            <p className='text-3xl text-slate-900 tracking-tight font-extrabold'>{title}</p>
        </div>
    )
}

export default Header
