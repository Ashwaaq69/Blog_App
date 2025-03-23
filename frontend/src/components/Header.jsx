// import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "../UserContext";

// const Header = () => {
//   const { userInfo, setUserInfo } = useContext(UserContext);

//   useEffect(() => {
//     fetch("http://localhost:5001/profile", {
//       credentials: "include",
//     })
//       .then((res) => res.json())
//       .then((userInfo) => {
//         setUserInfo(userInfo);
//       })
//       .catch((error) => console.error("Error fetching profile:", error));
//   }, []);

//   function logout() {
//     fetch("http://localhost:5001/logout", {
//       credentials: "include",
//       method: "POST",
//     }).then(() => setUserInfo(null));
//   }

//   const username = userInfo?.username;

//   return (
//     <div className="max-w-9/10 m-0 auto p-10">
//       <div className="flex justify-between">
//         <Link to="/" className="font-semibold text-2xl text-gray-600 ml-24">
//           myBlog
//         </Link>
//         <nav className="flex gap-4 items-center">
//           {username ? (
//             <>
//               <Link to="/create" className="text-lg text-gray-500 hover:text-gray-700">
//                 Create new post
//               </Link>
//               <button
//                 onClick={logout}
//                 className="text-lg text-red-500 hover:text-red-700 cursor-pointer"
//               >
//                 Logout ({username})
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="text-lg text-gray-500 hover:text-gray-700">
//                 Login
//               </Link>
//               <Link to="/register" className="text-lg text-gray-500 hover:text-gray-700">
//                 Register
//               </Link>
//             </>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5001/profile", { credentials: "include" });
        if (res.ok) {
          const userInfo = await res.json();
          setUserInfo(userInfo);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [setUserInfo]);

  function logout() {
    fetch("http://localhost:5001/logout", {
      credentials: "include",
      method: "POST",
    }).then(() => setUserInfo(null));
  }

  return (
    <div className="max-w-9/10 m-0 auto p-10">
      <div className="flex justify-between">
        <Link to="/" className="font-semibold text-2xl text-gray-600 ml-24">
          myBlog
        </Link>
        <nav className="flex gap-4 items-center">
          {userInfo ? (
            <>
              <Link to="/create" className="text-lg text-gray-500 hover:text-gray-700">
                Create New Post
              </Link>
              <button
                onClick={logout}
                className="text-lg text-red-500 hover:text-red-700 cursor-pointer"
              >
                Logout ({userInfo.username})
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-lg text-gray-500 hover:text-gray-700">
                Login
              </Link>
              <Link to="/register" className="text-lg text-gray-500 hover:text-gray-700">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
