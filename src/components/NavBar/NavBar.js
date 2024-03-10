import './NavBar.css'
import { Component, useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../../utils/contexts/context';
import { strings } from '../../i18n';

export default function NavBar() {

    const [state, setState] = useState({
        clicked: false,
    });

    const handelMenu = () => {
        setState({
            clicked: !state.clicked
        })
    }

    const auth = useContext(userContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <nav className='navbar' id="navbar">

            <div className='logo'>
                {strings("Trippy")}
            </div>

            <div className='menu-icons'
                onClick={() => handelMenu()}
            >
                <i class={state.clicked ? "fas fa-times" : "fas fa-bars"} />
            </div>

            <ul className={state.clicked ? "nav-links active" : "nav-links"}>

                <li className='link'>

                    <Link to={'/'}>
                        {strings("Home")}
                        <i class="fa-solid fa-house-user" aria-hidden="true"></i>
                    </Link>
                </li>

                <li className='link'>
                    <Link to={'/about'}>
                        {strings("About")}
                        <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
                    </Link>
                </li>

                <li className='link'>
                    <Link to={'/service'}>
                        {strings("Services")}
                        <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
                    </Link>
                </li>

                <li className='link'>
                    <Link to={'/contact'}>
                        {strings("Contact")}
                        <i class="fa-solid fa-address-book" aria-hidden="true"></i>
                    </Link>
                </li>

                <li className='link'>
                    <Link to={'/language'}>
                        {strings("Change Language")}
                        <i class="fa-solid fa-address-book" aria-hidden="true"></i>
                    </Link>
                </li>

               

                {
                    !auth.user ?
                        (

                            <li className='link'>
                                <Link to={"/signup"} >
                                    {strings("Signup")}
                                </Link>
                            </li>

                        ) : (
                            <li className='link'>
                                <Link to={"/signup"} onClick={logoutHandler} >
                                    {strings("Logout")}
                                </Link>
                            </li>

                        )
                }
            </ul>
        </nav>


    )
}

