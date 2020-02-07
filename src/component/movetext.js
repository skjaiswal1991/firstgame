import React, { Component } from 'react';
import './home.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const cordinats = []



class Movetext extends Component {
    constructor(props) {
        super(props);
        this.state = { x:10,y:100,pointer:[] }
        this.myVar= "";
    }

    updatePointer = (data,type) =>{
        console.log("i am here");
        console.log(type);
        if(type === 'y'){
            console.log(type);
                this.setState(state=>{
                    //let list = [...state.pointer,{x:state.x,y:state.y - 10}]
                    let  list = state.pointer.map((list,i)=>{                            
                           console.log(list);
                          // if((i + 1) === 1){
                              let dec = data - (10 * (i + 1)) 
                              list.y = dec                    
                               return list
                          // }

                             
                  })

                    return {
                        pointer:list,
                    }
                })
        }
        

    }

    increaseNumber = (data,cor) =>{
        console.log(cor);
        const { pointer }  = this.state;
        this.myVar = setInterval(()=>{
                    if(cor === 'x'){
                        let data = this.state.x;
                        // let ydata = this.state.y;
                        // this.state.pointer.x = ydata;
                        // let dat = this.state.x - 11;
                        
                        this.setState({x: data + 1})

                    }else{
                        let data = this.state.y;
                        // let xdata = this.state.x;
                        // // this.setState({ox: xdata})
                        // // let dat = this.state.y - 11;
                        this.updatePointer(data,'y');
                        this.setState({y: data + 1})
                    }                    
                    
        }, 100);  
    }

    addnewfoods = () =>{

         var len = this.state.pointer.length + 1
            console.log(this.state.pointer.length);
            this.setState(state=>{

                let list = [...state.pointer,{x:state.x,y:state.y - (10 * len)}]
                    return {
                        pointer:list,
                    }
                })
            }


    decreaseNumber = (data,cor) =>{
        console.log(cor);
        this.myVar = setInterval(()=>{
                    if(cor === 'x'){
                        
                        let data = this.state.x;
                        // let ydata = this.state.y;
                        // this.setState({oy: ydata})
                        // let dat = this.state.x + 11;
                        this.setState({x: data - 1})

                    }else{
                        let data = this.state.y;
                        // let xdata = this.state.x;
                        // this.setState({ox: xdata})
                        // let dat = this.state.y + 11;
                        this.setState({y: data - 1})
                    }                    
                    
        }, 100);
    }
    

    increaseNumberStop = () =>{
        clearTimeout(this.myVar);
    }



    handle = (key) =>{

        console.log(key);

        if(key === 'down'){
            let data = this.state.y;
            this.increaseNumberStop();
            this.increaseNumber(data,'y')
            
        }
        if(key === 'right'){
            let data = this.state.x;
            this.increaseNumberStop();
            this.increaseNumber(data,'x')
            
            
        }
        if(key === 'left'){
            let data = this.state.x;           
            this.increaseNumberStop();
            this.decreaseNumber(data,'x')
        }
        if(key === 'up'){
            let data = this.state.y;
            this.increaseNumberStop();
            this.decreaseNumber(data,'y')
           
        }
        if(key === 'space'){
            this.increaseNumberStop();
           
        }
    }

    render() { 
        console.log(this.state);
        const { pointer } = this.state;

        const Vdata = pointer.map((data,i)=>{
            return( <div key={i} className={"box"}  style={{position: 'absolute',left: data.x,top: data.y}}></div>)
        } )
        
        return ( 
            <React.Fragment>

                <div className="row" style={{position: 'absolute', bottom: 0}}>
                        <button className="btn btn-primary"onClick={this.addnewfoods}> add New </button>   
                       
                        <button className="btn btn-primary" onClick={this.increaseNumberStop}> End </button>
                </div>
                <div>

                    <KeyboardEventHandler handleKeys={['left', 'up', 'right', 'down','space']}
                        onKeyEvent={(key, e) => this.handle(key)} ></KeyboardEventHandler>
                         
                        <div className="pointers">
                            {Vdata}                           
                            <div className="box"  style={{position: 'absolute',left: this.state.x,top: this.state.y}}></div>                            
                        </div>
                            
                </div>
            </React.Fragment>
         );
    }
}
 
export default Movetext;