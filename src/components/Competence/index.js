import React from 'react'

const Competence = (props) => {
  return (
    <div id="Skill" style={styles.container}>

      <h1 style={{textAlign: 'center'}}>Competence</h1>
      <div style={styles.cloud}>
        <div style={{margin: 5,backgroundColor: '#1abc9c',width: `20vh`,borderRadius: 10}}>
          <h3>Langage</h3>
            <ul>
              <li>JavaScript ES7</li>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>PHP 7</li>
              <li>SQL</li>
              <li>Java</li>
            </ul>
        </div>
        <div style={{margin: 5,backgroundColor: '#8e44ad',width: `30vh`,borderRadius: 10}}>
          <h3>Framework</h3>
          <ul>
            <li>React JS</li>
            <li>React Native</li>
            <li>Vue Js</li>
            <li>Phalcon</li>
            <li>Laravel</li>
            <li>Foundation</li>
            <li>Electron</li>
            <li>Express JS</li>
          </ul>
        </div>
        <div style={{margin: 5,backgroundColor: '#3498db',width: `20vh`,borderRadius: 10}}>
          <h3>Cms</h3>
            <ul>
              <li>Wordpress</li>
              <li>CyberCe</li>
            </ul>
        </div>
        <div style={{margin: 5,backgroundColor: '#1abc9c',width: `90vh`,borderRadius: 10}}>
          <h3>Serveur</h3>
            <ul>
              <li>Node JS</li>
              <li>Nginx</li>
              <li>MariaDB</li>
            </ul>
        </div>
        <div style={{margin: 5,backgroundColor: '#8e44ad',width: `25vh`,borderRadius: 10}}>
          <h3>Logiciel</h3>
            <ul>
              <li>Git</li>
              <li>Sketch</li>
              <li>PhotoShop</li>
              <li>Illustrator</li>
            </ul>
        </div>
        <div style={{margin: 5,backgroundColor: '#3498db',width: `40vh`,borderRadius: 10}}>
          <h3>OS</h3>
            <ul>
              <li>MacOs</li>
              <li>Windows</li>
              <li>Debian 9</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Competence

const styles = {
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    minHeight: `100vh`,
  },
  cloud:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignContent: 'stretch'
  },
  tag:{
    backgroundColor:'yellow',
    borderRadius:10,
    flex:1
  }
}
