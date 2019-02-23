import React from 'react'
import './style.css';
import {APP_COLORS} from '../../Style/Colors'

const Contact = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.text}>Proposez moi vos projet </h2>
        <form>
          <input type="mail"/>
          <input type="text"/>
          <input type="text"/>
          <textarea></textarea>
        </form>
      </div>
      <div style={styles.carte}></div>
    </div>
  )
}

export default Contact

const styles = {
  container:{
    minHeight: `100vh`,
    display:'flex',
    flexDirection:'row',
  },
  form:{
    display:'flex',
    flex:1,
    height:`100vh`,
    width:`50vw`,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    
  },
  carte:{
    flex:1,
    height:`100vh`,
    width:`50vw`
  },
  text:{
    color:APP_COLORS.primaryText
  }
}
