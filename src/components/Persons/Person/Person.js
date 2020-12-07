import personCssClasses from './Person.module.css';
import WithClass from '../../../hoc/WithClass';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/AuthContext';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log('isAuthenticated: ' + this.context.authenticated);
    }

    render() {
        return (
            <React.Fragment >
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login</p>}
                <p onClick={this.props.click}>Hello, my name is {this.props.name}. I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    //ref={(inputElement) => { this.inputElement = inputElement }}
                    ref={this.inputElementRef}
                />
            </React.Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithClass(Person, personCssClasses.Person);