import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNav = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>QuoteIt</div>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to='/quotes' activeClassName={classes.active}>All Quotes</NavLink></li>
                    <li><NavLink to='/newQuote' activeClassName={classes.active}>Add Quote</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNav;
