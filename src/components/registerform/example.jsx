import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Example extends Component {
    state={
        user:''
    }
    componentDidMount() {
        this.setState({user:"hi"});
        console.log("h",this.state.user)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

Example.propTypes = {};

export default Example;