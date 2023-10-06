import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const { signInUser , signInGooglePopup} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset()
            navigate('/')
        })
        .catch(error =>{
            console.log(error);
        })

    }
const handleLoginSignIn = () =>{
    signInGooglePopup()
    .then(result => {
        console.log(result.user);
    })
    .catch(error =>{
        console.log(error);
    })
}
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center">Login Now 2</h1>
                <div>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="email" className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value='login' className='btn btn-secondary' />
                        </div>

                    </form>
                    <p>
                        <button onClick={handleLoginSignIn} className="btn btn-ghost">google login</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;