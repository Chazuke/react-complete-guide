import { useState } from 'react';

const ErrorBoundary = (props) => {
    let [hasError, setHasError] = useState(false);
    let [errorMsg, setErrorMsg] = useState('');

    const componentDidCatch = (error, info) => {
        setHasError(true);
        setErrorMsg(error);
    }

    let renderJSX = props.children;
    // 
    if (hasError) {
        renderJSX = (<h1>Something Went Wrong!</h1>);
    }

    return (
        renderJSX
    );
}

export default ErrorBoundary;