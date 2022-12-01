import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IEmployee {
  name: string
  url: string
  position: string
  year: string | number
  note?: string
}

function App (): JSX.Element {
    const [employees, setEmployees] = useState<IEmployee[]>([
        {
            name: 'Lucas Vargas',
            url: './photos/lucaspic.jpg',
            position: 'FE',
            // https://www.3tcsoftware.com/wp-content/uploads/2018/11/bg-lg-david-todd.jpg
            // https://img.swapcard.com/?u=https%3A%2F%2Fcdn-api.swapcard.com%2Fpublic%2Fimages%2F71eaa2f576bd4049934f41731a537486.png&q=0.8&m=crop&w=240&h=240
            year: '3 weeks',
            note: 'The juniorest FE dev in the company'
        }
    ]);

    return (
        <div className="App">

            <h1>Annual Turkey & Stuffing Lunch Attendence List</h1>
            <List employees={employees} />
            <AddToList employees={employees} setEmployees={setEmployees} />

        </div>
    );
}

export default App;
