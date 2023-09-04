import React from "react";
import "./FounderInfo.scss";

const FounderInfo = () => {
  return (
    <div className="founder-info">
      <div className="left">
        <section className="top">
          <h3>Founded July 2020</h3>
          <p>
            At the heart of Keef Kitchen is our founder, Alexis. Their journey
            into entrepreneurship was motivated by a strong sense of fairness
            and compassion. It all started when Alexis found themselves
            frustrated with the high prices imposed by other sellers. This
            frustration led to the creation of Keef Kitchen, where the core
            principle is to charge what Alexis would be willing to pay herself.
          </p>
        </section>
        <section className="bottom">
          <h3>The Keef Kulinary Experience</h3>
          <p>
            What truly fuels Alexis and our mission at Keef Kitchen is the
            positive impact our products have on people's lives. Countless
            individuals, just like Alexis, have found relief from anxiety and
            better sleep through our offerings. The stories of veterans
            experiencing restful nights and cancer patients finding relief from
            pain drive Alexis to continue this journey.
          </p>
          <p>
            At Keef Kitchen, we're not just about products; we're about making a
            difference in the lives of our customers. Alexis and our team are
            committed to providing you with the very best, so you can live life
            to the fullest.
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
