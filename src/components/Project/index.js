import React from 'react'
import './style.css'
import {APP_COLORS} from '../../Style/Colors'

import Popup from './Popup'

import monon from './img/mont.jpg';
import appCalc from './img/appCalc.png';
import cat from './img/cat.jpeg';
import mil from './img/mil.jpeg';

import phone from './img/phone.png'


class Project extends React.Component {

  render() {
    const pop = [
      {
        title:'Application mobile Mathématique',
        skill:['Laravel', 'VueJS', 'React Native'],
        icon:appCalc,
        resumer:'"MathsCalculator" est une application mobile que j\'ai développé afin de pouvoir gagner du temps lors de certains calculs de math tel que le PGCD mais également l\'Exponentiel rapide et pour finir une calculatrice classique L\'application est acutellement disponible sur l\'expo store : https://expo.io/@theogu/maths',
        linkDemo:'https://github.com/TheoGU/mathsCalculator',
        linkSource:'rfrfrrf',
        backgroundImagePreview: phone,
        obj:['one','two','three'],
        private: false

      },
      {
        title:'Eden des 4 pattes',
        skill:['Laravel', 'VueJS', 'React Native'],
        icon:cat,
        resumer:"L'Eden des 4 pattes est un hôtel 100% félins, pour les personnes qui ne savent pas où placer leur chat lors de départs en vacances, en week end ou encore pendant leur journée de travail. Notre objectifs, se connecter sur son compte client pour voir en photo ou en vidéo son chat dans l'hôtel. La réservation en ligne avec une possibilité de payement (carte bleue, Paypal, ….) : Stripe, Paypal. Le forum de discussions pour que les propriétaires discutent entre eux et avec le personnel",
        linkDemo:'https://www.facebook.com',
        linkSource:'de',
        backgroundImagePreview: phone,
        obj:['one','two','three'],
        private: false

      },
      {
        title:'troi',
        skill:['Laravel', 'VueJS', 'React Native'],
        icon:mil,
        resumer:'Lorem ipsumnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkDemo:'javascript:void(0);',
        linkSource:'',
        backgroundImagePreview: phone,
        obj:['one','two','three'],
        private: true

      },
      {
        title:'quatre',
        skill:['Laravel', 'VueJS', 'React Native'],
        icon:monon,
        resumer:'lit anim id est laborum.',
        linkDemo:'javascript:void(0);',
        linkSource:'',
        backgroundImagePreview: phone,
        obj:['one','two','three'],
        private: true

      },
      {
        title:'cinq',
        skill:['Laravel', 'VueJS', 'React Native'],
        icon:monon,
        resumer:'iquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkDemo:'javascript:void(0);',
        linkSource:'f',
        backgroundImagePreview: phone,
        obj:['one','two','three'],
        private: true

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
