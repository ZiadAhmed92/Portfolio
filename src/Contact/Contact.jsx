import React from 'react'

const Contact = ({color}) => {
 
  return (
    <div className={`text-center w-100 p-5 borderContact ${color[1]}`}>
            <h1 className='fw-bold'>Contact Me </h1>
            <p>Linkedin : https://www.linkedin.com/in/ziad-ahmed/</p>
            <p>Mobile/WhatsApp/Telegram : +20155992401</p>
            <p>Email : za693387@gmail.com</p>
    </div>
  )
}

export default Contact 