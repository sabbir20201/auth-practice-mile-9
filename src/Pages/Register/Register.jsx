import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";




const Register = () => {
        const {createUser} = useContext(AuthContext)
        // console.log(authInfo);
        const Register = e =>{
            e.preventDefault()
            console.log(e);
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email, password);
          createUser(email, password)
          .then(result => {
            console.log(result.user);
          })
          .catch(error => console.log(error))
        
        }

    return (
        <div>
        <div>
            <h1 className="text-3xl font-bold text-center">Register Now 2</h1>
            <div>
            <form onSubmit={Register}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" name='name' placeholder="First Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span> 
                    </label>
                    <input type='password' name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="terms" />
                    <label htmlFor="terms">accecpt out terms and condition</label>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value='register' className='btn btn-secondary' />
                </div>
           
            </form>
            </div>
        </div>
        </div>
    );
};

export default Register;