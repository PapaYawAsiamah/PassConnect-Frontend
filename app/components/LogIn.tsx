import React from 'react'

interface LogInProps {
    className?: string; 
    Name?: string;// Corrected type to 'string'
  }
  

function LogIn({className,Name}:LogInProps) {
  return (
    <>
    <button className={`${className}`}>{Name}</button>
    
    </>
  )
}

export default LogIn