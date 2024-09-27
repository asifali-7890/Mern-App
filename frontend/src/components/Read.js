import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  async function getData() {
    const response = await fetch('http://localhost:5000');
    const result = await response.json();

    if (!response.ok) {
      setError(result.error);
      console.log(result.error);
    }

    if (response.ok) {
      setData(result);
    }
  }

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError('Deleted successfully...');

      setTimeout(() => {
        setError('');
        getData();
      }, [2000])
    }
  }

  useEffect(() => {
    getData();
  }, [])

  console.log(data);
  return (
    <div className='container my-2'>
      {error && <div className="alert alert-danger" role="alert">
        {error}
      </div>}
      <h2 className='text-center'>All Data</h2>
      <div className="row flex flex-wrap gap-4 p-4 justify-center">
        {data?.map((ele) => (
          <div key={ele._id} className=" my-8 w-24 w-[200px] h-[100px] bg-blue-500">
            <div className="card">
              <div className="p-4  bg-white shadow-lg rounded-lg border border-gray-200">
                <h5 className="text-lg font-semibold text-gray-900">{ele.name}</h5>
                <h6 className="text-sm text-gray-500 mb-2">{ele.email}</h6>
                <p className="text-gray-500">{ele.age}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 transition-all"
                    onClick={() => handleDelete(ele._id)}
                  >
                    Delete
                  </a>
                  <Link
                    to={`/${ele._id}`}
                    className="text-blue-500 hover:text-blue-700 transition-all"
                  >
                    Edit
                  </Link>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Read



