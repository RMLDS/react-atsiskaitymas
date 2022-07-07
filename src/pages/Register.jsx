const Register = () => {
    return ( 
        <div>
            <p>Register</p>
            <form action="http://localhost:5150/api/user" method="POST">
                <input type="text" name="email" placeholder="Email" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <input type="password" name="password_repeat" placeholder="Password repeat" required/>
                <input type="submit" value="Register new user"/>
            </form>
        </div>
     );
}
 
export default Register;