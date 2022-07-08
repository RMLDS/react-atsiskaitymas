import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import verifyToken from '../middleware/verifyToken.js';

const Home = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!token) return navigate('/login');
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.err) return navigate('/login');
                setData(res);
            })
    }, [navigate, token]);

    return (
        <div>
            <p>Blogs</p>
            <br />
            {
                data.length !== 0 ? data.map((blog, i) => {
                    return <div key={i} className='blogEntry'><p>{blog.title}</p><p>{blog.description}</p><br /></div>
                }) : data.length === 0 ? <p>All empty yo!</p> : <p>Loading...</p>
            }
        </div>
    );
}

export default Home;

/* 
    Alternative backend data:
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5150/api/blogs/')
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
            });
    }, []);
*/