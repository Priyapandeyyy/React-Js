import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="Student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student



// ✨ Props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

// ✨ proTypes = a mechanism that ensures that the passed value 
//            is of the correct datatype.
//            age: PropTypes.number

// ✨ defaultProps = default values for props in case they are not
//                passed from the parent component
//                name: "Guest"

// ✨ In this App is the parent and Student is the child

// import Student from "./Student.jsx"

// function App() {
//     return(
//         <>
//         <Student name="Priya Pandey" age="20" gender="Female" isStudent={true}/>
//         <Student name="Barbie" age="25" gender="Female" isStudent={false}/>
//         <Student name="Einstein" age="80" gender="Male" isStudent={false}/>
//         <Student name="Arpit Bala" age="28" gender="Male" isStudent={true}/>
//         </>
//     );
// }

// export default App