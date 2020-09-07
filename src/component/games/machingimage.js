import React, { Component } from 'react';
import {images} from './../common/images';
import Popup from 'reactjs-popup';
import ReactCardFlip from 'react-card-flip';


class Machingimage extends Component {
    constructor(props) {
        super(props);
        this.state = { gameEnd:false,score:0,frontimg:[],backimg:[],isFlipped:false }        
        console.log(images.imgTest);
        
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(e);
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

    UNSAFE_componentWillMount(){
        this.setState({frontimg:images.imgData});
    }
    render() { 
        const {gameEnd,score,frontimg} = this.state;
        //console.log(frontimg);
        return ( <React.Fragment>

            
            <div className="container" >
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12" id="view-score">
                        <h1>Hello Welcome In View same image Game</h1>
                        <p>Yoy need to chose same image in any of any of the box</p>
                        <h3>Score: {this.state.score}</h3>

                        {gameEnd ? (
                            <Popup closeOnDocumentClick   onClose={this.closeModal}  open={this.state.open} position="right center">
                                <div className="modal-content">                                            
                                    <div className="modal-body">                                               
                                            <a className="close" onClick={this.closeModal}>&times;</a>
                                            <h1> GAME OVER</h1>                                   
                                            <button className="btn btn-primary" onClick={this.reloadhadler}> Re-Start </button>                                                
                                    </div>                                            
                                </div>                                        
                            </Popup>                                   

                        )  : ''}

                        {score === 6 ? (
                            <Popup closeOnDocumentClick  onClose={this.closeModal}  open={this.state.open} position="right center">
                                <div className="modal-content">                                            
                                    <div className="modal-body">                                               
                                            <a className="close" onClick={this.closeModal}>&times;</a>
                                            <h1> Congrates You Are a Winner</h1>                                   
                                            <button className="btn btn-primary" onClick={this.reloadhadler}> Re-Start </button>                                                
                                    </div>                                            
                                </div>                                        
                            </Popup>                                   

                        )  : ''}
                    </div>
                </div>

                <div className="row">		                    
                        {frontimg.map((image,i)=>
                                    <ReactCardFlip cardZIndex={i} isFlipped={this.state.isFlipped} flipDirection="horizontal">

                                        <div class="flip-image">
                                            <img src='./img/viewimage.png' alt={"Avatar"} className="" onClick={this.handleClick} style={{width:'100%',minHeight: '200px'}} />
                                        </div>
                                
                                        <div class="flip-image">                                            
                                            <img src={image.img} alt={"Avatar"} className="" onClick={this.handleClick} style={{width:'100%',minHeight: '200px'}} />
                                        </div>
                                    </ReactCardFlip>
                                // <div className="col-md-2 col-sm-2 " key={i}  >                                                        
                                //     <img src={image} alt={"Avatar"} className="" onClick={(e)=>this.handler(e,i)} style={{width:'100%',minHeight: '200px'}} />
                                // </div>
                        )}                            
                </div>

                
            </div>
                        
        </React.Fragment> );
    }
}
 
export default Machingimage;