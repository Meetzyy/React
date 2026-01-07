import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('userData', JSON.stringify(formData))
    console.log(formData)
  }

  return (
    <div className="app-container">
      <h1>An Input Handling Project using Single State.</h1>

      <form onSubmit={handleSubmit}>

        <h3>Sign Up</h3>

        <h4>Name</h4>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <h4>Gender</h4>
        <div className="gender-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        <h4>Email</h4>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <h4>Password</h4>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default App
