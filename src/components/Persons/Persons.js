import Person from './Person/Person';
import { PureComponent } from 'react';

class Persons extends PureComponent {
    // Being Deprecated
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerviedStateFromProps');
    //     return state;
    // }
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }
    // componentWillUpdate() {
    // }

    // For checking all props, use PureComponent
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return (nextProps.persons !== this.props.persons);
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] "Rendering..."');
        return (
            this.props.persons.map((person, index) => {
                return (
                    <Person
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.props.changed(person.id, event)}
                        click={() => this.props.clicked(person.id)}
                        key={person.id}
                    />
                );
            })
        );
    }

};

export default Persons;