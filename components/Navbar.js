import React from 'react'

const Navbar = () => {
    return (
        <div>
        <div className='bg-yellow-100 flex justify-center text-lg ' >
            🎉 Special Launch Price: 75% discount Pre-applied 🎉    
            </div>
            <div className='flex justify-between items-center my-5 mx-10'>
            <img src="/images/logo.png" alt="Logo" />
            <button className='text-white  bg-[#ff206e] py-3 px-6 rounded-xl hover:bg-black '  >ENROLL NOW</button>
            </div>
            </div>
    )
}

export default Navbar
Navbar