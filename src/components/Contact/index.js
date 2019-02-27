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
      subject: '',
      message: false,
      messageErreur:false
    }
  }

  handleClick(){
    if(this.state.name !== '' && this.state.email !== '' && this.state.object !== '' && this.state.subject !== ''){
      this.setState({
        message:true,
        messageErreur: false
      })
    }
    else{
      this.setState({
        message:false,
        messageErreur: true
      })
    }
  }

  render(){
    return (
      <div id="Contact" style={styles.container}>
        <div style={styles.form}>
          <h2 style={styles.text}>Je peux vous aider ? </h2>
          <form action="#Contact" style={{display: 'flex',flexDirection: 'column'}}>
            <label htmlFor="name">Votre Nom</label>
            <input value={this.state.name} onChange={event=>this.setState({name: event.target.value})} id="name" style={{margin:10}} placeholder="Entrer votre nom" type="text"/>

            <label htmlFor="mail">Votre email</label>
            <input value={this.state.email} onChange={event=>this.setState({email: event.target.value})} id="mail" style={{margin:10}} placeholder="Entrer votre mail" type="text"/>

          <label htmlFor="objet">Un obejt(Recurtement, Projet)</label>
            <input value={this.state.object} onChange={event=>this.setState({object: event.target.value})} id="objet" style={{margin:10}} placeholder="Entrer un objet" type="text"/>

        <label htmlFor="subject">Ecriver votre demande</label>
          <textarea value={this.state.subject} onChange={event=>this.setState({subject: event.target.value})} cols="50" rows="1" placeholder="Ecrivez votre demande"></textarea>
          <input type="submit" value="Envoyer" onClick={() => this.handleClick()}/>
          </form>
          {
            this.state.message ? <p style={styles.successMsg}>Votre message a été transmis !</p> : ''
          }
          {
            this.state.messageErreur ? <p style={styles.errorMsg}>Le message n'a pas pu être transmis !</p> : ''
          }
        </div>
        <div style={styles.carte}>
<iframe title="carteSmt" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41796.00680324615!2d2.300251508991784!3d49.10088285041116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e64482344a1697%3A0x40b82c3688b2d90!2s95270+Saint-Martin-du-Tertre!5e0!3m2!1sfr!2sfr!4v1551269088715" style={{width:`100%`, height:`100%`}}></iframe>
        </div>
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
    flex:2,
    backgroundColor: APP_COLORS.customText

  },
  text:{
    color:APP_COLORS.primaryText,
    fontWeight: 300,
    fontSize: 30
  },
  successMsg:{
    backgroundColor: 'rgba(46, 204, 113,0.7)',
    color: APP_COLORS.primaryText,
    borderRadius: 5,
    padding: 20,
    border: `1px solid rgba(46, 204, 113,1.0)`
  },
  errorMsg:{
    backgroundColor: 'rgba(231, 76, 60,0.7)',
    color: APP_COLORS.primaryText,
    borderRadius: 5,
    padding: 20,
    border: `1px solid rgba(231, 76, 60,0.7)`
  }
}
