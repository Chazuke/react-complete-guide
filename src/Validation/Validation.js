
const Validation = (props) => {
    const tooShortMsg = "Text too short";
    const tooLongMsg = "Text long enough";
    const cutoffSize = 5;

    let displayMessage = tooShortMsg;

    if (props.textLength >= cutoffSize) {
        displayMessage = tooLongMsg;
    }

    return (
        <p>{displayMessage}</p>
    );
};

export default Validation;