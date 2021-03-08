import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';


const handleLogout = props => {
  logout().then(() => {
    props.setUser(null)
  })
}

export default function Navbar(props) {
  return (
    <div>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      {/* If user is not logged in signup and login */}
      {props.user ? (
        <>
          <li>
            <Link to={`/profile/${props.user._id}`}>Profile</Link>
          </li>
          <li>
            <Link to='/' onClick={() => handleLogout(props)} >Logout</Link>
          </li>
        </>
      ) : (
          <>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
    </ul>
  </div>
  )
}
