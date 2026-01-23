import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const emptyUser = {
    id: Date.now(),
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' }
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  }

  const handleCreate = () => {
    setFormData(JSON.parse(JSON.stringify(emptyUser)))
    setIsCreating(true)
  }

  const handleCreateSave = () => {
    setUsers(prev => [...prev, formData])
    setIsCreating(false)
    setFormData(null)
  }

  const handleCreateCancel = () => {
    setIsCreating(false)
    setFormData(null)
  }

  const handleEdit = (user) => {
    setEditingId(user.id)
    setFormData(JSON.parse(JSON.stringify(user)))
  }

  const handleSave = () => {
    setUsers(prev =>
      prev.map(u => (u.id === editingId ? formData : u))
    )
    setEditingId(null)
    setFormData(null)
  }

  const handleCancel = () => {
    setEditingId(null)
    setFormData(null)
  }

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setFormData(null)
    }
  }

  const handleChange = (path, value) => {
    setFormData(prev => {
      const updated = { ...prev }
      const keys = path.split('.')
      let obj = updated

      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]]
      }

      obj[keys[keys.length - 1]] = value
      return updated
    })
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">USER PROFILES</h1>
        <p className="app-subtitle">Editable & manageable user directory</p>
      </header>

      <section className="user-grid">

        {users.map(user => {
          const isEditing = editingId === user.id
          const data = isEditing ? formData : user

          return (
            <div className="user-card" key={user.id}>

              {!isEditing && (
                <div className="top-actions">
                  <button className="icon-btn" onClick={() => handleEdit(user)}>✎</button>
                  <button className="icon-btn delete" onClick={() => handleDelete(user.id)}>🗑</button>
                </div>
              )}

              <div className="avatar">{data.name.charAt(0)}</div>

              {isEditing ? (
                <input value={data.name} onChange={e => handleChange('name', e.target.value)} />
              ) : (
                <h3 className="name">{data.name}</h3>
              )}

              {isEditing ? (
                <input value={data.username} onChange={e => handleChange('username', e.target.value)} />
              ) : (
                <p className="username">@{data.username}</p>
              )}

              <div className="divider"></div>

              {['email', 'phone', 'website'].map(key => (
                <div className="info-block" key={key}>
                  <span>{key.toUpperCase()}</span>
                  {isEditing ? (
                    <input value={data[key]} onChange={e => handleChange(key, e.target.value)} />
                  ) : (
                    <p>{data[key]}</p>
                  )}
                </div>
              ))}

              <div className="info-block">
                <span>ADDRESS</span>
                {isEditing ? (
                  <>
                    <input value={data.address.street} onChange={e => handleChange('address.street', e.target.value)} />
                    <input value={data.address.suite} onChange={e => handleChange('address.suite', e.target.value)} />
                    <input value={data.address.city} onChange={e => handleChange('address.city', e.target.value)} />
                    <input value={data.address.zipcode} onChange={e => handleChange('address.zipcode', e.target.value)} />
                  </>
                ) : (
                  <p>
                    {data.address.street}, {data.address.suite}<br />
                    {data.address.city} – {data.address.zipcode}
                  </p>
                )}
              </div>

              <div className="geo">
                {isEditing ? (
                  <>
                    <input value={data.address.geo.lat} onChange={e => handleChange('address.geo.lat', e.target.value)} />
                    <input value={data.address.geo.lng} onChange={e => handleChange('address.geo.lng', e.target.value)} />
                  </>
                ) : (
                  <>LAT {data.address.geo.lat} | LNG {data.address.geo.lng}</>
                )}
              </div>

              <div className="company-box">
                {isEditing ? (
                  <>
                    <input value={data.company.name} onChange={e => handleChange('company.name', e.target.value)} />
                    <input value={data.company.catchPhrase} onChange={e => handleChange('company.catchPhrase', e.target.value)} />
                    <input value={data.company.bs} onChange={e => handleChange('company.bs', e.target.value)} />
                  </>
                ) : (
                  <>
                    <h4>{data.company.name}</h4>
                    <p className="tagline">“{data.company.catchPhrase}”</p>
                    <p className="bs">{data.company.bs}</p>
                  </>
                )}
              </div>

              {isEditing && (
                <div className="actions">
                  <button onClick={handleSave}>Save</button>
                  <button className="cancel" onClick={handleCancel}>Cancel</button>
                </div>
              )}
            </div>
          )
        })}

        <div className="user-card add-card" onClick={handleCreate}>
          <div className="add-content">
            <span className="plus">＋</span>
            <p>ADD USER</p>
          </div>
        </div>

      </section>

      {isCreating && formData && (
        <div className="create-overlay">
          <div className="user-card create-card">

            <h3 className="name">New User</h3>

            {['name', 'username', 'email', 'phone', 'website'].map(f => (
              <input
                key={f}
                placeholder={f}
                value={formData[f]}
                onChange={e => handleChange(f, e.target.value)}
              />
            ))}

            <input placeholder="Street" value={formData.address.street}
              onChange={e => handleChange('address.street', e.target.value)} />
            <input placeholder="Suite" value={formData.address.suite}
              onChange={e => handleChange('address.suite', e.target.value)} />
            <input placeholder="City" value={formData.address.city}
              onChange={e => handleChange('address.city', e.target.value)} />
            <input placeholder="Zipcode" value={formData.address.zipcode}
              onChange={e => handleChange('address.zipcode', e.target.value)} />

            <input placeholder="Latitude" value={formData.address.geo.lat}
              onChange={e => handleChange('address.geo.lat', e.target.value)} />
            <input placeholder="Longitude" value={formData.address.geo.lng}
              onChange={e => handleChange('address.geo.lng', e.target.value)} />

            <input placeholder="Company Name" value={formData.company.name}
              onChange={e => handleChange('company.name', e.target.value)} />
            <input placeholder="Catch Phrase" value={formData.company.catchPhrase}
              onChange={e => handleChange('company.catchPhrase', e.target.value)} />
            <input placeholder="Business" value={formData.company.bs}
              onChange={e => handleChange('company.bs', e.target.value)} />

            <div className="actions">
              <button onClick={handleCreateSave}>Create</button>
              <button className="cancel" onClick={handleCreateCancel}>Cancel</button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default App
