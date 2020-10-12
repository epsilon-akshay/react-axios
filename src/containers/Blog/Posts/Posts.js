import React from 'react'
import Post from '../../../components/Post/Post';
import axios from 'axios'

class Posts extends React.Component {
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
			<section className="Posts">
				{posts}
			</section>
		)
	}
}

export default Posts
