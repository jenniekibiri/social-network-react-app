export const allPosts = (userId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/posts`, {
    method: "Get",
  });
};
export const create = (userId, token, post) => {

  return fetch(`${process.env.REACT_APP_API_URL}/posts/new/${userId}`, {
    
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const singlePost = (postId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postsBy = (userId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/posts/by/${userId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
