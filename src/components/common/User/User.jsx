import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function User() {
  const { user, isAuthenticated } = useAuth0();
  const [auth, setuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setuth(auth);
  }, []);

  return (
    <div>
      {!isAuthenticated && (
        <h1 style={{ textAlign: "center" }}>please login first</h1>
      )}
      <div>{isAuthenticated || (auth && <Outlet />)}</div>;
    </div>
  );
}

export default User;
