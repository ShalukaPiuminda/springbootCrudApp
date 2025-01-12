import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  return (
    <div className="flex justify-center min-h-screen mt-10">
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="border-b" key={index}>
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-3 text-center flex justify-center gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 mb-2 text-sm font-medium text-black focus:outline-none rounded-lg border border-gray-300 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-400"
                  >
                    <FaEye className="mr-1 text-black hover:text-gray-500" />
                    <span className="text-black hover:text-gray-500">View</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 mb-2 text-sm font-medium text-blue-500 focus:outline-none rounded-lg border border-gray-300 hover:text-blue-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-blue-400 dark:border-gray-600 dark:hover:text-blue-400"
                  >
                    <FaEdit className="mr-1 text-blue-500" />
                    <span>Edit</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 mb-2 text-sm font-medium text-red-500 focus:outline-none rounded-lg border border-gray-300 hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-red-400 dark:border-gray-600 dark:hover:text-red-300"
                  >
                    <FaTrash className="mr-1 text-red-500" />
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
