import React, { Component } from 'react';



class Testcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            //list: ['a', 'b', 'c'],
            list: [40, 50, 60],
          };
        }
        onChangeValue = event => {
          this.setState({ value: event.target.value });
        };
        // onAddItem = () => {
        //   // not allowed AND not working
        //   this.setState(state => {
        //     const list = state.list.push(state.value);
        //     return {
        //       list,
        //       value: '',
        //     };
        //   });
        
        // };

        UpdateItemsValue = () =>{
            console.log("I am here");
            this.setState(state=>{
                const list = state.list.map((list,i )=>{
                 console.log(list);
                    if(i === 1){
                        return   list = list + 1;
                    }else{
                        return list;
                    }
                });

                return{
                    list,
                };
            })
        }

        onAddItem = () => {
            this.setState(state => {
            //   const list = state.list.concat(state.value);
              const list = [...state.list,state.value];
              return {
                list,
                value: '',
              };
            });
          };

        render() {
          return (
            <div>
              <ul>
                {this.state.list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <input type="text"  value={this.state.value}  onChange={this.onChangeValue} />
              <button  type="button"  onClick={this.onAddItem} disabled={!this.state.value} > Add </button>
              <br></br><br></br>
              <input type="text" value={this.state.value}  onChange={this.onChangeValue}  />
              <button
                type="button"
                onClick={this.UpdateItemsValue}
                
              >
                Update
              </button>
            </div>
          );
        }
      }
 
export default Testcase;