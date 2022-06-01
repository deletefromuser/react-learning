import React, { useState, useEffect } from 'react';

// https://www.robinwieruch.de/react-hooks-fetch-data/

function App() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [url, setUrl] = useState(
        'https://hn.algolia.com/api/v1/search_by_date?tags=story&query=redux',
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetch(url).then(res => res.json());

                setData(result);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return (
        <div className='d-flex flex-column m-2'>
            <form className='d-flex'
                onSubmit={(event) => {
                    setUrl(`https://hn.algolia.com/api/v1/search_by_date?tags=story&query=${query}`)
                    event.preventDefault();
                }}
            >
                <input type="text" className='form-control w-25' value={query} onChange={event => setQuery(event.target.value)} />
                <button type="submit" className='btn btn-info ms-2' >Search</button>
            </form>

            {
                isError && <div>Something went wrong ...</div>}
            {
                isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    <ul>
                        {data.hits.map(item => (
                            <li key={item.objectID} className='m-2'>
                                <a href={item.url} > {item.title} </a>
                            </li>
                        ))
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default App;