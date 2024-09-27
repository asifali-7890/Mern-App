import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  async function getSingleUser() {
    const response = await fetch(`http://localhost:5000/${id}`);
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError("");
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updateUser = { name, email, age };
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateUser),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError("");
      navigate('/all')
    }
  }

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <form onSubmit={handleUpdate} className="text-center m-4">
      {error && <div className="alert alert-danger" role="alert">
        {error}
      </div>}
      <h2 className="text-center">Edit your Data</h2>
      <div className="form-group">
        <label >Enter Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" aria-describedby="emailHelp" placeholder="Enter name" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label >Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
      </div>
      <div className="form-group">
        <label > Enter Age</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Edit your Age" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Update