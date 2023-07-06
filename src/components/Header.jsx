import React from 'react'

function Header(props) {
    return (
        <header className='spacer bg-color3 text-black '>
            <div className="wrapper">
                <div className="header_con flex justify-between py-5">

                    <h1 className='text-4xl font-bold'>Kevin Font</h1>
                    <button onClick={() => {props.setShowPopUp(!props.showPopUp)}} className='btnAdd bg-color1 text-white font-semibold px-10 rounded-[150px] hover:bg-color2'>Add +</button>
                </div>
            </div>
        </header>
    )
}

export default Header