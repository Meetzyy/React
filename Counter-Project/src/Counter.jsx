import './Counter.css'
import { useState } from 'react'
import { RiResetLeftLine } from "react-icons/ri";
function Counter(){

    const [data , setData] = useState(0)

    function increment(){
        setData(data + 1)
    }

    function decrement(){
        setData(data - 1)
    }

    function reset(){
        setData(0)
    }

    return(
        <>
            <div className="main">    
                <div className='title'>
                    <p className='text1'>C<span className='span1'>0</span>UNTER</p>
                    <p className='text2'>APPLICAT<span className='span2'>1</span>ON</p>
                </div>

                <div className="right">
                    <div className="digits">
                        <p>{data}</p>
                    </div>
                
                    <div className="buttons">
                        <button className='plus' onClick={increment}>+</button>
                        <button className='minus' onClick={decrement}>-</button>
                        <button className='reset' onClick={reset}><RiResetLeftLine /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter