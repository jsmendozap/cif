import React from 'react'
import profile from '../media/profile.png'

const Header = () => {

    const font = {fontFamily: 'Inclusive Sans'}

  return (
    <div style={{borderBottom: '0.1px solid rgba(0,0,255,0.07)'}}> 
        <div className='mx-6 my-3 flex justify-between'>
            <ul className='flex flex-row items-center'>
                <li className='text-3xl pr-6' style={{ fontFamily: 'Oleo Script' }}>Certificado forestal</li>
                <li className='pr-5 hover:cursor-pointer hover:text-gray-500' style={font}>Inicio</li>
                <li className='pr-5 hover:cursor-pointer hover:text-gray-500' style={font}>Ficha</li>
                <li className='hover:cursor-pointer hover:text-gray-500' style={font}>Registro ICA</li>
            </ul>
            <ul className='flex flex-row items-center'>
                <li className='pr-2'>
                    <img className='h-7' src={profile}/>
                </li>
                <li className='hover:cursor-pointer hover:text-gray-500' style={font}>Juan Manuel</li>
            </ul>
        </div>
    </div>
  )
}

export default Header