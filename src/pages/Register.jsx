import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const registration = (e) => {
        e.preventDefault();

        const registrationData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const passwordRepeat = e.target.password_repeat.value;

        if (registrationData.password !== passwordRepeat) return alert('Passwords must match!');

        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationData)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.lastID) {
                    alert('Registration successfull!');
                    navigate('/login');
                } else {
                    alert('Wrong data entered!');
                }
            }
            );
    };

    return (
        <div>
            <p>Register</p>
            <form method="POST" onSubmit={registration}>
                <input type="text" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="password_repeat" placeholder="Password repeat" required />
                <input type="submit" value="Register new user" />
            </form>
        </div>
    );
}

export default Register;

/*
    Form for alternative backend registration:
    <form action="http://localhost:5150/api/user" method="POST">
        <input type="text" name="email" placeholder="Email" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <input type="password" name="password_repeat" placeholder="Password repeat" required/>
        <input type="submit" value="Register new user"/>
    </form>
*/