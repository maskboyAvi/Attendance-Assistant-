import React from "react";
import tbt from "./aboutUs.module.css";

function TeamCard(props) {
  return (
    <div className={tbt["card"]}>
      <img className={tbt["about-img"]} src={props.imageSrc} alt={props.name} style={{ width: "100%" }} />
      <div className={tbt["container"]}>
        <h2 className={tbt["about-h2"]}>{props.name}</h2>
        <p className={tbt["title"]}>{props.role}</p>
        <p>{props.description}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default TeamCard;