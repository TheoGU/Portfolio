import React from 'react'

const InfoTimeline = (props) => {
  return (
    <div style={styles.info}>
      <div style={styles.rect}>
        <p>Woua</p>
      </div>
      <div style={styles.rect}>
        <p>Woua</p>
      </div>
      <div style={styles.rect}>
        <p>Woua</p>
      </div>
    </div>
  )
}

export default InfoTimeline

const styles = {

  rect:{
    width:350,
    height:200,
    backgroundColor:'white',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:3,
    marginLeft: 10,
    marginTop:10
  },
  info:{
    flex:1,
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'column',
  }
}
