import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUsers() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const {id} = useParams();

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/user/${id}`, user);
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user. Please try again.");
    }
  };
  

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error loading user:", error);
      alert("Failed to load user data. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-10">
      {/* Header Section */}
      <div className="flex gap-2 items-center mb-6 text-2xl font-semibold dark:text-white">
        <h1 className="text-green-300 text-4xl">SPJ</h1>
        <span className="text-white-300 text-3xl">Furniture</span>
      </div>

      {/* Form Container */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mt-8">
        <h2 className="text-xl font-bold text-white mb-4">Edit User Profile</h2>
        <p className="text-sm text-gray-400 mb-6">
          Add your new details and click save.
        </p>

        {/* Form */}
        <form onSubmit={(e) => onsubmit(e)}>
          <div className="flex gap-5">
            {/* First Name Input */}
            <div className="mb-4">
              <label
                htmlFor="first-name"
                className="block text-sm text-gray-400 mb-1"
              >
                First name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            {/* Username Input */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm text-gray-400 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email address
            </label>
            <input
             name="email"
              id="email"
              type="email"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email address"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
