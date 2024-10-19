// import React from "react";
// import { useState } from "react";
// import "./Signup.css";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form validation or API call logic here
//     console.log("Form Data:", formData);
//   };

//   return (
//     <>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <h2>Create an Account</h2>

//         <div className="form-group">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Create a password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder="Re-enter your password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="signup-btn">
//           Sign Up
//         </button>

//         <p className="login-link">
//           Already have an account? <a href="#">Log in</a>
//         </p>
//       </form>
//       </>
//   );
// };

// export default Signup;
