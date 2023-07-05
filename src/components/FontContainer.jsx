import React from 'react'

function FontContainer(props) {
  return (
    <div className="font w-[20%] flex justify-center items-center flex-col text-center p-10 bg-color3 rounded-[10px] text-color2">
        <h2 class="text-4xl">{props.name}</h2>
    </div>


  )
}

export default FontContainer