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

                        <div class="container-fluid h-100">
                            <div class="row justify-content-center h-100">
                                <div class="col-md-4 col-xl-3 chat">
                                    <div class="card mb-sm-3 mb-md-0 contacts_card">
                                        <div class="card-header">
                                            <div class="input-group">
                                                <input type="text" placeholder="Search..." name="" class="form-control search" />
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="card-body contacts_body">
                                        <ui class="contacts">
                                        <li class="active">
                                            <div class="d-flex bd-highlight">
                                                <div class="img_cont">
                                                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img" />
                                                    <span class="online_icon"></span>
                                                </div>
                                                <div class="user_info">
                                                    <span>Khalid</span>
                                                    <p>Kalid is online</p>
                                                </div>
                                            </div>
                                        </li>
                                        </ui>
                                    </div>
                                    <div class="card-footer"></div>
                                </div></div>
                                <div class="col-md-8 col-xl-6 chat">
                                    <div class="card">
                                        <div class="card-header msg_head">
                                            <div class="d-flex bd-highlight">
                                                <div class="img_cont">
                                                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img" />
                                                    <span class="online_icon"></span>
                                                </div>
                                                <div class="user_info">
                                                    <span>Chat with Khalid</span>
                                                    <p>1767 Messages</p>
                                                </div>
                                                <div class="video_cam">
                                                    <span><i class="fas fa-video"></i></span>
                                                    <span><i class="fas fa-phone"></i></span>
                                                </div>
                                            </div>
                                            <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
                                            <div class="action_menu">
                                                <ul>
                                                    <li><i class="fas fa-user-circle"></i> View profile</li>
                                                    <li><i class="fas fa-users"></i> Add to close friends</li>
                                                    <li><i class="fas fa-plus"></i> Add to group</li>
                                                    <li><i class="fas fa-ban"></i> Block</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="card-footer">
                                            <div class="input-group">
                                                <div class="input-group-append">
                                                    <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                                                </div>
                                                <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                                                <div class="input-group-append">
                                                    <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </React.Fragment>
         );
    }
}
 
export default Tictoc;