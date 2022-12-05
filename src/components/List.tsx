import React from 'react';
import { IEmployee } from '../App';

// Because I am exporting the interface, from App.tsx
// I don't need to use the interface IProps below

// interface IEmployee {
//     name: string
//     url: string
//     position: string
//     year: string | number
//     note?: string
// }

const List = ({ employees }: { employees: IEmployee[] }):JSX.Element => {
    // Always define what you want to return, in this case an array of JSX elements
    const renderList = (): JSX.Element[] => {
        return employees.map((employee, index) => {
            return (
                <li key={index}className="List">
                    <div className="List-header">
                        <img className="img" src={employee.url} alt='employee_photo' />
                        <h2>{employee.name}</h2>
                        <h3>{employee.position}</h3>
                    </div>
                    <h4>{employee.year} working in the company</h4>
                    <h4 className="note">{employee.note}</h4>
                </li>
            );
        });
    };

    return (

        <ul>
            {renderList()}
        </ul>

    );
};
export default List;
