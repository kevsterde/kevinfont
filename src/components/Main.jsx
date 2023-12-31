import React, { useEffect, useState } from 'react'
import FontContainer from './FontContainer'
import { getDocs } from 'firebase/firestore'

function Main(props) {

    const [search, setSearch] = useState('')
    
   


    const changeSearch = e =>{
        setSearch(e.target.value)
    }


    useEffect(()=>{
       const getCollection = async () =>{
            const data = await getDocs(props.fontRef)
            props.setFonts(data.docs.map((docs)=>({
                ... docs.data(),id:docs.id
            })))
            
        }

       getCollection()

     
        console.log("render");

    },[])

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
                    
                </form>

                <main className='flex  flex-wrap   gap-10 justify-center '>
                    {
                        props.fonts && props.fonts
                        .filter((font) =>{
                            return search.toLowerCase() === ''
                            ? font
                            : font.Title.toLowerCase().includes(search.toLowerCase())
                        })
                        .map((font,index) => {
                            return <FontContainer handleSelcted={props.handleSelcted} font={font} key={index}  />
                        })
                    }
                    {
                        props.fonts.length == 0 && <h1 className='text-6xl animate-ping'>Loading...</h1>
                    }

                </main>
                </div>
            </div>
        </div>
    )
}

export default Main