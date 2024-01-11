import React from 'react'
import profile from '../media/profile.png'
import { Link } from 'react-router-dom';

const Header = () => {

    const font = {fontFamily: 'Inclusive Sans'}

  return (
    <div style={{borderBottom: '0.1px solid rgba(0,0,255,0.07)'}}> 
        <div className='mx-6 my-3 flex justify-between'>
            <ul className='flex flex-row items-center'>
                <li className='text-3xl pr-8' style={{ fontFamily: 'Oleo Script' }}>Certificado forestal</li>
                <li className='pr-5 hover:cursor-pointer hover:text-gray-500' style={font}>
                    <Link to='/'>Inicio</Link>
                </li>
                <li className='pr-5 hover:cursor-pointer hover:text-gray-500' style={font}>
                    <Link to='/form'>Ficha</Link>
                </li>
                <li className='hover:cursor-pointer hover:text-gray-500' style={font}>
                    <Link to='/register'>Registro ICA</Link>
                </li>
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