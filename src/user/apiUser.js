export const  list = () => {
  return  fetch(`${process.env.REACT_APP_API_URL}/users`, {
        Method: "GET",
      })
}
export const removeAccount = (userId, token) => {

console.log(userId)
  return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type":"application/json",
    Authorization:`Bearer ${token}`
    }
  }).then(response => {
    return response.json()  
    
  }).catch(err => console.log(err))

}
    
