import Person from './Person/Person';

const Persons = (props) => {
    console.log('[Persons.js] "Rendering..."');
    return (
        props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age={person.age}
                    changed={(event) => props.changed(person.id, event)}
                    click={() => props.clicked(person.id)}
                    key={person.id} />
            );
        })
    );
};

export default Persons;