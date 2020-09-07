import React, { Component } from 'react';
import io from 'socket.io-client';
import './index.css';

const socket  = io('http://localhost:3020');

class Tictoc extends Component {
    constructor(props) {
        super(props);
        this.state = { totalbox:9,txtmsg:[],msg:''}
       
        
        socket.on('msgFromServer',(data)=>{
            console.log(data.txt);

           this.setState((state)=>{
                let txtmsg = [...state.txtmsg,data.txt]    
                return {
                        ...state,
                        txtmsg
                    }
            })
               
                    
        })
        
      
       // this.formsubmit = this.formsubmit.bind();
    }

    formsubmit = (e) =>{
        e.preventDefault();
        //this.setState({msg:e.target.groupname.value})

        socket.emit('msgFromClient',{txt:e.target.groupname.value})
        
    }
    render() { 
        const{ txtmsg } = this.state;
        console.log(txtmsg);

        // const msg = text > 0 ? text.map((m,i)=>{
        //                     console.log(m);
        //                     })  : ""
        return ( 
            <React.Fragment>

               <div className="container">
                   <div className="row">
                       <div className="col-12 col-sm-6">
                           
                           <form method="post" onSubmit={this.formsubmit}>
                               <div className="form-group">
                                   <label>Enter the group name</label>
                                   <input className="form-control" name="groupname"></input>
                               </div>
                               <div className="form-group">
                                 <input type="submit" className='btn btn-primary' ></input>
                               </div>
                           </form>
                       </div>
                       
                   </div>
                   <div className="row">
                        <div className="col-12 col-sm-6">
                            <ul>
                                
        {txtmsg.map((m,i) =>( <li>{m}</li>)
                                
                                )
                             }
                            </ul>
                        </div>
                   </div>
               </div>
                    {/* <div class="container-fluid">
                        <div class="row">
                        <div class="col-12 col-sm-2 ads"> "ads </div>
                        <div class="col-12 col-sm-6 content">
                            <div class="container-fluid tic-container">
                                <div class="row tic-row">
                                    {Array.from({length:9},(_,i) => (
                                                <div  class="col-4 tic-box">{i + 1}</div>
                                              
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-2 tic-panel"> PANEL-THINGY Score: Foo bar: stuffReset game and all that blah </div>
                        <div class="col-12 col-sm-2 ads"> ads </div>
                        </div>
                    </div> */}
            </React.Fragment>
         );
    }
}
 
export default Tictoc;