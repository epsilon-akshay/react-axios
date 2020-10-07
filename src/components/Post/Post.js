import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={() => props.clickHandler(props.post.id)}>
        <h1>{props.post.title}</h1>
        <div className="Info">
            <div className="Author">{props.post.body}</div>
        </div>
    </article>
);

export default post;
