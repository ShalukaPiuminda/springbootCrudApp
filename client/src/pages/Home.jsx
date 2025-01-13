import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="flex justify-center items-start min-h-screen pt-16 bg-gray-900">
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-gray-800 border border-gray-700 text-white">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="border-b border-gray-600" key={index}>
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4 text-center flex justify-center gap-4">
                  <Link
                    to={`/viewuser/${user.id}`}
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 mb-2 text-sm font-medium text-gray-300 focus:outline-none rounded-lg border border-gray-600 hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-700"
                  >
                    <FaEye className="mr-1 text-gray-300 hover:text-gray-400" />
                    <span>View</span>
                  </Link>
                  <Link
                    to={`/edituser/${user.id}`}
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 mb-2 text-sm font-medium text-blue-400 focus:outline-none rounded-lg border border-gray-600 hover:text-blue-500 focus:z-10 focus:ring-4 focus:ring-gray-700"
                  >
                    <FaEdit className="mr-1 text-blue-400 hover:text-blue-500" />
                    <span>Edit</span>
                  </Link>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 mb-2 text-sm font-medium text-red-400 focus:outline-none rounded-lg border border-gray-600 hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-700"
                    onClick={() => deleteUser(user.id)}
                  >
                    <FaTrash className="mr-1 text-red-400 hover:text-red-500" />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
