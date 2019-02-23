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

    render() {

        return (
            <section>
                <div className="block" style={{
                  width:200,
                  height:200,
                  margin:10,
                  backgroundSize: 'cover',
                  backgroundImage:`url(${this.props.back})`
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
                      </div>
                      <div className="modalResume">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.content}</p>
                      </div>
                        <a className="close" href="javascript:void(0);" onClick={() => this.closeModal()}>x</a>
                    </div>
                </Modal>
            </section>
        );
    }

}

const styles = {
  container:{
    display:'flex',
    flexWrap: 'wrap',
    minHeight: `100vh`,
    justifyContent:'space-around',
    alignItems:'center',
    alignContent:'center',
    paddingLeft:50,
    paddingRight:50,
  }


}
