import React, { useState, useEffect } from "react";

function GiftCards({ title, opacity, data }) {
  const [position, setPosition] = useState(0);
  const [opa1, setOpa1] = useState(0);
  const [opa2, setOpa2] = useState(1);
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);

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
  let posValue = 0;
  const width = useWindowSize();

  if (width < 420) {
    posValue = -400;
  }

  if (width > 500) {
    posValue = -200;
  }

  if (width > 1200) {
    posValue = -100;
  }

  const goLeft = () => {
    if (position === -100) {
      setPosition(position + 100);
      setOpa1(0);
      setBtn1(true);
    } else {
      setPosition(position + 100);
      setOpa2(1);
      setBtn2(false);
    }
  };

  const goRight = () => {
    if (position === posValue) {
      setPosition(position - 100);
      setOpa2(0);
      setBtn2(true);
    } else {
      setPosition(position - 100);
      setOpa1(1);
      setBtn1(false);
    }
  };

  return (
    <main className="giftcards-container">
      <section className="inner-container">
        <div className="title">
          <h1>{title}</h1>
          <p style={{ opacity: `${opacity}` }}>See All</p>
        </div>

        <div className="cards">
          <button
            style={{ opacity: `${opa1}` }}
            onClick={() => goLeft()}
            className="left"
            disabled={btn1}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            style={{ opacity: `${opa2}` }}
            onClick={() => goRight()}
            className="right"
            disabled={btn2}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="img-card" style={{ left: `${position}%` }}>
            {data.map((item) => (
              <div key={item.id} className="images">
                <img alt="gift cards" src={item.image} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default GiftCards;
