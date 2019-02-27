import React from 'react'
import './style.css'
import {APP_COLORS} from '../../Style/Colors'
import cv from './cv.pdf'

const NavBar = (props) => {
  return (
    <div style={styles.container}>
    <div style={styles.itemLeft} className="item">
      <a style={styles.link} href="#Header">Accueil</a>
    </div>
    <div style={styles.itemLeft} className="item">
      <a style={styles.link} href="#AboutMe">A propos</a>
    </div>
    <div style={styles.itemLeft} className="item">
      <a style={styles.link} href="#Project">Projets</a>
    </div>
      <div style={styles.itemLeft} className="item">
        <a style={styles.link} href="#Skill">Compétences</a>
      </div>
      <div style={styles.itemLeft} className="item">
        <a style={styles.link} href="#TimeLine">TimeLine</a>
      </div>
      <div style={styles.itemLeft} className="item">
        <a style={styles.link} href="#Contact">Contact</a>
      </div>
    <div style={styles.itemCv} className="item">
      <a style={styles.linkCV} target="_blanc" href={cv}>CV</a>
    </div>
    </div>
  )
}

export default NavBar

const styles = {
  container:{
    backgroundColor: 'rgba(0,0,0,0.3)',
    position:'fixed',
    width:`100%`,
    padding: 20,
    zIndex:99,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  itemLeft:{
    marginRight:25,
    fontSize:22,
  },
  itemCv:{
    marginRight:25,
    fontSize:22,
    backgroundColor:APP_COLORS.customText,
    width:44,
    textAlign:'center',
    borderRadius: 22,
  },
  link:{
    color: APP_COLORS.primaryText
  },
  linkCV:{
    color: APP_COLORS.dark
  }

}
