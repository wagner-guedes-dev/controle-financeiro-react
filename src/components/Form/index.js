import React, { useState } from 'react'
import Grid from '../Grid'


import './form.css'

const Form = ( {handleAdd, transactionsList, setTransactionsList } ) => {

    const [desc, setDesc] = useState('')
    const [amount, setAmonut] = useState('')
    const [isExpense, setExpense] = useState(false)

    const generateID = () => Math.round(Math.random() * 1000)

    function handleSave(){
        if(!desc || !amount){
            alert('informe a descrição do valor!')
            return;
        } else if(amount < 1) {
            alert('o valor tem que ser positivo!')
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction)

        setDesc('')
        setAmonut('')

    }



  return (
    <div>
        <form className='container-form' >
            <div className='form-group'>
                <label>Descrição</label>
                <input
                    value={desc}
                    type='text'
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Valor</label>
                <input
                    value={amount}
                    type='number'
                    onChange={(e) => setAmonut(e.target.value)}
                />
            </div>
            <div className='form-radius'>
                <label htmlFor="rIncome">Entrada</label>
                <input
                    type='radio'
                    id='rIncome'
                    defaultChecked
                    name='group1'
                    onChange={() => setExpense(!isExpense)}
                />
                <label htmlFor="rExpenses">Saída</label>
                <input
                    type='radio'
                    id='rExpenses'
                    name='group1'
                    onChange={() => setExpense(!isExpense)}
                />
            </div>
            <div className='form-button'>
                <input type='button' value="ADICIONAR" onClick={handleSave}/>
            </div>
        </form>
        
        <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </div>
  )
}


export default Form