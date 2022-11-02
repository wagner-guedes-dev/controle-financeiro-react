import React from 'react'

import GridItem from '../GridItem'
import './grid.css'

const Grid = ({ itens, setItens }) => {

  const onDelete = (ID) =>{
    const newArray = itens.filter((transaction) => transaction.id !== ID)
    setItens(newArray)
    localStorage.setItem('transactions', JSON.stringify(newArray))
  }

  return (
    <div className='container-grid'>
      
      <div className='thead'>
        <p className='desc'>Descrição</p>
        <p className='valor'>Valor</p>
        <p className='tipo'>Tipo</p>
        <p className='delete'></p>
      </div>
      <div>
        {
          itens?.map((item, index) =>(
              <GridItem key={index} item={item} onDelete={onDelete}/>
            )) 
            
        }
      </div>

    </div>
  )
}

export default Grid