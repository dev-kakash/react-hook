import React, { useContext } from "react";
import { UserName } from "../App";

const ComponentA = () => {
  const user = useContext(UserName);
  return (
    <div>
      {/* <UserName.Consumer>
        {(userName) => {
          return <div>{userName}</div>;
        }}
      </UserName.Consumer> */}
      {user}
    </div>
  );
};

export default ComponentA;
