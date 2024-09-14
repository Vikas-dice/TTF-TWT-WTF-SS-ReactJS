import React from 'react'
const heading = {
    backgroundColor: "black", 
    color: "white", 
    height: "40px",
    display: "flex",
    gap:"50px",
    justifyContent:"flex-end",
    alignItems:"center",

    

}
const Navbar = () => {
    return (
        <div style={heading}>
            <p >home</p>
            <p>contact us</p>
            <p style={{marginRight:"20px"}}>about</p>
            </div>
    )
}

export default Navbar