import React, { useState } from 'react'

function PopUp(props) {

  const [fValue,setFValue] = useState({
    fName: '',
    fImport: '',
    fFamily:'',
    fPassword:''
  })

  const handleChange = e =>{  
    const name = e.target.name
    const value = e.target.value

    setFValue({
      ... fValue,[name] : value
    })

  }


  const handleSubmit = e =>{
    e.preventDefault()
    console.log(fValue)
  }





  return (
    <div id='popup' className='fixed inset-0  flex justify-center items-center'>
        <div className="overlay fixed inset-0 backdrop-brightness-50"
        
        onClick={() => {props.setShowPopUp(!props.showPopUp)}}

        ></div>
        
        <form 
        method='post'
        onSubmit={handleSubmit}
        className='flex flex-col gap-5 p-5 bg-color4  rounded-2xl  relative'
        >
            <input type='text' name='fName' placeholder='Font Name*'
            value={fValue.fName}
            onChange={handleChange}
            className='rounded-xl p-3'
            />
            <textarea type='text' name='fImport' rows="4" placeholder='Import Css*' 
            value={fValue.fImport}
            onChange={handleChange}
             className='rounded-xl p-3 h-auto resize-none'
            ></textarea>
            <input type='text' name='fFamily' placeholder='Font Family*'
             value={fValue.fFamily}
             onChange={handleChange}
             className='rounded-xl p-3'
            />
            <input type='text' name='fPassword' placeholder='Password*'
            value={fValue.fPassword}
            onChange={handleChange}
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