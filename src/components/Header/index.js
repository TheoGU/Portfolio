import React from 'react'
import './style.css'
import {APP_COLORS} from '../../Style/Colors'

const hello = ['Hello !', 'Bonjour !', 'Hi !'];
const Header = () => {
  return (
    <div style={styles.container}>
      <div><h1 className="title" style={styles.title}>
        {hello[0]}
      </h1></div>
      <div><p className="text" style={styles.text}>Developpeur <span className="customTextAnimation" style={styles.webMobile}>Web</span> & <span className="customTextAnimation" style={styles.webMobile}>Mobile</span></p></div>
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
    minHeight: `100vh`,
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
