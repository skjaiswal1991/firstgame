import React, { Component } from 'react';
import './home.css';
import Popup from 'reactjs-popup'; 

const imgTest = [
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png',
                    './img/viewimage.png'
                ]

const imgData = [
                    {img:'./img/crish.jpg',code:11},
                    {img:'./img/images.jpg',code:12},
                    {img:'./img/liam.jpg',code:13},
                    {img:'./img/Ranbir-Kapoor.jpg',code:14},
                    {img:'./img/ranveersingh.jpg',code:15},
                    {img:'./img/rock.jpg',code:16},
                    {img:'./img/images.jpg',code:12},                    
                    {img:'./img/Ranbir-Kapoor.jpg',code:14},                  
                    {img:'./img/rock.jpg',code:16},
                    {img:'./img/ranveersingh.jpg',code:15},
                    {img:'./img/crish.jpg',code:11},
                    {img:'./img/liam.jpg',code:13},
                ]

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                        clickImage : imgTest,
                        transtion : "",
                        gameEnd:false,
                        score:0,
                        checkNumber:0,
                        open:true,
                        sucess:false
                    }
    }
    
    handler = (e,i) =>{

        
        const {className}  = e.target;
        const { gameEnd,checkNumber,score } = this.state;

        if( gameEnd === false){
            const min = 1;
            const max = 7;
            const rand = Math.floor(min + Math.random() * (max - min));
            console.log(rand);
            
            if(className !== 'Active')
            {            
                e.target.src = imgData[i].img;
                if(checkNumber === 0){
                    this.setState({checkNumber:imgData[i].code})
                }else if(checkNumber === imgData[i].code) {
                    this.setState({score:score + 1,checkNumber:0})

                }else{
                    this.setState({gameEnd:true})
                }           
            }            
            e.target.className ="Active";
        }else{


        }
    }

    reloadhadler = () =>{
        window.location.reload();
    }

    closeModal = () =>{
        this.setState({open:false})
    }

    render() { 
        console.log(this.state);
        const { clickImage,gameEnd,sucess,score}  = this.state;

        return ( 
                <React.Fragment>
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12" id="view-score">
                                <h1>Hello Welcome In View same image Game</h1>
                                <p>Yoy need to chose same image in any of any of the box</p>
                                <h3>Score: {this.state.score}</h3>

                                {gameEnd ? (
                                    <Popup closeOnDocumentClick  onClose={this.closeModal}  open={this.state.open} position="right center">
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
                                {clickImage.map((image,i)=>
                                        <div className="col-md-2 col-sm-2 " key={i}  >                                                        
                                            <img src={image} alt={"Avatar"} className="" onClick={(e)=>this.handler(e,i)} style={{width:'100%',minHeight: '200px'}} />
                                        </div>
                                )}                            
                        </div>

                        
                    </div>
                                
                </React.Fragment>
         );
    }
}
 
export default Image;