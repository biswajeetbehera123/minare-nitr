import React, { createContext, useState } from "react";
export const UserContext = createContext([{}, () => {}]);

const UserContextProvider = props => {
  const [state, setState] = useState({
    user: {
      username: "",
      email: "",
      phone: "",
      bio: "",
      website: "",
      year: "",
    },
    errors: {}
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
