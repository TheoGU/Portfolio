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
}
