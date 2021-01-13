import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import ManagedHomePage from './home/ManagedHomePage';
import Header from './common/Header';
import AboutPage from './about/AboutPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Header loading={this.props.loading} username={this.props.username} />
                    <Route exact path="/" component={ManagedHomePage}/>
                    <Route path="/about" component={AboutPage}/>
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        loading: state.ajaxCallsInProgress > 0,
        username: state.username
    };
}

export default connect(mapStateToProps)(App);
