import React from 'react'

export const Footer = ({isSelected}) => {
    
  return (
    <div className="footer">
        <div className={(isSelected === "X") ? "isSelect" : ""}>X</div>
        <div className={(isSelected === "O") ? "isSelect" : ""}>O</div>
    </div>
  )
}
