import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const userData = {
    name,
    gender,
    email,
    password
  }

    localStorage.setItem('userData', JSON.stringify(userData))

    console.log(userData)
  }

  return (
    <>
      <div className="app-container">
        <h1>An Input handling project using Multiple States.</h1>

        <form onSubmit={handleSubmit}>
          
          <h3>Sign Up</h3>

          <h4>Name</h4>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h4>Gender</h4>
          <div className="gender-group">
            <div className="radio-item">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="male">Male</label>
            </div>

            <div className="radio-item">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>
            </div>

            <div className="radio-item">
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={gender === 'other'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>

          <h4>Email</h4>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h4>Password</h4>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default App
