import React from 'react'
import './style.css'
import {APP_COLORS} from '../../Style/Colors'

const Header = () => {
  return (
    <div style={styles.container}>
      <div><h1 className="title" style={styles.title}>Hello !</h1></div>
      <div><p className="text" style={styles.text}>Developpeur <p className="customTextAnimation" style={styles.webMobile}>Web</p> && <p className="customTextAnimation" style={styles.webMobile}>Mobile</p></p></div>
      <div className="scrollAnimation" style={styles.img}><a href="#AboutMe" ><img src={require('./scroll.png')} width="32"/></a></div>
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
    color:APP_COLORS.customText,
    fontWeight:'normal'
  },
  title:{
    fontWeight:'lighter',
    color: APP_COLORS.primaryText
  },
  text:{
    fontWeight:'lighter',
    color: APP_COLORS.primaryText
  },
  img:{
    position: 'relative',
    top:`30vh`
  }
}
