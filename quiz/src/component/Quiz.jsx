import React from 'react'
import './style.css'

function quiz() {
  return (
    <div className='div2'>
    <div className='pg2'>
        <h2>Question</h2>
      <div className='pg_no'>1 of 15</div>
        <h3>Which is the only mammal that can jump?</h3>
        <div className='buttons'>
        <button className='btn1'>Dog</button> <button className='btn2'>Elephant</button>
           <button className='btn3' >Goat</button> <button className='btn4' >Lion</button>
      
        </div>
        <div className='three_btn'>
            <button className='btn7'>Previous</button>
            <button className='btn5'>Next</button>
            <button className='btn6'>Quit</button>
        </div>


    </div>
    </div>
  )
}

export default quiz