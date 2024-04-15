import img from '/images (1).jpg'
import './Info.css'
import { useState } from 'react'
const text = +0
const Info = () => {
    const [counter, setCounter] = useState(0 )
     const [number, setNumber] = useState(0)
    const onIncrament =() =>{
        setCounter(counter + 120 )
        setNumber(number + 1)
    }
    const onDecrament =() =>{
        setCounter(counter - 120)
        setNumber(number - 1)
    }
  return (
    <div className="info">
        <div className="container">
            <img src={img} alt="" className="info-img" />
            <p className="info-sums"> Narximiz <br /> 120 som </p>
               <div className="btn-group">
               <button className="info-btn" onClick={onDecrament}>-</button>
                 <p>{number}</p>
                <button className="info-btn" onClick={onIncrament}>+</button>
                <p className="info-sum">{counter}</p>
               </div>
        </div>
    </div>
  )
}

export default Info