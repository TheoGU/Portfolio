import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import '../style.css'

import {APP_COLORS} from '../../../Style/Colors'


export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }


    closeModal() {
        this.setState({
            visible : false
        });
    }

    componentDidMount(){
      document.addEventListener('keyup', e => {
        if(e.key === 'Escape'){
          this.setState({
              visible : false
          });
        }
      })
    }


    render() {
        return (
            <section>
                <div className="block" style={{
                  width:200,
                  height:200,
                  margin:10,
                  backgroundSize: 'cover',
                  backgroundImage:`url(${this.props.icon})`,
                  }}
                  onClick={() => this.openModal()}></div>

                <Modal
                    visible={this.state.visible}
                    width="850"
                    height="650"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="modal">
                      <div className="modalPicture">
                        <div style={{flex:3, width: `60%`, height: `60%`,backgroundImage:`url(${this.props.backgroundImagePreview})`,backgroundSize:'cover',backgroundPosition:'center' , borderRadius: 20, marginTop: 20}}/>
                        <div style={{flex:1,marginTop: 20}}>
                          <div style={{display: 'flex', flexDirection: 'column'}}>

                            {
                              this.props.linkDemo !== '' ? <a style={{textAlign: 'center',fontSize: 19,color:APP_COLORS.customText, textDecoration: 'underline', fontStyle: 'italic'}} target="_blank" rel="noopener noreferrer" href={this.props.linkDemo} >Voir la Démonstration</a> : ''
                            }
                            {
                              this.props.linkSource !== '' ? <a style={{textAlign: 'center',fontSize: 19,color:APP_COLORS.customText, textDecoration: 'underline', fontStyle: 'italic'}} target="_blank" rel="noopener noreferrer" href={this.props.linkSource} >Voir les sources </a> : ''
                            }
                            {
                              this.props.private ? <p style={styles.errorMsg}>Projet privée !<br/>Bientôt disponible au grand public</p> : ''
                            }
                          </div>
                        </div>
                    </div>


                    <div className="modalResume" style={{paddingLeft: 10,paddingRight: 10}}>
                      <h1 style={{textAlign: 'center',color: APP_COLORS.primaryText, fontWeight: 200}}>{this.props.title}</h1>
                      <p style={{textAlign: 'center', color:'rgba(223, 249, 251,0.7)'}}>{this.props.resumer}</p>
                      <ul>
                        <h4 style={{color: APP_COLORS.primaryText, fontWeight: 300}}>Objectifs principaux</h4>
                        {
                          this.props.obj.map(list => {
                            return <li style={{marginTop: 10,listStyle:'none', marginLeft: 20,color:'rgba(223, 249, 251,0.7)'}}>{list}</li>
                          })
                        }
                      </ul>
                      <div>
                        <h4 style={{textAlign: 'center',color: APP_COLORS.primaryText, fontWeight: 300}}>Compétences :</h4>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                      {
                          this.props.skill.map(list => {
                            return <i style={{textAlign: 'center',backgroundColor: 'rgba(37, 204, 247,0.5)', margin:5, borderRadius: 20, padding:5}}>{list}</i>
                          })
                        }
                      </div>
                      </div>
                    </div>
                        <button className="close" onClick={() => this.closeModal()}>x</button>
                    </div>
                </Modal>
            </section>
        );
    }

}

const styles = {
  errorMsg:{
    backgroundColor: 'rgba(46, 204, 113,0.7)',
    color: APP_COLORS.primaryText,
    borderRadius: 5,
    padding: 20,
    border: `1px solid rgba(46, 204, 113,1.0)`
  }
}
