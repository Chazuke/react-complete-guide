import personCssClasses from './Person.module.css';

const Person = (props) => {
    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('TEST ERROR');
    }

    return (
        <div className={personCssClasses.Person}>
            <p onClick={props.click}>Hello, my name is {props.name}. I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default Person;