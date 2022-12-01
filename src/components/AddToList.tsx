import React, { useState } from 'react';
import { IEmployee } from '../App';

interface IAddToListProps {
    employees: IEmployee[] // cos we need access to the state created in App.tsx
    setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>
}
// What is the type of setEmployees? Just hover over it and it will tell the type

const AddToList = ({ setEmployees }: IAddToListProps): JSX.Element => {
    const [input, setInput] = useState({
        name: '',
        position: '',
        year: '',
        img: '',
        note: ''
    });

    // to see the type of the event, hover the cursor on top of onchange or handleChange
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleClick = (): void => {
        if (
            !input.name || // if this field is empty
            !input.position ||
            !input.img ||
            !input.year
        ) { return;}

        setEmployees(old => [...old, { name: input.name, position: input.position, year: input.year, url: input.img, note: input.note }]);

        setInput({
            name: '',
            position: '',
            year: '',
            img: '',
            note: ''
        });
    };

    return (
        <div className='AddToList'>

            <input type="text" placeholder="Name" className="AddToList-input"
                value={input.name}
                name="name"
                onChange={handleChange}
            />

            <input type="text" placeholder="Position" className="AddToList-input"
                value={input.position}
                name="position"
                onChange={handleChange}
            />

            <input type="string" placeholder="Time working in the company" className="AddToList-input"
                value={input.year}
                name="year"
                onChange={handleChange}
            />

            <input type="text" placeholder="image URL" className="AddToList-input"
                value={input.img}
                name="img"
                onChange={handleChange}
            />

            <textarea placeholder="Note" className="AddToList-input"
                value={input.note}
                name="note"
                onChange={handleChange}
            />
            <button className="AddToList-button" onClick={handleClick}>Add to List</button>

        </div>

    );
};

export default AddToList;
