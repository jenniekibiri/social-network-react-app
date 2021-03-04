import React, { Component } from 'react';
import { singlePost} from './apiPosts';
import DefaultPost from '../images/e56b573d0cd16d7b03083d8fbc582ef219c274a7.jpeg';
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/auth';

class SinglePost extends Component {
    state = {
        post: '',
        redirectToHome: false,
        redirectToSignin: false,
      
    };


    componentDidMount = () => {
        const postId = this.props.match.params.postId;
        singlePost(postId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({
                    post: data,
            
                });
            }
        });
    };


 

   

    renderPost = post => {
        const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
        const posterName = post.postedBy ? post.postedBy.name : ' Unknown';
        const base64String = btoa(
            String.fromCharCode(...new Uint8Array(post.photo.data.data))
          );

        return (
            <div className="card-body">
                <img
                    className="img-thunbnail mb-3"
                    alt={post.title}
                        onError={(i) => (i.target.src = `${DefaultPost}`)}
                        src={`data:image/png;base64,${base64String}`}
                        style={{
                            height: '300px',
                            width: '100%',
                            objectFit: 'cover'
                        }}
                      />
              


                <p className="card-text">{post.body}</p>
                <br />
                <p className="font-italic mark">
                    Posted by <Link to={`${posterId}`}>{posterName} </Link>
                    on {new Date(post.created).toDateString()}
                </p>
                <div className="d-inline-block">
                    <Link to={`/`} className="btn btn-raised btn-primary btn-sm mr-5">
                        Back to posts
                    </Link>


                </div>
            </div>
        );
    };

    render() {
        const { post, redirectToHome, redirectToSignin, comments } = this.state;

        if (redirectToHome) {
            return <Redirect to={`/`} />;
        } else if (redirectToSignin) {
            return <Redirect to={`/signin`} />;
        }

        return (
            <div className="container">
                <h4 className="display-4 text-dark mt-5 mb-5">{post.title}</h4>

                {!post ? (
                    <div className="jumbotron text-center">
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    this.renderPost(post)
                )}

               
            </div>
        );
    }
}

export default SinglePost;
