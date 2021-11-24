import React from 'react'

export const Footer = () => {
    let footerStyle={
        position: "absolute",
        top: "100vh",
        width: "100%"
    }
    return (
        <div className="bg-dark text-light py-1" style={footerStyle}>
            <p className="text-center"> Copyright &copy; MyTodolist.com | Created with ❤ by Anmol Agarwal</p>
          
        </div>
    )
}
