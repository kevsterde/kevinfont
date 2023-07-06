import React from 'react'

function Middle() {
    return (
        <div id='middle' className='spacer bg-color3 text-white'>
            <div className="wrapper">
                <div className="middle_con py-10">
                    <div className="shadow-xl font_selected max-w-lg mx-auto text-sm p-5 rounded-xl bg-color4 text-color1">
                        <button className='float-right p-2 rounded-md text-white bg-color1 hover:bg-color2'>Copy</button>
                        <p className='mb-2'>@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');</p>
                        <p>@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');</p>
                        <br/>
                        <p>:root&#123;<br/> --txt1&#58;Ubuntu', sans-serif; <br/>--txt2&#58;Ubuntu', sans-serif;<br/>&#125;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle