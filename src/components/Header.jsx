import React from 'react'
import logo from '../images/icon.png'
function Header(props) {
    return (
        <header className='spacer bg-color3 text-black '>
            <div className="wrapper">
                <div className="header_con flex justify-between py-5 items-center">
                    <a href="/" className='rounded-[20px] overflow-hidden'><img src={logo}/></a>
                    <button onClick={() => {props.setShowPopUp(!props.showPopUp)}} className='btnAdd bg-color1 text-white font-semibold px-10 py-4 rounded-[150px] hover:bg-color2'>Add +</button>
                </div>
            </div>
        </header>
    )
}

export default Header