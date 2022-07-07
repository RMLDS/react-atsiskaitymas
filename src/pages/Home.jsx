import { useState, useEffect } from 'react';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5150/api/blogs/')
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
            });
    }, []);

    return (
        <div>
            <p>Blogs</p>
            <br />
            {
                data.length !== 0 ? data.map((blog, i) => {
                    return <div key={i} className='blogEntry'><p>{blog.title}</p><p>{blog.description}</p><br /></div>
                }) : <p>Loading...</p>
            }
        </div>
    );
}

export default Home;