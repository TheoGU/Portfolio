import React from 'react'
import DateTimeline from './Date'
import InfoTimeline from './Info'
import {APP_COLORS} from '../../Style/Colors'

const TimeLine = (props) => {
  return (
    <div id="TimeLine">
    <h1 style={{textAlign: 'center', color: APP_COLORS.primaryText, marginBottom: 50, fontWeight: 100, fontFamily: 'sans-serif'}}>TimeLine</h1>

    <div style={styles.container}>
      <DateTimeline/>
      <InfoTimeline/>
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
}
