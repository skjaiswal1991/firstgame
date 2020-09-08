import React, { Component } from 'react';
import io from 'socket.io-client';
import './index.css';

const socket  = io('http://localhost:3020');

class Tictoc extends Component {
    constructor(props) {
        super(props);
        this.state = { totalbox:9,txtmsg:[],msg:'',count:0,user:[],AIComputer:[],winner:''}
        this.WinArray = [
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [6,4,2]
                    ]
       

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
      //  let win = [0,1,2];
      //  this.winChecker(win,1);
      
    }

    formsubmit = (e) =>{
        e.preventDefault();
        //this.setState({msg:e.target.groupname.value})
        socket.emit('msgFromClient',{txt:e.target.groupname.value})
        
    }

    componentDidMount(){
    }


    // Check the winner 
    winChecker = (data,UserNo) =>{
            
            //console.log(data);
            var check = data
            var IsWin = false;
            this.WinArray.map((w,i) => {
                // check the Is the curent entry  to win the game
                var dd = this.getArraysIntersection(w,check);              
                if(dd.length == 3){
                    IsWin = true;
                }                
            })

            if( IsWin ){
               let WinName = UserNo == 1 ? 'AI Computer' : ' Human User'
                return WinName
            }else{
                return false
            }

            
    }
   getArraysIntersection =  (a1,a2)=>{
        return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
    }
    clickEvent = (event) =>{
        const {count,user,AIComputer} = this.state;
        console.log(event.target.id);
        var Winner = '';
        this.setState({count: count + 1})
        var id = parseInt(event.target.id);
        if( parseInt(count) % 2 === 0 ){
            document.getElementById(event.target.id).innerHTML = 'O';
            user.push(id);
            if( user.length >= 3 ){
                Winner = this.winChecker(user,0);
                
            }
            
        }else{
            document.getElementById(event.target.id).innerHTML = 'X';
            AIComputer.push(id);
          
            if( user.length >= 3 ){
                Winner = this.winChecker(user,0);
                
            }
        }
        
        console.log(Winner);

        if(Winner){
            console.log()
            alert(`${Winner} is a Winner`);
            // Winner function
            
        }
    }
    render() { 
        const{ txtmsg } = this.state;
        console.log(txtmsg);
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
                                {txtmsg.map((m,i) =>( <li>{m}</li>))
                             }
                            </ul>
                        </div>
                   </div>
               </div>
                    <div class="container-fluid">
                        <div class="row">
                        {/* <div class="col-12 col-sm-2 ads"> "ads </div> */}
                        <div class="col-4 col-sm-4 content">
                            <div class="container-fluid tic-container">
                                <div class="row tic-row">
                                    {Array.from({length:9},(_,i) => (
                                                <div class="col-4 tic-box key" id={i} onClick={this.clickEvent} ></div>
                                              
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-12 col-sm-2 tic-panel"> PANEL-THINGY Score: Foo bar: stuffReset game and all that blah </div> */}
                        {/* <div class="col-12 col-sm-2 ads"> ads </div> */}
                        </div>
                    </div>

                        {/* <div class="container-fluid h-100">
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
                        </div> */}
            </React.Fragment>
         );
    }
}
 
export default Tictoc;