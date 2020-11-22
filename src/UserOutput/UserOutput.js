
const UserOutput = (props) => {
    return (
        <div style={props.style}>
            <p>Username: {props.username}</p>
            <p>any paragraph texts of your choice</p>
        </div>
    );
};

export default UserOutput;