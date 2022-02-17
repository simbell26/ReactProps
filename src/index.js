import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Bruno Fernandes"
      img="https://img.a.transfermarkt.technology/portrait/big/240306-1636537174.jpg?lm=1"
      tel="+555 1267877"
      email="ilovepaulpogba@yahoo.com"
    />
  </div>,
  document.getElementById("root")
);
