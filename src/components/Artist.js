import React from "react";
import { CardTitle, CardImg } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Artist = ({ product }) => {
  return (
    <div>
      <CardImg
        alt="Card image cap"
        src={product.data[0].artist.picture_xl}
        style={{ width: "150px", borderRadius: "150px" }}
        className="mb-3 mt-5 borderP"
      />
      <CardTitle tag="h4">{product.data[0].artist.name}</CardTitle>
    </div>
  );
};
