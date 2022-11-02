import React from 'react'
import ResumeItem from '../ResumeItem'
import './resume.css'

import { 
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
  } from 'react-icons/fa'

const Resume = ({ income, expense, total }) => {
  return (
    <div className='container-resume'>
      <ResumeItem title='Entradas' Icon={FaRegArrowAltCircleUp} value={income}/>
      <ResumeItem title='Saídas' Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ResumeItem title='Total' Icon={FaDollarSign} value={total}/>
    </div> 
  )
}

export default Resume
