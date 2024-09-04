import React from 'react'
import Logo from '/src/assets/logo.png'

const logo = () => {
  return (
    <>
    <div className='flex justify-center m-1 min-w-fit max-v-fit animate-fade-left animate-ease-in-out'>
        <img src={Logo} alt="logo banner" />
    </div>
    </>
  )
}

export default logo