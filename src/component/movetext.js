import React, { Component,prevState } from 'react';
import './home.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Popup from 'reactjs-popup'; 
const cordinats = [
    {
        x:751,
        y:102
    }

]

const rendomepos = [
    {x:601,y:222},{x:821,y:482},{x:671,y:112},{x:521,y:422},{x:521,y:392},{x:551,y:322},{x:561,y:112},{x:731,y:302}
]

const re= [
    {x:601,y:222}
]


class Movetext extends Component {
    constructor(props) {
        super(props);
        this.state = {pointer:cordinats,length:'',activeevent:"",maxx : 941,minx:448,maxy:512,miny:72,open:true,gameover:false,rendomfood:re,speed:700 }
        this.myVar= "";

       
    }
    reloadhadler = () =>{
        window.location.reload();
    }
    validatespostion = (pointData,type) =>{
          const { maxx,minx,miny,maxy } = this.state;
            console.log("PointerData="+pointData);
            console.log("Type="+type);
            if(type == 'x'){

                if( pointData > maxx || minx > pointData){
                    this.increaseNumberStop();
                    this.setState({gameover:true});
                }

            }else if(type == 'y'){
                if( pointData > maxy || miny > pointData){
                    this.increaseNumberStop();
                    this.setState({gameover:true});
                } 
            }
            
    } 

    checkfood = (x,y) =>{
        console.log("check food postion");
        const {rendomfood}  = this.state;
        rendomfood.map((food,i)=>{
            console.log(x);
            console.log(food.x);
            if(food.x == x && food.y == y){
                var item = rendomepos[Math.floor(Math.random() * rendomepos.length)]
                console.log(item);
                const newspeed = this.state.speed - 10;
                this.setState({speed:newspeed})
                this.addnewfoods();
                this.setState({rendomfood:[item]})
               
            }
                
        })
        
    }
    increaseNumber = (data,cor) =>{
        const { maxx,minx,miny,maxy } = this.state;
        var t = 0;
        var tx = 0;
        var ty = 0;
        var n = 0;
        var ny = 0;
        var check = true;
        this.myVar = setInterval(()=>{

                    if(cor === 'x'){                       
                            //console.log(data);
                            this.setState(state=>{
                                let list = state.pointer.map((pointer,i)=>{

                                    let pointData =  pointer.x + 10;
                                    if( (pointData > maxx || minx > pointData) && check ){
                                        this.increaseNumberStop();
                                        this.setState({gameover:true});
                                        check = false;
                                        return pointer;
                                    }else if( check ){

                                            
                                            if(i === 0){
                                                console.log("yes");
                                                tx = pointer.x;
                                                ty = pointer.y;
                                                pointer.x =  pointer.x + 10;
                                                this.checkfood(pointer.x,pointer.y);
                                            }else{
                                                console.log("else");
                                                n = pointer.x
                                                ny = pointer.y;
                                                pointer.x = tx;
                                                pointer.y = ty;
                                                tx = n;
                                                ty = ny;

                                            }
                                }
                                    return pointer
                                })
                                

                                return {
                                    pointer:list,
                                    list
                                }
                         })

                    }else{
                         this.setState(state=>{
                            console.log(data);
                                let list = state.pointer.map((pointer,i)=>{

                                    let pointData =  pointer.y + 10;
                                    if( (pointData > maxy || miny > pointData) && check ){
                                        this.increaseNumberStop();
                                        this.setState({gameover:true});
                                        check = false;
                                        return pointer;
                                    }else if( check ){

                                        if(i == 0){                                        
                                            tx = pointer.x;
                                            ty = pointer.y;
                                            pointer.y =  pointer.y + 10;
                                            this.checkfood(pointer.x,pointer.y);
                                            console.log(t);
                                        }else{
                                            n = pointer.x
                                            ny = pointer.y;
                                            pointer.x = tx;
                                            pointer.y = ty;
                                            tx = n;
                                            ty = ny;

                                        }   
                                    }
                                    
                                    return pointer
                                })
                            return {                            
                                pointer:list,
                            }
                            
                        })
                        this.setState({y: data + 1})
                    } 
        }, this.state.speed);  
    }

    addnewfoods = () =>{
        const{ pointer,activeevent } = this.state;  
        
        var  data = pointer.slice(-1);
        console.log(data);
        console.log(activeevent);
        var xval = data[0].x;
        var yval = data[0].y;
        if(activeevent == 'x'){
            xval = xval - 10;               
        }else if(activeevent == '-x'){
            xval = data[0].x + 10;            
        }else if(activeevent == 'y'){
            yval = data[0].y + 10;
            console.log("Y update");
        }else if(activeevent == '-y'){            
            yval = data[0].y + 10;
        }

            this.setState(state=>{
                let list = [...state.pointer,{x:xval,y:yval}]
                    return {
                        pointer:list,
                    }
                })
    }

    rendomfood = () =>{
        let da = [{x:650,y:400}];

        var item = rendomepos[Math.floor(Math.random() * rendomepos.length)]
        //console.log(item);
        this.setState({rendomfood:da})

        this.addnewfoods();
    }

    decreaseNumber = (data,cor) =>{
                console.log(cor);
                const { maxx,minx,miny,maxy } = this.state;
                var t = 0;
                var tx = 0;
                var ty = 0;
                var n = 0;
                var ny = 0;
                var check = true;
                this.myVar = setInterval(()=>{
                    if(cor === 'x'){                       
                        //console.log(data);
                        this.setState(state=>{
                            let list = state.pointer.map((pointer,i)=>{
                                let pointData =  pointer.x - 10;
                                    if( (pointData > maxx || minx > pointData) && check ){
                                        this.increaseNumberStop();
                                        this.setState({gameover:true});
                                        check = false;
                                        return pointer;
                                    }else if( check ){
                                        console.log(i );
                                        if(i == 0){                                        
                                            tx = pointer.x;
                                            ty = pointer.y;
                                            pointer.x =  pointer.x - 10;
                                            this.checkfood(pointer.x,pointer.y);
                                            console.log(t);
                                        }else{
                                            n = pointer.x
                                            ny = pointer.y;
                                            pointer.x = tx;
                                            pointer.y = ty;
                                            tx = n;
                                            ty = ny;

                                        }
                                    }
                                return pointer
                            })
                            console.log(list);

                            return {
                                pointer:list,
                                list
                            }
                    })

                }else{
                    this.setState(state=>{
                        console.log(data);
                            let list = state.pointer.map((pointer,i)=>{

                                let pointData =  pointer.y - 10;
                                    if( (pointData > maxy || miny > pointData) && check ){
                                        this.increaseNumberStop();
                                        this.setState({gameover:true});
                                        check = false;
                                        return pointer;
                                    }else if( check ){
                                        if(i == 0){                                        
                                            tx = pointer.x;
                                            ty = pointer.y;
                                            pointer.y =  pointer.y - 10;
                                            this.checkfood(pointer.x,pointer.y);
                                            console.log(t);
                                        }else{
                                            n = pointer.x
                                            ny = pointer.y;
                                            pointer.x = tx;
                                            pointer.y = ty;
                                            tx = n;
                                            ty = ny;

                                        }   
                                    }
                                
                                return pointer
                            })
                        return {                            
                            pointer:list,
                        }
                        
                    })
                    this.setState({y: data + 1})
                } 
        }, this.state.speed);
    }   

    increaseNumberStop = () =>{
        clearTimeout(this.myVar);
    }
    handle = (key) =>{
        console.log(key);
        const {pointer}  = this.state;

        if(key === 'down'){
            const {target}  = this.state;
            this.increaseNumberStop();
            this.increaseNumber(pointer,'y')
            this.setState({activeevent:'y'});
            
        }
        if(key === 'right'){
            let data = this.state.x;
            this.increaseNumberStop();
            this.increaseNumber(pointer,'x');
            this.setState({activeevent:'x'});
        }
        if(key === 'left'){
            let data = this.state.x;           
            this.increaseNumberStop();
            this.decreaseNumber(pointer,'x')
            this.setState({activeevent:'-x'});
        }
        if(key === 'up'){
            let data = this.state.y;
            this.increaseNumberStop();
            this.decreaseNumber(pointer,'y')
            this.setState({activeevent:'-y'});
           
        }
        if(key === 'space'){
            this.increaseNumberStop();
           
        }
    }
    closeModal = () =>{
        this.setState({open:false})
    }

    render() { 
        console.log(this.state);
        const { pointer,rendomfood } = this.state;

        console.log(rendomfood);

        const Rendom = rendomfood.map((data,i)=>{
            return( <div key={i} className={"box"}  style={{position: 'absolute',left: data.x,top: data.y}}></div>)
        } )
        const Vdata = pointer.map((data,i)=>{
            return( <div key={i} className={"box"}  style={{position: 'absolute',left: data.x,top: data.y}}></div>)
        } )
        
        return ( 
            <React.Fragment>

                <div className="row" style={{position: 'absolute', bottom: 0}}>
                        <button className="btn btn-primary"onClick={this.addnewfoods}> add New </button>   
                       
                        <button className="btn btn-primary" onClick={this.increaseNumberStop}> End </button>
                </div>
                {this.state.gameover ? ( <Popup closeOnDocumentClick  onClose={this.closeModal}  open={this.state.open} position="right center">
                                        <div className="modal-content">                                            
                                            <div className="modal-body">                                               
                                                    <a className="close" onClick={this.closeModal}>&times;</a>
                                                    <h1> GAME OVER</h1>                                   
                                                    <button className="btn btn-primary" onClick={this.reloadhadler}> Re-Start </button>                                                
                                            </div>                                            
                                        </div>                                        
                                    </Popup> ) : ""}
                <div>

                    <KeyboardEventHandler handleKeys={['left', 'up', 'right', 'down','space']}
                        onKeyEvent={(key, e) => this.handle(key)} ></KeyboardEventHandler>
                         
                        <div className="pointers">
                            {Vdata}                           
                             {Rendom}                          
                        </div>
                            
                </div>
            </React.Fragment>
         );
    }
}
 
export default Movetext;


// import React, { Component } from 'react';
// import './home.css';
// import KeyboardEventHandler from 'react-keyboard-event-handler';

// const cordinats = []



// class Movetext extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { x:10,y:100,pointer:[] }
//         this.myVar= "";
//     }

//     updatePointer = (data,type) =>{
//         console.log("i am here");
//         console.log(type);
//         if(type === 'y'){
//             console.log(type);
//                 this.setState(state=>{
//                     //let list = [...state.pointer,{x:state.x,y:state.y - 10}]
//                     let  list = state.pointer.map((list,i)=>{                            
//                            console.log(list);
//                           // if((i + 1) === 1){
//                               let dec = data - (10 * (i + 1)) 
//                               list.y = dec                    
//                                return list
//                           // }

                             
//                   })

//                     return {
//                         pointer:list,
//                     }
//                 })
//         }
        

//     }

//     increaseNumber = (data,cor) =>{
//         console.log(cor);
//         const { pointer }  = this.state;
//         this.myVar = setInterval(()=>{
//                     if(cor === 'x'){
//                         let data = this.state.x;
//                         // let ydata = this.state.y;
//                         // this.state.pointer.x = ydata;
//                         // let dat = this.state.x - 11;
                        
//                         this.setState({x: data + 1})

//                     }else{
//                         let data = this.state.y;
//                         // let xdata = this.state.x;
//                         // // this.setState({ox: xdata})
//                         // // let dat = this.state.y - 11;
//                         this.updatePointer(data,'y');
//                         this.setState({y: data + 1})
//                     }                    
                    
//         }, 100);  
//     }

//     addnewfoods = () =>{

//          var len = this.state.pointer.length + 1
//             console.log(this.state.pointer.length);
//             this.setState(state=>{

//                 let list = [...state.pointer,{x:state.x,y:state.y - (10 * len)}]
//                     return {
//                         pointer:list,
//                     }
//                 })
//             }


//     decreaseNumber = (data,cor) =>{
//         console.log(cor);
//         this.myVar = setInterval(()=>{
//                     if(cor === 'x'){
                        
//                         let data = this.state.x;
//                         // let ydata = this.state.y;
//                         // this.setState({oy: ydata})
//                         // let dat = this.state.x + 11;
//                         this.setState({x: data - 1})

//                     }else{
//                         let data = this.state.y;
//                         // let xdata = this.state.x;
//                         // this.setState({ox: xdata})
//                         // let dat = this.state.y + 11;
//                         this.setState({y: data - 1})
//                     }                    
                    
//         }, 100);
//     }
    

//     increaseNumberStop = () =>{
//         clearTimeout(this.myVar);
//     }



//     handle = (key) =>{

//         console.log(key);

//         if(key === 'down'){
//             let data = this.state.y;
//             this.increaseNumberStop();
//             this.increaseNumber(data,'y')
            
//         }
//         if(key === 'right'){
//             let data = this.state.x;
//             this.increaseNumberStop();
//             this.increaseNumber(data,'x')
            
            
//         }
//         if(key === 'left'){
//             let data = this.state.x;           
//             this.increaseNumberStop();
//             this.decreaseNumber(data,'x')
//         }
//         if(key === 'up'){
//             let data = this.state.y;
//             this.increaseNumberStop();
//             this.decreaseNumber(data,'y')
           
//         }
//         if(key === 'space'){
//             this.increaseNumberStop();
           
//         }
//     }

//     render() { 
//         console.log(this.state);
//         const { pointer } = this.state;

//         const Vdata = pointer.map((data,i)=>{
//             return( <div key={i} className={"box"}  style={{position: 'absolute',left: data.x,top: data.y}}></div>)
//         } )
        
//         return ( 
//             <React.Fragment>

//                 <div className="row" style={{position: 'absolute', bottom: 0}}>
//                         <button className="btn btn-primary"onClick={this.addnewfoods}> add New </button>   
                       
//                         <button className="btn btn-primary" onClick={this.increaseNumberStop}> End </button>
//                 </div>
//                 <div>

//                     <KeyboardEventHandler handleKeys={['left', 'up', 'right', 'down','space']}
//                         onKeyEvent={(key, e) => this.handle(key)} ></KeyboardEventHandler>
                         
//                         <div className="pointers">
//                             {Vdata}                           
//                             <div className="box"  style={{position: 'absolute',left: this.state.x,top: this.state.y}}></div>                            
//                         </div>
                            
//                 </div>
//             </React.Fragment>
//          );
//     }
// }
 
// export default Movetext;