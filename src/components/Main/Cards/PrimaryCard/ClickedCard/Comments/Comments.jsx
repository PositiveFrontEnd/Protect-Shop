import React, { useState, useEffect } from "react";
import "./CommentsStyles.scss";
import Button from "../../../../../Button/Button";
import {
  selectorProductComment,
  selectorProductComments,
  selectorRegistrationData,
} from "../../../../../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment.jsx";
import ModalComments from "./CommentForm.jsx";
import { actionGetProductComments } from "../../../../../../store/commentsSlice.js";

const Comments = ({ name, color, id }) => {
  const currentProductComments = useSelector(selectorProductComments);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
  };
  const isAuthorized = useSelector(selectorRegistrationData);

  return (
    <>
      <div className="comments__wrapper">
        <div className="comments__header">
          <p className="header__text">
            {name} (<strong>{color}</strong>)
          </p>
          {"_id" in isAuthorized ? (
            <Button className="header__button" white onClick={openModal}>
              leave your comment
            </Button>
          ) : (
            <button className="header__button inactive">
              leave your comment
            </button>
          )}

          <p
            className={
              "_id" in isAuthorized
                ? "comment__tips inactive"
                : "comment__tips "
            }
          >
            To leave comment{" "}
            <span>
              <a href="/account/registration">sign up</a>{" "}
            </span>
            or{" "}
            <span>
              <a href="/account/authorization">log in</a>
            </span>
          </p>
        </div>
        <div className="comments__content">
          {currentProductComments.map((item, index) => (
            <Comment
              key={index}
              likes={item.likes}
              firstName={item.customer.login}
              lastName={item.customer.lastName}
              comment={item.content}
            />
          ))}
        </div>
        {showModal && <ModalComments id={id} setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default Comments;
