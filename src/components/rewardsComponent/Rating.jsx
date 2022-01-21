import React, { useState } from "react";

function Rating() {
  const data = [
    {
      id: 1,
      img: "https://www.starbucks.ca/weblx/images/rewards/reward-tiers/025.png",
      title: "Customize your drink",
      des: "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favourite syrup.",
    },
    {
      id: 2,
      img: "https://www.starbucks.ca/weblx/images/rewards/reward-tiers/050.png",
      title: "Brewed hot coffee, bakery item or hot tea",
      des: "Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
    },
    {
      id: 3,
      img: "https://www.starbucks.ca/weblx/images/rewards/reward-tiers/150.png",
      title: "Handcrafted drink, hot breakfast or parfait",
      des: "Have a really good morning with a breakfast sandwich, oatmeal or your favourite drink.",
    },
    {
      id: 4,
      img: "https://www.starbucks.ca/weblx/images/rewards/reward-tiers/250.png",
      title: "Protein box or sandwich",
      des: "Nourish your day with a hearty Caprese Sandwich or Eggs & Cheese Protein Box.",
    },
    {
      id: 5,
      img: "https://www.starbucks.ca/weblx/images/rewards/reward-tiers/400.png",
      title: "Select merchandise or at-home coffee",
      des: "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
    },
  ];

  const [index, setIndex] = useState(0);

  const selectedCalories = (num) => {
    setIndex(num);
  };

  return (
    <main className="rating-container">
      <section className="inner-container">
        <div className="rate">
          <h1>Get your favourites for free</h1>
          <div className="star">
            <p onClick={() => selectedCalories(0)}>
              25<i className="fas fa-star"></i>
            </p>
            <p onClick={() => selectedCalories(1)}>
              50<i className="fas fa-star"></i>
            </p>
            <p onClick={() => selectedCalories(2)}>
              150<i className="fas fa-star"></i>
            </p>
            <p onClick={() => selectedCalories(3)}>
              250<i className="fas fa-star"></i>
            </p>
            <p onClick={() => selectedCalories(4)}>
              400<i className="fas fa-star"></i>
            </p>
          </div>
        </div>
        <div className="items">
          <img alt="coffee and food" src={data[index].img} />
          <div>
            <h2>{data[index].title}</h2>
            <p>{data[index].des}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Rating;
