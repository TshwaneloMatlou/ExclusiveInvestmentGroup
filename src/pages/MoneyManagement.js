import React from 'react'
import TableCurrency from "../components/TableCurrency";
import TablePercentage from "../components/TablePercentage";


const MoneyManagement = () => {
  return (
    <div className='grid overflow-x-auto m-5 shadow-lg shadow-green-500 '>
      <div className='m-5 p-5 text-center'>
        <TableCurrency />
      </div>
      <div className='m-5 p-5 text-center'>
        <TablePercentage />
      </div>
    </div>
  )
}

export default MoneyManagement
