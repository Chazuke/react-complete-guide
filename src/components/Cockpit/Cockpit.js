import cockpitCssClasses from './Cockpit.module.css';

const Cockpit = (props) => {

    let pClasses = [];
    if (props.persons.length <= 2) {
        pClasses.push(cockpitCssClasses.red);
    }
    if (props.persons.length <= 1) {
        pClasses.push(cockpitCssClasses.bold);
    }

    let btnClass = '';
    if (props.showPerson) {
        btnClass = cockpitCssClasses.Red;
    }

    return (
        <div className={cockpitCssClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={pClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.btnClicked}>Toggle Persons</button>
        </div >
    );
};

export default Cockpit;