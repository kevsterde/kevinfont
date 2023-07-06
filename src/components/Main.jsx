import React, { useState } from 'react'
import FontContainer from './FontContainer'

function Main() {

    const [search, setSearch] = useState()

    const changeSearch = e =>{
        setSearch(e.value)
    }

    return (
        <div id='main_area' className='spacer bg-color3 text-white'>
            <div className="wrapper">
                <div className="main_con min-h-[700px]">

                <form className="text-center mb-10">
                    <input className='h-10 rounded-[150px] w-[300px] text-black pl-5' 
                    type='text' 
                    placeholder='Input Font Family...'
                    value={search} 
                    onChange={changeSearch}
                    /> 
                    
                    <button className='h-10 ml-5 bg-color1 text-white font-semibold px-10 rounded-[150px] hover:bg-color2'>Search</button>
                </form>

                <main className='flex  flex-wrap   gap-10 justify-center '>
                    <FontContainer name="Ubuntu"/>
                    <FontContainer name="Roboto"/>
                    <FontContainer name="Open Sans"/>
                    <FontContainer name="Poppins"/>
                    <FontContainer name="Lato"/>

                </main>
                </div>
            </div>
        </div>
    )
}

export default Main