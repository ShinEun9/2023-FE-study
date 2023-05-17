import React from "react";
import UserInfo from "../context/userInfoContext";
import HelloLicatTwo from "./HelloLicatTwo";

export default function HelloLicat() {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo />
        </div>
      )}
    </UserInfo.Consumer>
  );
}
