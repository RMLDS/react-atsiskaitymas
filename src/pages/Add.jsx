import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Add = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => { 
        if (!token) return navigate('/login');
    }, [navigate, token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            description: e.target.description.value
        }
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.err) return alert('Error! ' + res.err);
                if (res.msg) {
                    alert(res.msg);
                    navigate('/')
                };
            })
    };

    return ( 
        <div>
            <p>Add</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='Title' required/>
                <input type="text" name='description' placeholder='Description' required/>
                <input type="submit" value="Add" />
            </form>
        </div>
     );
}
 
export default Add;