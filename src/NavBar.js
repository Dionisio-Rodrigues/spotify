import React from 'react'
import spotifyImage from './spotifyImage.png'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='nav'>
        <Link to='/'><img src={spotifyImage} alt='logoSpotify'></img></Link>
        <ul>
            <li>
                <Link to='/register'>Inscreva-se</Link>
            </li>
            <li>
                <Link to='/login'>Entrar</Link>
            </li>
            <li>
                <Link to='/faq'>FAQ</Link>
            </li>
        </ul>
    </nav>
  )
}
