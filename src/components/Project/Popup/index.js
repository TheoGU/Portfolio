import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import '../style.css'



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
                        <div style={{flex:3, width: `60%`, height: `60%`,border:`1px solid red`,backgroundImage:`url(${this.props.backGroundImgApercu})` , borderRadius: 20, marginTop: 20}}/>
                        <div style={{flex:1,marginTop: 20}}>
                          <a target="_blank" rel="noopener noreferrer" href={this.props.link}>Voir le projet</a>
                        </div>
                    </div>
                      <div className="modalResume">
                        <h1>{this.props.title}</h1>
                        <em>{this.props.content}</em>
                        <p>{this.props.resumer}</p>
                      </div>
                        <button className="close" onClick={() => this.closeModal()}>x</button>
                    </div>
                </Modal>
            </section>
        );
    }

}
