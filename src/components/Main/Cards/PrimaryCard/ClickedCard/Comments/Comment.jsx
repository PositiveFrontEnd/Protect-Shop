import React from "react";
import Star from "../../../Images/star.svg?react";
import { useState } from "react";
import { selectorToken } from "../../../../../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { actionUpdateComment } from "../../../../../../store/commentsSlice";
import AdminSvg from "./CommentSvg/admin.svg?react";
const Comment = ({
  firstName,
  lastName,
  comment,
  likes,
  status,
  id,
  commentAdmin,
}) => {
  const [isInput, setIsInput] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const token = useSelector(selectorToken);
  const dispatch = useDispatch();
  const openInput = () => {
    setIsInput(!isInput);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setCommentValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Reply:", commentValue);
      const data = {
        token: token,
        id: id,
        newComment: {
          content: comment,
          commentAdmin: commentValue,
        },
      };
      dispatch(actionUpdateComment(data));

      setIsInput();
      setCommentValue("");
    }
  };
  return (
    <div className="comments__content__item">
      <div className="item__header">
        <p className="header__text__name">
          {firstName} {lastName}
        </p>
      </div>
      <div className="item__stat">
        {[...Array(likes)].map((item, index) => (
          <Star
            key={index}
            className={likes > 1 ? "active__star" : " default__star"}
          />
        ))}
      </div>
      <div className="item__main">
        <p>
          <strong>Comment:</strong> {comment}
        </p>
        {status && (
          <button onClick={openInput} className="main__button__answer">
            Answer
          </button>
        )}
      </div>
      {isInput && (
        <input
          className="item__input"
          type="text"
          value={commentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      )}
      {commentAdmin && (
        <div className="item__answerAdmin">
          <p>
            {" "}
            <strong>administrator</strong> <AdminSvg />
          </p>
          <p className="answerAdmin__user__name">
            {" "}
            {firstName} {lastName}
          </p>
          <p>{commentAdmin}</p>
        </div>
      )}
    </div>
  );
};

export default Comment;
