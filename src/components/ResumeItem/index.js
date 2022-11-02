import React from 'react'
import './resumeitem.css'

const ResumeItem = ({ title , Icon, value }) => {
  return (
    <div className='container-item'>
        <header className='header-item'>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <Icon/>
            </div>
        </header>
        <div>
            <span>{value}</span>
        </div>
    </div> 
  )
}

export default ResumeItem