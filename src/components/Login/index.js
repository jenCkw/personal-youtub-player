import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./style.css";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
// import Lastvideos from "../../Lastvideos";

export default function Login() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const setAuth2 = async () => {
  //     const auth2 = await loadAuth2(
  //       gapi,
  //       "423778706232-ot8e6k2nfq2e7g0pn1mq1h0c56bdov2u.apps.googleusercontent.com",
  //       ""
  //     );
  //     if (auth2.isSignedIn.get()) {
  //       updateUser(auth2.currentUser.get());
  //     } else {
  //       attachSignin(document.getElementById("customBtn"), auth2);
  //     }
  //   };
  //   setAuth2();
  // }, []);

  // useEffect(() => {
  //   if (!user) {
  //     const setAuth2 = async () => {
  //       const auth2 = await loadAuth2(
  //         gapi,
  //         "423778706232-ot8e6k2nfq2e7g0pn1mq1h0c56bdov2u.apps.googleusercontent.com",
  //         ""
  //       );
  //       attachSignin(document.getElementById("customBtn"), auth2);
  //     };
  //     setAuth2();
  //   }
  // }, [user]);

  // const updateUser = (currentUser) => {
  //   const name = currentUser.getBasicProfile().getName();
  //   const profileImg = currentUser.getBasicProfile().getImageUrl();
  //   setUser({
  //     name: name,
  //     profileImg: profileImg,
  //   });
  // };

  // const attachSignin = (element, auth2) => {
  //   auth2.attachClickHandler(
  //     element,
  //     {},
  //     (googleUser) => {
  //       updateUser(googleUser);
  //     },
  //     (error) => {
  //       console.log(JSON.stringify(error));
  //     }
  //   );
  // };

  // const signOut = () => {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(() => {
  //     setUser(null);
  //     console.log("User signed out.");
  //   });
  // };

  // if (user) {
  //   return (
  //     <div className="container">
  //       <div id="" className="btn logout" onClick={signOut}>
  //         <>
  //           <Navbar />
  //           <div className="sidebar-lastvideo">
  //             <div className="lastvideo-sidebar">
  //               <Sidebar />
  //             </div>
  //             <div className="lastvideo-list">
  //               <Lastvideos />
  //             </div>
  //           </div>
  //         </>
  //       </div>
  //     </div>
  //   );
  // }

  const navigate = useNavigate();

  function onSuccess(response) {
    console.log("SUCCESSED", response);
    console.log(response.profileObj);
    navigate("/lastVideo");
    return;
  }

  function onFailure(response) {
    console.log("SUCCESSED", response);
    return;
  }

  return (
    <div className="container-login">
      <div id="customBtn" className="login-left-section">
        <h1>YouPlayer</h1>
      </div>

      <div className="login-right-section">
        <h2>Login</h2>

        <GoogleLogin
          clientId="423778706232-cb737upob0v31h4is24dcc561eh5fuju.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          // cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </div>
  );
}
