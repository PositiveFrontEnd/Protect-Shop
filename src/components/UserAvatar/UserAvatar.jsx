import React from "react";
import PropTypes from "prop-types";
import "./UserNoAvatar.scss";

const UserAvatar = ({ background, firstName, avatarUrl, mobile }) => {
  return (
    <>
      {!avatarUrl || avatarUrl === "" ? (
        <div
          className={mobile ? "no__avatar__wrapper avatar__mobile" : "no__avatar__wrapper"}
          style={{ backgroundColor: background }}
        >
          <p className="avatar__letter">{(firstName && firstName.charAt(0).toUpperCase()) || ''}</p>
        </div>
      ) : (
        <div className={mobile ? "preview__avatar avatar__mobile" : "preview__avatar"}>
          <img className="avatar" src={avatarUrl && avatarUrl} alt="avatar" />
        </div>
      )}
    </>
  );
};

UserAvatar.propTypes = {
  background: PropTypes.string,
  firstName: PropTypes.string,
  avatarUrl: PropTypes.string,
  mobile: PropTypes.bool
};

export default UserAvatar;
