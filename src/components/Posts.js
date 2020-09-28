import React, { Component } from 'react'
import {allPosts} from './apis/postApi'
export class Posts extends Component {
  constructor(){
    super();
    this.state={
      posts:[]
    }
  }
  componentDidMount(){
  allPosts()
    .then(response=>{
  
        return response.json();
    }).then(data=>{
      this.setState({
        posts:data
      })
    }).catch(err=>{
      console.log(err)
    })

  }
  showPosts(posts){
    return(
      <div>
 <table className="table m-3  ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Post</th>
   <th scope="col">Posted By</th>
      <th scope="col">Date created</th>
      <th scope="col">Status</th>
       <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
   { posts.map((post,i)=>{
   const posterName = post.postedBy ? post.postedBy.name : " Unknown";
return(
     <tr key={i}>
       
       <td>{post.title}</td>
       <td>{posterName}</td>

      <td>{new Date(post.created).toDateString()}</td>
                 
       <td>pending</td>
       <td>  <button className="btn  " type="button" >
                  <i type="button" className="fas btn fa-trash fa-sm text-danger"></i>
                </button>   </td>
     </tr>
)

    })}
      </tbody>
      </table>
        
    
      </div>
    )
  }
  render() {

 const { posts } = this.state;
    return (

     <div>
       {this.showPosts(posts)}

     </div>
    )
  }
}

export default Posts
