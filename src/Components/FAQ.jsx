import React, { useState } from 'react'
import "./FAQ.css"
import add from '../Images/add.png'
import close from '../Images/close.png'

function FAQ(props) {
    const [show, setShow] = useState(false)
    return (
        <div className='faq'>
            <div className="faq_box faq_summary" onClick={() => {
                    // setShow(true)
                    show ? setShow(false) : setShow(true)
                }}>
                <p>{props.summary}<img className='pluse' src={show?close:add} alt="" /></p>
            </div>
            {
                show ? <div className="faq_box">
                    <p>{props.details}</p>
                </div> : null
            }
        </div>
    )
}

export default FAQ