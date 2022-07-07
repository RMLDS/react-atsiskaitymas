const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        fetch('http://localhost:5150/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(loginData),
            xhrFields: {withCredentials : true}
            }).then(function(response) {
                console.log(response);
                return response;
            })
    };

    return ( 
        <div>
        <p>Login</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name='email' placeholder='email'/>
                <input type="password" name='password' placeholder='password'/>
                <input type="submit" value="Login"/>
            </form>

        </div>
     );
}
 
export default Login;