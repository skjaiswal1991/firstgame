import React, { Component } from 'react';
import './home.css';
import Popup from 'reactjs-popup'; 
import { Redirect,Link } from 'react-router-dom';

const sec = [
    {
        title:'Play the Image Matching Game',
        image: './img/bgimage.jpg',
        link: '/image'
    },
    {
        title:'Play the Image Snakes Game',
        image: './img/bgimage.jpg',
        link: '/snakes'
    },
    {
        title:'test the Cases',
        image: './img/bgimage.jpg',
        link: '/testcase'
    },
    {
        title:'Tic toc with Socket',
        image: './img/bgimage.jpg',
        link: '/tictoc'
    }
    
]


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { section:sec}
    }

    componentWillMount(){

        
    }


    clickhandler = (data) =>{
        console.log(data);
        return <Redirect to={'/'+data} />
    }

    render() { 
        console.log(this.state);
        const { section }  = this.state;

        return ( 
                <React.Fragment>
                    
                    
                        <section className="text-center">
                            <img src="./img/slider3.jpg" style={{height: '600px',width: '100%'}} alt="header image"></img>
                        </section>                    
                            
                        <div className="album py-5 bg-light">  
                            <div className="container">           
                                <div className="row"> 

                                    {section.map((val,i)=>
                                            <div className="col-md-4">
                                                <div className="card mb-4 box-shadow">
                                                    <img src={val.image} style={{width: '100%'}} alt={val.title}></img>
                                                    <Link to={val.link} className="centered"><strong>{val.title}</strong></Link>
                                                </div>
                                            </div>
                                    )}
                                
                                </div> 
                            </div>   
                        </div>
                                      
                                
                </React.Fragment>
         );
    }
}
 
export default Home;