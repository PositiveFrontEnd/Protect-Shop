import React from "react";
import "./CardList.scss";
import AdminSearch from "./AdminSearch";
import ChangeProductForm from "../../../../components/Form/ChangeProduct/ChangeProducrForm";

const ChangeProductPage = () => {

  return (
    <div className="search__cont">
      <div className="search__admin">
        <AdminSearch />
      </div>
      <ChangeProductForm />

    </div>

  );
};
export default ChangeProductPage