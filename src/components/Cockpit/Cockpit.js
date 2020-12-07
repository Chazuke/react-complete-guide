import cockpitCssClasses from './Cockpit.module.css';
import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const context = useContext(AuthContext);

    console.log('[Cockpit.js] isAuthenticated: ' + context.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // const timer = setTimeout(() => {
        //     alert('Saved Cloud Data');
        // }, 1000);

        toggleBtnRef.current.click();

        return () => {
            //clearTimeout(timer);
            console.log('[Cockpit.js] cleanup');
        }
    }, []);

    // useEffect(() => {
    //     console.log('[Cockpit.js] 2nd useEffect');

    //     return () => {
    //         console.log('[Cockpit.js] 2nd cleanup');
    //     }
    // });

    let pClasses = [];
    if (props.personsLength <= 2) {
        pClasses.push(cockpitCssClasses.red);
    }
    if (props.personsLength <= 1) {
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
            <button
                className={btnClass}
                onClick={props.btnClicked}
                ref={toggleBtnRef}
            >Toggle Persons</button>
            <button onClick={context.login}>Login</button>
        </div >
    );
};

export default React.memo(Cockpit);