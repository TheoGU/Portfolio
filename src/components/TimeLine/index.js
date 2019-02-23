import React from 'react'

const TimeLine = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.date}>
        <div style={styles.circle}>
          <p>2019</p>
        </div>
        <div style={styles.circle}>
          <p>2017</p>
        </div>
        <div style={styles.circle}>
          <p>2016</p>
        </div>

      </div>


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

    </div>
  )
}

export default TimeLine

const styles = {
  container:{
    minHeight: `100vh`,
    display:'flex',
    flexDirection: 'row',

  },
  circle:{
    width:125,
    height:125,
    borderRadius:125,
    backgroundColor:'white',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10

  },
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
  date:{
    flex:1,
    display:'flex',
    borderRight: `1px dashed rgba(199, 236, 238,0.2)`,
    justifyContent:'space-around',
    alignItems:'flex-end',
    flexDirection:'column',
  },
  info:{
    flex:1,
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'column',
  }
}
