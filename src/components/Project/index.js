import React from 'react'
import './style.css'
import {APP_COLORS} from '../../Style/Colors'

import Popup from './Popup'

import monon from './img/mont.jpg';
import appCalc from './img/appCalc.png';
import cat from './img/cat.jpeg';
import mil from './img/mil.jpeg';


class Project extends React.Component {

  render() {
    return (
      <div style={styles.container}>
          <h2 style={styles.text}>MES PROJET</h2>
          <div style={styles.content}>
            <Popup title="un" content="premier" back={appCalc} />
            <Popup title="deux" content="deuxieme" back={cat} />
            <Popup title="trois" content="troisieme" back={mil} />
            <Popup title="quatre" content="quatrieme" back={monon} />
            <Popup title="cinq" content="cinquieme" back={monon} />
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
    color: APP_COLORS.primaryText
  }


}
