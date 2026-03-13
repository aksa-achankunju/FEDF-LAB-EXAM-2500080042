import { useState } from "react"

function Registration({ addUser }) {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    gender:"",
    course:"",
    dob:""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addUser(formData)

    alert("User Registered Successfully")

    setFormData({
      name:"",
      email:"",
      phone:"",
      gender:"",
      course:"",
      dob:""
    })
  }

  return (
    <div>

      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="gender"
          value={formData.gender}
          placeholder="Gender"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="course"
          value={formData.course}
          placeholder="Course"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Register</button>

      </form>

    </div>
  )
}

export default Registration