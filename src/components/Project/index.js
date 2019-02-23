import React from 'react'
import './style.css'

import Popup from './Popup'




class Project extends React.Component {

  render() {
    return (
      <div style={styles.container}>
        <Popup title="un" content="premier"/>
        <Popup title="deux" content="deuxieme"/>
        <Popup title="trois" content="troisieme"/>
        <Popup title="quatre" content="quatrieme"/>
        <Popup title="cinq" content="cinquieme"/>
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
    justifyContent:'space-around',
    alignItems:'center',
    alignContent:'center',
    paddingLeft:50,
    paddingRight:50,
  },


}
