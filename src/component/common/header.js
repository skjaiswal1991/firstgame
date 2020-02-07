import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./../home.css"

const routes =  [
                    {
                        title:'Home',
                        link: '/'
                    },
                    {
                        title:' Image Game',
                        link: '/image'
                    },
                    {
                        title:'Sankes Game',
                        link: '/snakes'
                    },
                    {
                        title:'Test Cases',
                        link: '/testcase'
                    }
                ] 


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { menu:routes  }
    }
    render() { 
        const { menu } =this.state;
        return ( 
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <Link className="navbar-brand" to={'/'}>React Creative</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                {menu.map((m,i)=>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to={m.link}>{m.title}</Link>
                                        </li>
                                )}
                                
                            </ul>  
                        </div>
                    </nav>
                </header>
            </React.Fragment>
         );
    }
}
 
export default Header;