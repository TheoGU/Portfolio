import React from 'react'
import '../style.css'

const DateTimeline = (props) => {
  return (
      <div style={styles.date}>
        <div className="one" style={styles.circle}>
          <p>2017 - 2019</p>
        </div>
        <div className="two" style={styles.rect}>
          <div>
          <p>Dut informatique en alternance | <strong>Villetaneuse</strong></p>
          <p>Université Paris 13</p>
          <p><strong>Alternance : </strong>CCE Banque de France</p>
          </div>
        </div>
        <div className="three" style={styles.circle}>
          <p>2014</p>
        </div>
        <div className="four" style={styles.rect}>
          <div>
          <p>Lycée de la Tourelle | <strong>Sarcelles</strong></p>
          <p>Bac <strong>STI2D</strong> option SIN</p>
          <p><strong>Mention :</strong> Bien</p>
          </div>
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
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,

  },
  date:{
    flex:1,
    display:'flex',
    borderRight: `1px dashed rgba(199, 236, 238,0.2)`,
    justifyContent:'space-around',
    alignItems:'flex-end',
    flexDirection:'column',
  },
  rect:{
    width:350,
    height:200,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:3,
    marginLeft: 10,
    marginRight: 10,
    marginTop:10
  },
  info:{
    flex:1,
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'column',
  },
}
