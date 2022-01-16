import React from 'react'

function Body4() {
    return (
      <main className="body4-container">
        <section className="hero4">
          <div className="card">
            <img
              alt="phone"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-76033.png"
            />
            <div className="info">
              <h2>Your favourites. Your way.</h2>
              <p>
                Download the app to customize your drink, order ahead and earn Rewards.*
              </p>
              <button className='download'>Download the app</button>
            </div>
          </div>

          <div className="card">
            <img
              alt="uberEat"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-76034.jpg"
            />
            <div className="info">
              <h2>Coffee delivered. Day made.</h2>
              <p>
               Your go-to order can come to you! Check the Uber Eats app for availability and restrictions.**
              </p>
              <button>Order Now</button>
            </div>
          </div>
        </section>
      </main>
    );
}

export default Body4
