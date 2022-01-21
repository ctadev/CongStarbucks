import React from "react";

function GettingStarted() {

  return (
    <main className="started-container">
      <section className="inner-container">
        <div className="title">
          <h1>Getting started is easy</h1>
          <p>Earn Stars and get rewarded in a few easy steps</p>
        </div>
        <div className="items-container">
          <div className="item">
            <div className="img">
              <img
                alt="number"
                src="https://www.starbucks.ca/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
              />
            </div>
            <div className="info">
              <h2>Create an account</h2>
              <p>
                To get started, <span>join now</span>. You can also{" "}
                <span>join in the app</span> to get access to the full range of
                Starbucks® Rewards benefits.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="img">
              <img
                alt="number"
                src="https://www.starbucks.ca/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"
              />
            </div>
            <div className="info">
              <h2>Order and pay how you’d like</h2>
              <p>
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways. 
                <span className="learn">Learn how</span>
              </p>
            </div>
          </div>

          <div className="item">
            <div className="img">
              <img
                alt="number"
                src="https://www.starbucks.ca/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"
              />
            </div>
            <div className="info">
              <h2>Earn Stars, get Rewards</h2>
              <p>
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GettingStarted;
