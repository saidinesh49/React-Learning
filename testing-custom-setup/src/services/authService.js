import axios from "axios";
import conf from "../conf/conf";

const loginUser = async(username, password, addUserData) => {
  try {
    if (!username || !password) {
      console.log("Username and password are missing");
      return;
    }

    const Data = await axios.post(`${conf.BACKEND_URL}/users/login`, {
      username: username,
      password: password,
      email: username
    }).then(res => res.data.data);

    if (!Data?.user?.username) {
      console.log("Invalid login details", Data);
      return new Error("Invalid login details");
    }

    // Pass user data to the addUserData function
    addUserData(Data?.user);

    return Data.user;
  } catch (error) {
    console.log("Error: while login", error);
  }
};

const logoutUser = async(removeUserData)=>{
    try {
        const loggedOut=await axios.post(`${conf.BACKEND_URL}/users/logout`);
        removeUserData();
        console.log("User logged out successfully",loggedOut);
    } catch (error) {
        console.log("Error: while logout, ",error)
    }
};


const getCurrentUser = async (addUserData) => {
  try {
      // Extract token from cookies
      const token = document.cookie.split("; ").find((row) => row.startsWith("accessToken="));
      const accessToken = token ? token.split("=")[1] : null;

      if (!accessToken) {
          console.log("No access token found");
          return null;
      }

      // Call API with access token
      const Data = await axios
          .get(`${conf.BACKEND_URL}/users/current-user`, {
              headers: { Authorization: `Bearer ${accessToken}` },
              withCredentials: true,
          })
          .then((res) => res.data);

      if (!Data?.data?.username) {
          console.log("Error: while fetching current user", Data);
          return null;
      }

      // Set the user data if exists
      addUserData(Data?.data);
      return Data.data;
  } catch (error) {
      console.log("500 Internal server Error: while fetching current user", error);
      return null;
  }
};


const registerUser = async(fullName,email,username,password,)=>{

};


export {
    loginUser,
    logoutUser,
    registerUser,
    getCurrentUser,
};