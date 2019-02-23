import React from 'react'

const DateTimeline = (props) => {
  return (
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
  )
}

export default DateTimeline

const styles = {

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
  }
}
