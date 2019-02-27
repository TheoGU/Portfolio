import React from 'react'
import {APP_COLORS} from '../../Style/Colors'
import './style.css'

import github from './socialNetwork/github.svg'
import expo from './socialNetwork/expo.svg'
import linkedin from './socialNetwork/linkedin.svg'

const FoundMe = (props) => {
  return (
    <div style={styles.container}>
    <h1 style={styles.text}>Retrouvez moi sur mes reseaux</h1>
    <div>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/theogu" ><img src={github} alt="githubLogo"/></a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/theo-guinebertier-b53504140" ><img src={linkedin} alt="linkedin"/></a>
    </div>
    <p>Application mobile de mon portfolio bientôt disponible sur l'expo store</p>
    <a target="_blank" rel="noopener noreferrer" href="https://expo.io/@theogu" ><img src={expo} alt="expo"/></a>

    <p style={styles.text}>© 2019 - Tous droits réservés. </p>
    </div>
  )
}

export default FoundMe


const styles = {
  container:{
    marginTop:100,
    minHeight: `25vh`,
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    color: APP_COLORS.primaryText,
  },
  text:{
    fontWeight:200

  }
}
