import React, {useState, scroller} from 'react'
import Data from './Data.json'
import './bpcscore.css'


const Bpcscore=()=> {

    const [state, setState] = useState('');

    return (   
    <div className="bpcscore">
        <h1>Personality check question.</h1>
        {
            Data.map( data => {
                return (
                    <body>
                    <div className="box">
                            <h1>{data.id}. {data.question}</h1>
                            <form>
                            <input className="first_radio_button" type='radio'  id='react-radio-button-group-1' name='number' value='strong agree' />
                            <label for="react-radio-button-group-1"></label>
                            <input className="second_radio_button" type='radio'  id='react-radio-button-group-1' name='number' value='agree' />
                            <input className="third_radio_button" type='radio'  id='react-radio-button-group-1' name='number' value='neutral' />
                            <input className="second_radio_button" type='radio'  id='react-radio-button-group-1' name='number' value='strong disagree' />
                            <input className="first_radio_button" type='radio'  id='react-radio-button-group-1' name='number' value='disagree' />
                            <div className="line"></div>
                            </form>              
            </div>
            </body>     
                )
            })
        }
    </div>
  )
}

export default Bpcscore;