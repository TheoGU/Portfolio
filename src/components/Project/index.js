import React from 'react'
import './style.css'

import monon from './img/mont.jpg';


const Project = (props) => {
  return (
    <div style={styles.container}>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
      <div className="block" onClick={()=>(alert('ok'))}style={styles.block}></div>
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
    margin:10,
    backgroundImage:`url(${monon})`,
    backgroundSize: 'cover'
  },

}
