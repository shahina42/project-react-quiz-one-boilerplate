import React from 'react'
import './style.css'

function result() {
  return (
    <div className='pg3'>
    <div className='topic'><h1>Result</h1>
        <div className='result'>
            <h3>You need to practice more!</h3>
            <h2>Your score is 20%</h2>
<div className='score'>
<div  className='score_1' ><p>Total Number of questions</p> <p>15</p></div>
<div className='score_1' ><p>Number of attempted questions</p> <p>9</p></div>
<div className='score_1'><p>Number of correct answers</p> <p>3</p></div>
<div className='score_1'><p>Number of wrong answers</p> <p>6</p></div>
</div>
<div>
  
</div>

        </div>
        <button className='btn_again'>Play agin</button> <button className='btn_home'>Back to Home</button>
        </div>  
        
    </div>
  )
}

export default result