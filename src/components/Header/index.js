import React from 'react'
import './style.css'

const Header = () => {
  return (
    <div style={styles.container}>
      <div><h1 className="title" style={styles.title}>Hello !</h1></div>
      <div><p className="text" style={styles.text}>Developpeur <p className="customTextAnimation" style={styles.webMobile}>Web</p> && <p className="customTextAnimation" style={styles.webMobile}>Mobile</p></p></div>
    </div>
  )
}


export default Header


const styles = {
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height: `100vh`,
    border: `1px solid #55efc4`,
    lineHeight:0,
  },
  webMobile:{
    color:'#55efc4',
    fontWeight:'regular'
  },
  title:{
    fontWeight:'lighter',
  },
  text:{
    fontWeight:'lighter',
  }
}
