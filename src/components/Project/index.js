import React from 'react'
import './style.css'

const Project = (props) => {
  return (
    <div style={styles.container}>
      <div className="block" style={styles.block}><p>ok</p></div>
      <div className="block" style={styles.block}><p>ok</p></div>
      <div className="block" style={styles.block}><p>ok</p></div>
      <div className="block" style={styles.block}><p>ok</p></div>
      <div className="block" style={styles.block}><p>ok</p></div>
      <div className="block" style={styles.block}><p>ok</p></div>
      <div className="block" style={styles.block}><p>ok</p></div>
      <div className="block" style={styles.block}><p>ok</p></div>
      <div className="block" style={styles.block}><p>ok</p></div>
      <div className="block" style={styles.block}><p>ok</p></div>
    </div>
  )
}

export default Project

const styles = {
  container:{
    display:'flex',
    flexWrap: 'wrap',
    height: `100vh`,
    border: `1px solid #55efc4`,
    justifyContent:'space-around',
    alignItems:'center',
    alignContent:'center',
    paddingLeft:50,
    paddingRight:50,
  },
  block:{
    width:200,
    height:200,
    border: `1px solid orange`,
    margin:10
  }
}
