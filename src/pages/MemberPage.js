﻿import React from "react";
// import { UserStoreContext } from "../context/UserContext";

import { useSelector } from "react-redux";

const MemberPage = () => {
  // const userStore = React.useContext(UserStoreContext);
  const profileRedux = useSelector((state) => state.authReducer.profile);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>สำหรับสมาชิก</h2>
          {/* {
            userStore.profile && (
              <p>ยินดีต้อนรับ {userStore.profile.name} Email {userStore.profile.email}</p>
            )
          } */}

          {profileRedux && (
            <p>
              ยินดีต้อนรับ {profileRedux.name} Email {profileRedux.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
