import React from "react";

function Disclamer() {
  return (
    <main className="disc-container">
      <section className="section1">
        <p>
          *At participating stores. Some restrictions apply. See
          <a
            target="_blank"
            rel="noreferrer"
            href="http://starbucks.ca/rewards"
          >
            http://starbucks.ca/rewards
          </a>
          for details
        </p>
      </section>
      <section className="section2">
        <p>
          **Menu limited. Restricted delivery area. Available in participating
          locations only. Fees subject to change. Prices for Starbucks items
          purchased through Uber Eats may be higher than posted in stores or as
          marked. See the Uber Eats app for details.
        </p>
      </section>
    </main>
  );
}

export default Disclamer;
