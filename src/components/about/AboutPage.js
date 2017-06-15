import React ,{Component} from 'react';
import {Link} from 'react-router';
class AboutPage extends Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>About</h1>
                <Link to="/" className="btn btn-primary btn-lg">Home Page</Link>
            </div>
        )
    }
}

export default AboutPage;