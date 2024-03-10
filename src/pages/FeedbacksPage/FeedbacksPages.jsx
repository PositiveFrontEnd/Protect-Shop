import React, { useEffect, useState } from "react";
import "./FeedbackspageStyles.scss";
import FeedbacksComent from "./FeedbacksComment";
import Button from "../../components/Button/Button";
import ModalShopComments from "./ShopCommentForm";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorRegistrationData,
  selectorShopComments,
} from "../../store/selectors";
import { actionGetAllShopComments } from "../../store/shopCommentsSlice";
const FeedbacksPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    dispatch(actionGetAllShopComments());
  }, []);
  const comments = useSelector(selectorShopComments);
  const isAuthorized = useSelector(selectorRegistrationData);
  return (
    <section className="container">
      <h2 className="feedbacks__title">feedbacks</h2>
      <div className="feedback__content">
        <p className="feedbacks__content__text">
          Learn more about us! Our customers write feedbacks about our online
          store.
        </p>
        <div className="feedbacks__comments__container">
          <div className="feedbacks__comments">
            {comments.map((item, index) => (
              <FeedbacksComent
                text={item.advantages}
                key={index}
                firstName={item.customer.firstName}
                lastName={item.customer.lastName}
                disadvantages={item.disadvantages}
                avatar={item.customer.avatarUrl}
                likes={item.likes}
                background={item.customer.background}
              />
            ))}
          </div>
        </div>
        {"_id" in isAuthorized ? (
          <Button className="header__button" black onClick={openModal}>
            leave your comment
          </Button>
        ) : (
          <button className="shop__comments__button inactive">
            leave your comment
          </button>
        )}
        <p
          className={
            "_id" in isAuthorized ? "comment__tips inactive" : "comment__tips "
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
        {showModal && <ModalShopComments setShowModal={setShowModal} />}
      </div>
    </section>
  );
};

export default FeedbacksPage;
