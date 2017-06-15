import React ,{Component} from 'react';
import {Link} from 'react-router';
class HomePage extends Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Welcome</h1>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        )
    }
}

export default HomePage;