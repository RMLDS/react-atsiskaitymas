import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [data, setData] = useState(null);

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
            <p>Skills</p>
            <br />
            <div className='blogs'>
                {
                    data === null ? <p>Loading...</p> : (data.length !== 0 ? data.map((blog, i) => {
                        return <div key={i} className='blogEntry'><p className='title' >{blog.title}</p><p>{blog.description}</p></div>
                    }) : <p>All empty yo!</p>)
                }
            </div>
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