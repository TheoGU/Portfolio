import React from 'react'
import DateTimeline from './Date'
import InfoTimeline from './Info'

const TimeLine = (props) => {
  return (
    <div id="TimeLine" style={styles.container}>
      <DateTimeline/>
      <InfoTimeline/>
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
