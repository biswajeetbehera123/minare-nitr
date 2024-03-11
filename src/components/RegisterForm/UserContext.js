import React, { createContext, useState } from "react";
export const UserContext = createContext([{}, () => {}]);

const UserContextProvider = props => {
  const [state, setState] = useState({
    user: {
      fullname: "",
      email: "",
      phone: "",
      collegeName: "",
      branchOfStudy: "",
      yearOfGraduation: "",
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
