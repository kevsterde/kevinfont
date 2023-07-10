import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';





function Middle(props) {
    

    return (
        <div id='middle' className='spacer bg-color3 text-white'>
            <div className="wrapper">
                <div className="middle_con py-10">
                    <div className="shadow-xl font_selected max-w-lg mx-auto text-sm p-5 rounded-xl bg-color4 text-color1">

                        <CopyToClipboard
                            text={`${props.selects && props.selects.map((select) => {
                                return select.Import + "\n"
                            })
                                }
                    

${props.selects && props.selects.map((select, index) => {
                                    return `--txt${index + 1}: ${select.FontFamily}\n`
                                })
                                }

`}
                        >
                            <button className='float-right p-2 rounded-md text-white bg-color1 hover:bg-color2'>Copy</button>
                        </CopyToClipboard>

                        {
                            props.selects && props.selects.map((select, index) => {
                                return <p className="mb-2" key={index}>{select.Import}</p>
                            })
                        }

                        {props.selects.length == 0 && <h1 className='text-2xl'>Select a Font</h1>}


                        <br />

                        <p>:root&#123;<br />
                            {
                                props.selects && props.selects.map((select, index) => {
                                    return <span className='block' key={index}>--txt{index + 1}: {select.FontFamily}</span>
                                })
                            }
                            &#125;
                        </p>


                        <button onClick={() => {
                            props.setSelects([])
                        }} className='mt-2 p-2 rounded-md text-white bg-color1 hover:bg-color2'>reset</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle