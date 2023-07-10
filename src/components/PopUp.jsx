import React, { useState } from 'react'

function PopUp(props) {

  


 

  return (
    <div id='popup' className='fixed inset-0  flex justify-center items-center'>
        <div className="overlay fixed inset-0 backdrop-brightness-50"
        
        onClick={() => {props.setShowPopUp(!props.showPopUp)}}

        ></div>
        
        <form 
        method='post'
        onSubmit={       
          props.handlerAdd
          
        
        }
        className='flex flex-col gap-5 p-5 bg-color4  rounded-2xl  relative'
        >
            <input autoComplete="off" type='text' name='Title' placeholder='Font Name*'
            value={props.fValue.Title}
            onChange={props.handleChange}
            className='rounded-xl p-3'
            />
            <textarea type='text' name='Import' rows="4" placeholder='Import Css*' 
            value={props.fValue.Import}
            onChange={props.handleChange}
             className='rounded-xl p-3 h-auto resize-none'
            ></textarea>
            <input autoComplete="off" type='text' name='FontFamily' placeholder='Font Family*'
             value={props.fValue.FontFamily}
             onChange={props.handleChange}
             className='rounded-xl p-3'
            />
            <input autoComplete="off" type='text' name='fPassword' placeholder='Password*'
            value={props.password}
            onChange={props.hcPass}
             className='rounded-xl p-3' 
            />

            <button type='submit'
            className='h-10  bg-color1 text-white font-semibold px-10 rounded-[150px] hover:bg-color2'
            > Submit </button>
        </form>
        





    </div>
  )
}

export default PopUp