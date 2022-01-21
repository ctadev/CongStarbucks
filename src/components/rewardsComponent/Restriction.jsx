import React from "react";

function Restriction() {
  return (
    <main className="restriction-container">
      <section className="inner-container">
        <div className="section1">
          <div className="item1">
            <p className="title">
              At participating stores. Restrictions apply.
            </p>
            <h2>EARNING STARS</h2>
            <p>
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </p>
            <p>
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </p>
            <p>
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </p>
          </div>
          <div className="item2">
            <h2>TERMS OF USE</h2>
            <p>
              For full program details visit
              <span>starbucks.ca/rewards/terms.</span>
            </p>
          </div>
        </div>

        <div className="section2">
          <div className="item1">
            <h2>BENEFITS</h2>
            <p>
              Free refills available during same in-store visit only.
              To qualify for the Birthday Reward, you must have made at least
              one Star-earning transaction.
            </p>
          </div>

          <div className="item2">
            <h2>REDEEMING REWARDS</h2>
            <p>
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. Not all stores honor tiered Rewards. Select stores redeem
              150 Stars for free food or drink items only.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Restriction;
