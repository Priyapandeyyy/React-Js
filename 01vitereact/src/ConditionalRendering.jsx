// Conditional rendering => allows you to control what gets rendered 
//                          in your application based on certain conditions.
//                          (show, hide, or change components)

import PropTypes from 'prop-types';

function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">
                           Welcome {props.username}
                           </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please login to continue
                        </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);

}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

    // WE CAN WRITE IT AS THIS TOO
    
     /* return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : 
                              <h2 className="login-prompt">Please login to continue</h2>)  */

    // We can write else or we cannot write else it will work both ways


export default UserGreeting




