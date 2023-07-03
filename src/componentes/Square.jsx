import React from 'react'

export const Square = ({children,index,updateBoard}) => {
    const handleClick = () => {
  
        updateBoard(index)}
    return (
    <div className='board_cell' onClick={handleClick}>{children}</div>
  )
}
