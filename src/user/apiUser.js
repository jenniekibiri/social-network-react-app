export const  list = () => {
  return  fetch(`${process.env.REACT_APP_API_URL}/users`, {
        Method: "GET",
      })
}