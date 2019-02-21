import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.picture}>
          <div style={{backgroundColor: '#dff9fb', width: `25vw`,height: `75vh`, padding: 15, borderRadius: 4}}>
          </div>
        </div>
        <div style={styles.description}>
          <div style={{width: `35vw`, padding: 15}}>
            <h2>A PROPOS</h2>
            <p style={styles.text}><strong>Hello ✌️</strong>,je m'appelle Théo Guinebertier,<br/> j'ai 19 ans et je vis en France 🇫🇷.</p>
            <p style={styles.text}>Je suis un développeur web Full-Stack curieux et passionné 💻. J'aime voyager et collaborer avec les gens 👨‍💻. Je fais du sport 🏒 et j'aime la pizza 🍕.</p>
            <p style={styles.text}>Actuellement en DUT informatique en alternance 📚, je suis occupé à écrire du code et créer des applications sympas 🎉.</p>
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
    height: `100vh`,
    border: `1px solid #55efc4`,
  },
  picture:{
    flex:1,
    display:'flex',
    border: `1px solid #9b59b6`,
    height: `100vh`,
    alignItems:'center',
    justifyContent:'flex-end',

  },
  description:{
    flex:1,
    display:'flex',
    border: `1px solid #f1c40f`,
    height: `100vh`,
    flexWrap: 'wrap',
    justifyContent:'left',
    alignItems:'center',
  },
  text:{
    fontSize: 22
  }

}
