import React from 'react'
import './style.css'
import {APP_COLORS} from '../../Style/Colors'

import Popup from './Popup'

import appCalc from './img/appCalc.png';
import cat from './img/cat.jpeg';
import mil from './img/mil.jpeg';
import edt from './img/edt.jpg';
import portfolio from './img/portfolio.png';
import portB from './img/portB.jpg';

import mathApp from './img/mathApp.gif'
import ed4App from './img/ed4App.gif'
import edtB from './img/edtB.jpg'
import mileB from './img/mileB.jpg'


class Project extends React.Component {

  render() {
    const pop = [
      {
        title:'Application mobile Mathématique',
        skill:['Maths', 'React Native'],
        icon:appCalc,
        resumer:'"MathsCalculator" est une application mobile que j\'ai développé afin de pouvoir gagner du temps lors de certains calculs de math tel que le PGCD mais également l\'Exponentiel rapide et pour finir une calculatrice classique.',
        linkDemo:'https://expo.io/@theogu/maths',
        linkSource:'https://github.com/TheoGU/mathsCalculator',
        backgroundImagePreview: mathApp,
        obj:['Interface d\'une calculatrice','Interface pour obtenir de PGCD','Interface pour obtenir Exponentiel Rapide'],
        private: false

      },
      {
        title:'Eden des 4 pattes',
        skill:['Laravel', 'VueJS', 'React Native', 'Lumen'],
        icon:cat,
        resumer:"L'Eden des 4 pattes est un hôtel 100% félins, pour les personnes qui ne savent pas où placer leur chat lors de départs en vacances, en week end ou encore pendant leur journée de travail. Notre objectifs, se connecter sur son compte client pour voir en photo ou en vidéo son chat dans l'hôtel. La réservation en ligne avec une possibilité de payement (carte bleue, Paypal, ….) : Stripe, Paypal. Le forum de discussions pour que les propriétaires discutent entre eux et avec le personnel",
        linkDemo:'',
        linkSource:'',
        backgroundImagePreview: ed4App,
        obj:['Se connecter sur son compte client pour voir en photo ou en vidéo son chat dans l\'hôtel','La réservation en ligne avec une possibilité de payement (carte bleue, Paypal, ….)','Le forum de discussions pour que les propriétaires discutent entre eux et avec le personnel'],
        private: true

      },
      {
        title:'Plus ou Moins ?',
        skill:['Electron', 'HTML', 'CSS', 'Javascript'],
        icon:mil,
        resumer:'Jeux du juste prix sous forme d\'application bureautique.',
        linkDemo:'',
        linkSource:'',
        backgroundImagePreview: mileB,
        obj:['Interface joyeuse','Nombre de coup','Commande de triche'],
        private: true
      },
      {
        title:'One time to work',
        skill:['Phalcon', 'React JS', 'Node JS', 'MySQL'],
        icon:edt,
        resumer:'Emploi du temps pour déterminer le temps de travail dans une journée afin d\'optimiser sont temps de production',
        linkDemo:'',
        linkSource:'',
        backgroundImagePreview: edtB,
        obj:['Graphe dynamique','Gestion du temps','Notifications'],
        private: true

      },
      {
        title:'Mon portfolio',
        skill:['React JS', 'React Native'],
        icon:portB,
        resumer:'Mon portfolio représente ma vie en tant que développeur autodidacte. Une application mobile sera bientôt disponible sur l\'expo store !',
        linkDemo:'https://www.theoguinebertier.com',
        linkSource:'https://github.com/TheoGU/Portfolio',
        backgroundImagePreview: portfolio,
        obj:['Claire','Simple','Intuitif'],
        private: false

      },
    ]

    return (
      <div id="Project" style={styles.container}>
          <h2 style={styles.text}>Mes projets</h2>
          <div style={styles.content}>
          {
            pop.map( elt => (
              <Popup
                key={elt.title}
                obj={elt.obj}
                title={elt.title}
                skill={elt.skill}
                icon={elt.icon}
                resumer={elt.resumer}
                linkDemo={elt.linkDemo}
                linkSource={elt.linkSource}
                private={elt.private}
                backgroundImagePreview={elt.backgroundImagePreview}
                />
            )
          )
          }
          </div>
      </div>
    )
  }
}
export default Project


const styles = {
  container:{
    display:'flex',
    flexWrap: 'wrap',
    minHeight: `100vh`,
    justifyContent:'center',
    alignItems:'flex-start',
  },

  content:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    alignContent:'center',
    paddingLeft:50,
    paddingRight:50,
    flexWrap:'wrap',
  },
  text:{
    color: APP_COLORS.primaryText,
    marginTop: 130,
    marginBottom: -100,
    fontFamily:'sans-serif',
    fontWeight:100,
  }


}
