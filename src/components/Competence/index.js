import React, {Component} from 'react'
import './style.css'
import {APP_COLORS} from '../../Style/Colors'

class Competence extends Component{



  render(){
    const colorPicker = [
      '#12CBC4',
      '#00b894',
      '#74b9ff',
      '#a29bfe',
      '#3498db',
      '#1abc9c'
    ]
    return (
      <div id="Skill" style={styles.container}>

        <h1 style={{fontWeight: 100, fontFamily: 'sans-serif',textAlign: 'center', color: APP_COLORS.primaryText}}>Compétences</h1>
        <div style={styles.cloud}>


          <div className="blockSkills" style={{minHeight: '45vh',backgroundColor: colorPicker[0]}}>
            <div style={{textAlign: 'center'}}>
              <h3>Langages</h3>
              <p>JavaScript ES7</p>
              <p>HTML 5</p>
              <p>CSS 3</p>
              <p>PHP 7</p>
              <p>SQL</p>
              <p>Java</p>
            </div>
          </div>


          <div className="blockSkills" style={{width:`25vw`,alignSelf: 'flex-end',minHeight: '18vh', backgroundColor: colorPicker[1]}}>
              <div style={{textAlign: 'center'}}>
                <h3>OS</h3>
                <p>MacOs</p>
                <p>Windows</p>
                <p>Debian 9</p>
              </div>
          </div>

          <div className="blockSkills" style={{alignSelf: 'flex-end',minHeight: '30vh',backgroundColor: colorPicker[2]}}>
              <div style={{textAlign: 'center'}}>
                <h3>CMS</h3>
                <p>CyberCe</p>
                <p>WordPress</p>
              </div>

          </div>


          <div className="blockSkills" style={{alignSelf: 'flex-end',minHeight: '26vh',backgroundColor: colorPicker[3]}}>
              <div style={{textAlign: 'center'}}>
                <h3>Serveur</h3>
                <p>NodeJs</p>
                <p>Nginx</p>
                <p>MariaDB</p>
              </div>
          </div>


          <div className="blockSkills" style={{alignSelf: 'stretch',height: '28vh',backgroundColor:colorPicker[4]}}>
            <div style={{textAlign: 'center'}}>
              <h3>Git</h3>
              <p>Sketch</p>
              <p>Photoshop</p>
              <p>Illustrator</p>
            </div>

          </div>

          <div className="blockSkills" style={{width:`25vw` ,alignSelf: 'stretch',minHeight: '40vh',backgroundColor: colorPicker[5]}}>
            <div style={{textAlign: 'center'}}>
              <h3>Framework</h3>
              <p>React JS</p>
              <p>React Native</p>
              <p>Vue JS</p>
              <p>Express JS</p>
              <p>Electron</p>
              <p>Laravel</p>
              <p>Phalcon</p>
              <p>Foundation</p>
            </div>

          </div>

        </div>
      </div>
    )
  }

  }

export default Competence

const styles = {
  container:{
    display:'flex',
    flexDirection:'column',
    minHeight: `133vh`,
  },
  cloud:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
  }
}
