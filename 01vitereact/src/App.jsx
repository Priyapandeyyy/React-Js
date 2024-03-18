import Student from "./Student.jsx"

function App() {
    return(
        <>
        <Student name="Priya Pandey" age="20" gender="Female" isStudent={true}/>
        <Student name="Barbie" age="25" gender="Female" isStudent={false}/>
        <Student name="Einstein" age="80" gender="Male" isStudent={false}/>
        <Student name="Arpit Bala" age="28" gender="Male" isStudent={true}/>
        <Student/>
        </>
    );
}

export default App

