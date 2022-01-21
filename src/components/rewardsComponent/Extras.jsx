import React from "react";

function Extras() {
  return (
    <main className="extra-container">
      <section className="inner-container">
        <div className="title">
          <h1>Endless extras</h1>
          <p>
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </p>
        </div>
        <div className="items-container">
          <div className="item">
            <img
              alt="extras"
              src="https://www.starbucks.ca/weblx/images/rewards/benefits/1-fun-freebies.jpg"
            />
            <div className="info">
              <h2>Fun freebies</h2>
              <p>
                Not only can you earn free coffee, look forward to a birthday
                treat plus coffee and tea refills.
              </p>
              <p className="learn">Learn More</p>
            </div>
          </div>

          <div className="item">
            <img
              alt="extras"
              src="https://www.starbucks.ca/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
            />
            <div className="info">
              <h2>Order & pay ahead</h2>
              <p>
                Enjoy the convenience of in-store, curbside or drive-thru pickup
                at select stores.
              </p>
              <p className="learn">Learn More</p>
            </div>
          </div>

          <div className="item">
            <img
              alt="extras"
              src="https://www.starbucks.ca/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
            />
            <div className="info">
              <h2>Get to free faster</h2>
              <p>
                Earn Stars even quicker with Bonus Star challenges, Double Star
                Days and exciting games.
              </p>
              <p className="learn">Learn More</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Extras;
