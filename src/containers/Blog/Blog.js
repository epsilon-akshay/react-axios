import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
    }
    clickHandler = (id) => {
        this.setState({ selectedPostId: id })
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response) => {
                console.log(response.data)
                this.setState({ posts: response.data })
            }
        )
    }
    render() {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} post={post} clickHandler={this.clickHandler} />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
