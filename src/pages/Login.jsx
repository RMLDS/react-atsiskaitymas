import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(res => {
                if (res.err) return alert('Error! ' + res.err);
                if (res.token) {
                    localStorage.setItem('token', res.token)
                    navigate('/');
                };
            }
            )
    };

    return (
        <div>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name='email' placeholder='email' required/>
                <input type="password" name='password' placeholder='password' required/>
                <input type="submit" value="Login" />
            </form>

        </div>
    );
}

export default Login;


/*
    Alternative backend login code:
    fetch('http://localhost:5150/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(loginData)
        })
        .then(function(response) {
            // console.log(response);
            return response;
        });
*/