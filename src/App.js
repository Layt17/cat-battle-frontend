import './App.css';
import React, { useEffect, useState } from 'react';
import { CatsApi } from './api/cats.api';
import Cat from './componets/cat/cat';

function App() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        async function fetchAll() {
            const resp = await CatsApi.getAll();
            setCats(resp);
        }

        fetchAll();

    }, [])

    return (
        <div className="App">
            <ul>
                {
                    cats.map(cat => {
                        return <Cat key={cat.id} data={cat}/>;
                    })
                }
            </ul>
        </div>
    );
}

export default App;
