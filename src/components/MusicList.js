import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Input, Row, Container } from "reactstrap";

import "./music.css";
import { Music } from "./Music";
import { Artist } from "./Artist";

export const MusicList = () => {
  const [music, setMusic] = useState("");
  const [product, setProduct] = useState(null);

  //for input
  const handleChange = (e) => {
    e.preventDefault();
    setMusic(e.target.value);
  };

  //for the search button
  const handleClick = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: music },
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": `c257feb7a8msh2ca74c6f0ae053bp1e81b0jsn5ef57294be3b`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Container>
      <h1 className="mt-5 head">MusicAZ</h1>
      <div className="mt-5">
        <Input
          type="text"
          placeholder="Search for your favourite artist"
          onChange={handleChange}
          required
        />
        <Button className="btn mt-5 btn1" color="dark" onClick={handleClick}>
          Search
        </Button>
        <br />

        {product ? (
          <>
            <Artist product={product} />
            <Row md="" sm="" xs="" className="mt-5 mb-5">
              {product.data.map((prod) => (
                <Music prod={prod} />
              ))}
            </Row>
          </>
        ) : (
          <h2 className="mt-5">Go right at it !</h2>
        )}
      </div>
    </Container>
  );
};
