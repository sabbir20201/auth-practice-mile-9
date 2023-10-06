import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    

    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then(()=> console.log('user logged out successfully'))
        .catch(error =>{
            console.log(error);
        })
    }

    const links = <>
        <li><Link className="flex" to="/">Home</Link></li>
       <li> <Link to="/login">Login</Link></li>
       <li> <Link to="/Register">register</Link></li>
       <li> <Link to="/orders">Orders</Link></li>
       <li> <Link to="/chart">chart</Link></li>
      {user && <>
      
        <li> <Link to="/profile">profile</Link></li>
       <li> <Link to="/dashboard">dashboard</Link></li>
      </> 
  
       }
    
  
    </>
    return (
        <div>
           <h1> this is navbar</h1>
           <div>
           <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            {links}
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-3">
                    {links}
                    </ul>

                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                         <span>{user.email}</span>
                         <a onClick={handleLogout} className="btn btn-sm">LOG OUT</a>
                        </>
                        : <Link to="/login">
                         <button className="btn btn-sm">Login</button>
                            </Link>
                    }
                   
                   
                </div>
            </div>
           </div>
        </div>
    );
};

export default Navbar;