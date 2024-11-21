import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { loginUser } from "../../services/authService"; 
import { useUserContext } from "../../context/UserContext";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { addUserData } = useUserContext(); // Get addUserData from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Details received:", username, " ", password);
    
    // Pass addUserData function to loginUser
    const response = await loginUser(username, password, addUserData);
    console.log("Response received:", response);

    if (response?.username) {
      navigate("/"); // Navigate to homepage if successful
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
