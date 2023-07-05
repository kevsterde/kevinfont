import React from 'react'

function Header() {
    return (
        <header className='spacer bg-color2 text-white'>
            <div className="wrapper">
                <div className="header_con flex justify-between py-10">

                    <h1 className='text-4xl font-bold'>Kevin Font</h1>
                    <button className='btnAdd bg-color3 text-color1 font-semibold px-10 rounded-[150px] hover:bg-color4'>Add +</button>
                </div>
            </div>
        </header>
    )
}

export default Header