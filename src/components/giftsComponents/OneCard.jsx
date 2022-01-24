import React from "react";

function OneCard({title}) {
  return (
    <main className="one-container">
      <section className="inner-container">
        <div className="cards">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="img-card">
            <div className="images">
              <img
                alt="gift cards"
                src="https://globalassets.starbucks.com/assets/cebabfd7315648778091f06dab400b45.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OneCard;
