import React, {Component} from 'react';
import Header from '../common/header';

class Frontend extends Component{

        constructor(props){
            super(props);
            this.state = {};
        }
        render(){
            return(
                    <React.Fragment>
                        <Header />
                        <div role="main">
                            {this.props.children}
                        </div>
                    </React.Fragment>
            )
        }
}

export  default Frontend; 