import React from 'react'
import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash
} from 'react-icons/fa'

import '../Grid/grid.css'



const GridItem = ({ item, onDelete }) => {
  return (
    <div className='tbody'>
        <p className='desc'>{item.desc}</p>
        <p className='valor'>{item.amount}</p>
        <p className='tipo'>
          {item.expense ? 
            (<FaRegArrowAltCircleDown color='red' />)
            :
            (<FaRegArrowAltCircleUp color='green' />)
          }
        </p>
        
        <p className='delete'><FaTrash cursor='pointer' onClick={()=> onDelete(item.id)}/></p>
        
    </div>
  )
}

export default GridItem