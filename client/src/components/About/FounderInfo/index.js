import React from "react";
import "./FounderInfo.scss";

const FounderInfo = () => {
  return (
    <div className="founder-info">
      <div className="left">
        <section className="top">
          <h3>Founded July 2020</h3>
          <p>
            Lorem duis nulla laboris cillum aute laboris ex. Elit do excepteur
            proident fugiat eiusmod. Anim consequat proident proident mollit
            enim. Sint aliqua duis eu ut nulla laborum exercitation culpa cillum
            fugiat duis eiusmod pariatur. Aliqua cillum officia minim nisi nisi
            dolor duis. Voluptate reprehenderit aute enim excepteur sint. Duis
            ipsum excepteur eiusmod in aliquip. Dolor nostrud ipsum irure elit
            sit aute in pariatur excepteur laboris officia. Pariatur laboris sit
            non dolor esse magna.
          </p>
        </section>
        <section className="bottom">
          <h3>The Keef Kulinary Experience</h3>
          <p>
            Lorem duis nulla laboris cillum aute laboris ex. Elit do excepteur
            proident fugiat eiusmod. Anim consequat proident proident mollit
            enim. Sint aliqua duis eu ut nulla laborum exercitation culpa cillum
            fugiat duis eiusmod pariatur.
          </p>
        </section>
      </div>
      <div className="right">
        <img src="/images/info/owner2.jpeg" alt="owner" />
      </div>
    </div>
  );
};

export default FounderInfo;
