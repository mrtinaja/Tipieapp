import '../styles/employeecard.css'

export const EmployeeCard = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <p>{props.age}</p>
            <p>{props.sector}</p>
        </div>
    )
}
