import React, { useState, useEffect } from "react";

function CashOrCard() {
  const useWindowSize = () => {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setSize(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  };
  const width = useWindowSize();

  const oneDollar = (num, star) => (
    <h2 className="dollar">
      {num}
      <span>★</span>
      {star}
    </h2>
    );
    
    let number1 = 1;
    let number2 = 2;
    let starInfo = ""

 
  if (width > 700) {
    starInfo = "per dollar"
  } else {
    starInfo = "Star per dollar";
  }

  return (
    <main className="cash-container">
      <section className="inner-container">
        <div className="title">
          <h1>Cash or card, you earn Stars</h1>
          <p>
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) Rewards.
          </p>
        </div>

        <div className="item-container">
          <div className="item1">
            {oneDollar(number1,starInfo)}
            <p>Pay as you go</p>
          </div>
          <div className="item2">
            <div className="image">
              <img
                alt="cards or cash"
                src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/1A.png"
              />
            </div>
            <div className="info">
              <h3>Scan and pay separately</h3>
              <p>Use cash or credit/debit card at the register.</p>
            </div>
          </div>

          <div className="item2">
            <div className="image">
              <img
                alt="cards or cash"
                src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/1B.png"
              />
            </div>
            <div className="info">
              <h3>Save payment in the app</h3>
              <p>
                Check-out faster by saving a credit/debit card or PayPal to your
                account. You’ll be able to order ahead or scan and pay at the
                register in one step.
              </p>
            </div>
          </div>
        </div>

        <div className="item-container border-top">
          <div className="item1">
            {oneDollar(number2,starInfo)}
            <p>Add funds in the app</p>
          </div>
          <div className="item2">
            <div className="image">
              <img
                alt="cards or cash"
                src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/2A.png"
              />
            </div>
            <div className="info">
              <h3>Preload</h3>
              <p>
                To save time and earn Stars twice as fast, add money to your
                digital Starbucks Card using any payment option. Scan and pay in
                one step or order ahead in the app.
              </p>
            </div>
          </div>

          <div className="item2">
            <div className="image">
              <img
                alt="cards or cash"
                src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/2B.png"
              />
            </div>
            <div className="info">
              <h3>Register your gift card</h3>
              <p>
                Then use it to pay through the app. You can even consolidate
                balances from multiple cards in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CashOrCard;
