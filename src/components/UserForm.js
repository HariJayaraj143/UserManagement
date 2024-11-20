import React, {useState} from 'react'
import {addUser, updateUser} from '../services/api'

const UserForm = ({user, onSave, onCancel}) => {
  const [formData, setFormData] = useState(
    user || {firstName: '', lastName: '', email: '', department: ''},
  )

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const apiCall = user ? updateUser(user.id, formData) : addUser(formData)

    apiCall.then(() => onSave()).catch(() => alert('Failed to save user.'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
      />
      <input
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}

export default UserForm
