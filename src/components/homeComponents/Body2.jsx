import React from "react";

function Body2() {
  return (
    <main className="body2-container">
      <section className="hero2">
        <div className="card">
          <img alt="coffee" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-76030.jpg" />
          <div className="info">
            <h2>Positively pistachio</h2>
            <p>
              Warm up with our creamy Pistachio Latte. It's back for the season
              with a brown-buttery topping.
            </p>
            <button>Order Now</button>
          </div>
        </div>

        <div className="card">
          <img alt="coffee" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-76035.jpg" />
          <div className="info">
            <h2>Oatfully tasty</h2>
            <p>
              Crafted with Starbucks Blonde® Espresso and hints of cinnamon, our
              Brown Sugar Oat drinks are a delight.
            </p>
            <button>Order Now</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body2;
