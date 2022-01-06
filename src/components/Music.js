import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  CardImg,
  Col,
} from "reactstrap";
import deezer from "./deezer.png";

export const Music = ({ prod }) => {
  return (
    <Col md="4" className="mt-5" key={prod.id}>
      <Card body style={{ borderRadius: "15px" }}>
        <CardBody>
          <CardImg
            alt="Card image cap"
            src={prod.album.cover_big}
            style={{ borderRadius: "10px" }}
            top
            className="mb-2 mt-2"
          />

          <CardText className="mb-2 mt-2" tag="h5">
            Song: {prod.title}
          </CardText>
          <CardSubtitle className="mb-2 mt-2 text-muted" tag="h6">
            Album: {prod.album.title}
          </CardSubtitle>

          <a href={prod.link} target="_blank" rel="noreferrer">
            <CardImg
              title="Listen to the full version"
              alt="Deezer Icon"
              src={deezer}
              top
              style={{ width: "35px", borderRadius: "0px" }}
              className=""
            />
          </a>
          <br />
          <button
            className="noBorder mt-3"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <audio controls className="noBorder">
              <source src={prod.preview} type="audio/mpeg" />
            </audio>
          </button>
        </CardBody>
      </Card>
    </Col>
  );
};
