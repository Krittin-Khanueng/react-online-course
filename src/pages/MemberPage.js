import React from "react";
import { UserStoreContext } from "../context/UserContext";

const MemberPage = () => {
  const userStore = React.useContext(UserStoreContext);
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>สำหรับสมาชิก</h2>
          {
            userStore.profile && (
              <p>ยินดีต้อนรับ {userStore.profile.name} Email {userStore.profile.email}</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
