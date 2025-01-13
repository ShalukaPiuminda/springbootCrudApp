import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();
  const { name, username, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

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
    <div className="min-h-screen bg-gray-900 flex justify-center items-start pt-10">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          View User
        </h2>
        <div className="space-y-4 mb-4 text-white">
          <div className="p-3 bg-gray-700 rounded-md border border-white">
            <h3>
              <strong className="text-blue-400">Name: </strong>
              <span className="text-gray-300">{name}</span>
            </h3>
          </div>
          <div className="p-3 bg-gray-700 rounded-md border border-white">
            <h3>
              <strong className="text-blue-400">Username: </strong>
              <span className="text-gray-300">{username}</span>
            </h3>
          </div>
          <div className="p-3 bg-gray-700 rounded-md border border-white">
            <h3>
              <strong className="text-blue-400">Email: </strong>
              <span className="text-gray-300">{email}</span>
            </h3>
          </div>
        </div>

        <Link
          to={`/edituser/${id}`}
          className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          <FaEdit className="mr-2" />
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
