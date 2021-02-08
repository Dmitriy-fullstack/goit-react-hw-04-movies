import React from 'react'
import { NavLink } from 'react-router-dom';
import Style from './button.module.css';

function Buttons() {
    return (
        <div className ={Style.header}>
            <nav>
                <ul className ={Style.button_list}>
                    <li className ={Style.button_list__item}><NavLink className ={Style.button_list__link} activeClassName = {Style.button_list__link_active} exact to="/">HomePage</NavLink></li>
                    <li className ={Style.button_list__item}><NavLink className ={Style.button_list__link} activeClassName = {Style.button_list__link_active} to="/movies">MoviesPage</NavLink></li>
                </ul>
            </nav> 
        </div>
    )
}



export default Buttons

