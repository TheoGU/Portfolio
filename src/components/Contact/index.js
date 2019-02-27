import React, { Component } from 'react'
import './style.css';
import {APP_COLORS} from '../../Style/Colors'

class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      object: '',
      subject: ''
    }
  }

  render(){
    return (
      <div id="Contact" style={styles.container}>
        <div style={styles.form}>
          <h2 style={styles.text}>Je peux vous aider ? </h2>
          <form action="#Contact" style={{display: 'flex',flexDirection: 'column'}}>
            <label for="name">Votre Nom</label>
            <input id="name" style={{margin:10}} placeholder="Entrer votre nom" type="text"/>

            <label for="mail">Votre email</label>
            <input id="mail" style={{margin:10}} placeholder="Entrer votre mail" type="text"/>

          <label for="objet">Un obejt(Recurtement, Projet)</label>
            <input id="objet" style={{margin:10}} placeholder="Entrer un objet" type="text"/>

        <label for="subject">Ecriver votre demande</label>
          <textarea cols="50" rows="1" placeholder="Ecrivez votre demande"></textarea>
          <input type="submit" value="Envoyer"/>
          </form>

        </div>
        <div style={styles.carte}></div>
      </div>
    )
  }
  }


export default Contact

const styles = {
  container:{
    marginTop:100,
    minHeight: `100vh`,
    display:'flex',
    flexDirection:'row',
  },
  form:{
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',

  },
  carte:{
    flex:1,
    backgroundColor: APP_COLORS.customText

  },
  text:{
    color:APP_COLORS.primaryText,
    fontWeight: 300,
    fontSize: 30
  }
}
