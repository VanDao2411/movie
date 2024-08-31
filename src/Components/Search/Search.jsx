// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Search() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q').toLowerCase();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('https://apii.online/apii/danh-sach/phim-moi-cap-nhat?page=1');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const results = data.filter(item => item.title.toLowerCase().includes(query));
            setFilteredData(results);
        }
    }, [data, query]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <div>
            <h1>Kết quả tìm kiếm cho: {query}</h1>
            <div>
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>  
                    ))
                ) : (
                    <p>Không tìm thấy kết quả</p>
                )}
            </div>
        </div>

    )
}

export default Search