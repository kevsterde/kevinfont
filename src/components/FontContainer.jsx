import React from 'react'

function FontContainer(props) {
  return (
    <div className="font w-[20%] flex justify-center items-center flex-col text-center p-10 bg-color4 hover:bg-color2 hover:text-white cursor-pointer rounded-[10px]  text-color2">
        <h2 className="text-4xl">{props.name}</h2>
    </div>


  )
}

export default FontContainer