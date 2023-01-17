import React, { useState } from 'react';
import axios from 'axios';

interface Props {
    onSubmit: (email: string, password: string) => void;
}

const Login: React.FC<Props> = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [succesMsg, setSuccesMsg] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post('http://localhost:5001/login', { email, password }).then(response => {
            console.log(response.status)
            console.log(response.data)
            console.log(response.statusText)
            console.log(response.statusText)
            if(response.status === 200){
                setSuccesMsg("Logged in succesfully")
                setError("")
            }
            // else if(response.data){
            //     setSuccesMsg("Invalid credentials")
            // }
        //     if(response.data.status === 200){
        //         setSuccesMsg("You have been logged in successfully")
        //         props.onSubmit(email, password);
        //     }else if(response.data.error === 'Both email and password required'){
        //         setError("Both email and password are required")
        //     }else if(response.data.error === 'Invalid Credentials'){
        //         setError("Invalid Credentials")
        //     }
        }).catch(error => {
            setError("Login Failed")
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <br />
            {error && <p>{error}</p>}
            <button type="submit">Login</button>

<p>{succesMsg}</p>
        </form>
    );
    
};

export default Login;
