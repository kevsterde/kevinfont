import React from 'react'
import FontContainer from './FontContainer'

function Main() {
    return (
        <div id='main_area' className='spacer bg-color1 text-white'>
            <div className="wrapper">
                <main className='flex  flex-wrap   gap-10 justify-center'>
                    <FontContainer name="Ubuntu"/>
                    <FontContainer name="Roboto"/>
                    <FontContainer name="Open Sans"/>
                    <FontContainer name="Poppins"/>
                    <FontContainer name="Lato"/>

                </main>
            </div>
        </div>
    )
}

export default Main