/**
 * Created by dsstevenson on 7/19/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';
import logo from '../../assets/images/logo.png';

const Header = ({ loading, username }) => {
    return (
        <div>
            <div style={{ paddingBottom: "10px" }}>
                <img src={logo} alt="logo" className="logo" style={{ height: "75px" }} />
                <span className="greeting">Welcome {username}!</span>
            </div>
            <nav className="navbar navbar-inverse" style={{ padding: "7px 7px 7px 27px" }}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="navbar-brand" style={{ color: "white", paddingTop: "35px" }}>Managed Vendor Settings</div>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav topMenu">
                        <li>
                            <NavLink to="/" activeClassName="active" exact replace>
                                <div className="iconColor">
                                    <i className="glyphicon glyphicon-home"></i>
                                    <div>
                                        Home
                      </div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active" exact replace >
                                <div className="iconColor">
                                    <i className="glyphicon glyphicon-info-sign"></i>
                                    <div>
                                        About
                      </div>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
};

export default Header;
