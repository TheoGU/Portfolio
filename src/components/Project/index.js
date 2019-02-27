import React from 'react'
import './style.css'
import {APP_COLORS} from '../../Style/Colors'

import Popup from './Popup'

import monon from './img/mont.jpg';
import appCalc from './img/appCalc.png';
import cat from './img/cat.jpeg';
import mil from './img/mil.jpeg';

import phone from './img/phone.png'


class Project extends React.Component {

  render() {
    const pop = [
      {
        title:'un',
        content:'premier',
        icon:appCalc,
        resumer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link:'https://www.google.com',
        backGroundImgApercu: phone

      },
      {
        title:'deux',
        content:'deuxieme',
        icon:cat,
        resumer:'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link:'https://www.facebook.com',
        backGroundImgApercu: phone

      },
      {
        title:'troi',
        content:'troisieme',
        icon:mil,
        resumer:'Lorem ipsumnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link:'https://theoguinebertier.com/',
        backGroundImgApercu: phone

      },
      {
        title:'quatre',
        content:'quatrieme',
        icon:monon,
        resumer:'lit anim id est laborum.',
        link:'https://www.data.theoguinebertier.com',
        backGroundImgApercu: phone

      },
      {
        title:'cinq',
        content:'cinquieme',
        icon:monon,
        resumer:'iquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link:'http://www.guinebertier.com/',
        backGroundImgApercu: phone

      },
    ]

    return (
      <div id="Project" style={styles.container}>
          <h2 style={styles.text}>MES PROJET</h2>
          <div style={styles.content}>
          {
            pop.map( elt => (
              <Popup key={elt.title} title={elt.title} content={elt.content} icon={elt.icon} resumer={elt.resumer} link={elt.link}/>
            )
          )
          }
          </div>
      </div>
    )
  }
}
export default Project


const styles = {
  container:{
    display:'flex',
    flexWrap: 'wrap',
    minHeight: `100vh`,
    justifyContent:'center',
    alignItems:'flex-start',

  },

  content:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    alignContent:'center',
    paddingLeft:50,
    paddingRight:50,
    flexWrap:'wrap'

  },
  text:{
    color: APP_COLORS.primaryText,
    marginTop: 130,
    marginBottom: -100
  }


}
