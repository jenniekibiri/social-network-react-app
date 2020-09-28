import React, { Component } from 'react'

export class Roles extends Component {
    render() {
        return (
            <div>
            <div className="row m-3">

            <div className="col-md-4 ">

        <h5>  Admin Roles & Permissions</h5>
            </div>
            <div className="col-md-3 offset-md-5 ">
                <button type="button" class="btn btn-success">
                       <i type="btn" className="fas btn fa-plus fa-sm text-white"></i>
                       add role
                </button>

</div>
            </div>

            <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Admin Role</th>
      <th scope="col">permissions</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Admin</td>
      <td>Otto</td>
      <td> </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><i type="btn" className="fas btn fa-edit fa-sm text-success" type="button"></i>  <i type="button" className="fas btn fa-trash fa-sm text-danger"></i></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td><i type="btn" className="fas btn fa-edit fa-sm text-success" type="button"></i>  <i type="button" className="fas btn fa-trash fa-sm text-danger"></i></td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }
}

export default Roles
