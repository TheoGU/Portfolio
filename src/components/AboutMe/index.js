import React, { Component } from "react";
import {APP_COLORS} from '../../Style/Colors'

class About extends Component {
  render() {
    return (
      <div id="AboutMe" style={styles.container}>
        <div style={styles.picture}>
          <div style={{backgroundColor: '#badc58', width: `25vw`,height: `75vh`,marginRight:10, padding: 15, borderRadius: 4}}>
          </div>
        </div>
        <div style={styles.description}>
          <div style={{width: `35vw`, padding: 15}}>
            <h2 style={styles.title}>A PROPOS</h2>
            <p style={styles.text}><strong>Hello </strong>,je m'appelle Théo Guinebertier,<br/> j'ai 19 ans et je vis en France.</p>
            <p style={styles.text}>Je suis un développeur web et mobile curieux et passionné. J'aime voyager et collaborer avec les gens. Je fais du sport et j'aime apprendre.</p>
            <p style={styles.text}>Actuellement en DUT informatique en alternance, je suis occupé à écrire du code et créer des applications sympas.</p>
        </div>
        </div>

      </div>
    );
  }
}

export default About;


const styles = {
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    minHeight: `100vh`,

  },
  picture:{
    flex:1,
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    borderRight: `1px dashed rgba(199, 236, 238,0.2)`,
  },
  description:{
    flex:1,
    display:'flex',
    flexWrap: 'wrap',
    justifyContent:'left',
    alignItems:'center',
  },
  text:{
    fontSize: 22,
    color: APP_COLORS.primaryText
  },
  title:{
    color: APP_COLORS.primaryText
  }

}
