import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import Posts from './Posts/Posts';
import './Blog.css';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {

        return (
            <div>
                <nav className="NavigationWrapper">
                    <ul className="Navigation">
                        <li> <NavLink exact to="/">Home</NavLink></li>
                        <li ><NavLink to={{ pathname: "/new-post" }}>Post</NavLink></li>
                    </ul>
                </nav>
                <Route path="/" exact='true' component={Posts} />
                <Route path="/new-post" exact='true' component={NewPost} />
            </div>
        );
    }
}

export default Blog;
