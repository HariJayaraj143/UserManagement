import React, {useEffect, useState} from 'react'
import {fetchUsers} from '../services/api'
import ErrorAlert from './ErrorAlert'
import Pagination from './Pagination'

const UserList = ({onEdit, onAdd}) => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
      .then(response => setUsers(response.data))
      .catch(() => setError('Failed to fetch users.'))
  }, [])

  const handleCloseError = () => {
    setError(null)
  }

  return (
    <div>
      <ErrorAlert message={error} onClose={handleCloseError} />
      <button onClick={onAdd}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default UserList
