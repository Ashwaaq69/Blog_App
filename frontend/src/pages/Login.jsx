// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { UserContext } from "../UserContext";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const { setUserInfo } = useContext(UserContext);
//   const [redirect, setRedirect] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate function

//   const validateForm = () => {
//     let errors = {};

//     if (!username) {
//       errors.username = "Username is required.";
//     }

//     if (!password) {
//       errors.password = "Password is required.";
//     } else if (password.length < 6) {
//       errors.password = "Password must be at least 6 characters long.";
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const loginuser = async (ev) => {
//     ev.preventDefault();
  
//     if (!validateForm()) {
//       return; // Stop if validation fails
//     }
  
//     try {
//       const response = await fetch("http://localhost:5001/login", {
//         method: "POST",
//         body: JSON.stringify({ username, password }),
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//       });
  
//       if (response.ok) {
//         const userInfo = await response.json();
//         setUserInfo(userInfo);
//         setRedirect(true); // Set redirect to true on successful login
//         alert("Login successful");
//       } else {
//         const errorMessage = await response.text();
//         console.error("Login failed: ", errorMessage); // Log the error message from the server
//         alert("Wrong credentials");
//       }
//     } catch (error) {
//       console.error("Login error:", error); // Log the actual error
//       alert("An error occurred. Please try again.");
//     }
//   };
  


//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={loginuser} className="space-y-4">
//         {/* Username Field */}
//         <div>
//           <label className="block mb-1">Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(ev) => setUsername(ev.target.value)}
//             className={`w-full p-2 border rounded ${errors.username ? "border-red-500" : ""}`}
//             placeholder="Enter your username"
//           />
//           {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//         </div>

//         {/* Password Field */}
//         <div>
//           <label className="block mb-1">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={`w-full p-2 border rounded ${errors.password ? "border-red-500" : ""}`}
//             placeholder="Enter your password"
//           />
//           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required.";
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const loginUser = async (ev) => {
    ev.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo); // Set user info in context
        navigate("/"); // Redirect to home page
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={loginUser} className="space-y-4">
        {/* Username Field */}
        <div>
          <label className="block mb-1">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            className={`w-full p-2 border rounded ${errors.username ? "border-red-500" : ""}`}
            placeholder="Enter your username"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border rounded ${errors.password ? "border-red-500" : ""}`}
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
