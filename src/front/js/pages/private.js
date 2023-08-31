import React, { useEffect, useState } from "react";

export const Private = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <div>
      <h1>You have successfully passed inside!</h1>
    </div>
  );
  
};

export default Private;

