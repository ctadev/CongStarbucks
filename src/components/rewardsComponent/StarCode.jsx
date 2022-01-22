import React from "react";

function StarCode() {
  return (
    <main className="starcode-container">
      <section className="inner-container">
        <div className="container">
          <h1>Star Codes</h1>
          <p>
            Yesssss. You’ve got Stars in your hand. Enter your code here and
            we’ll add Stars to your account.
          </p>
          <input type="text" placeholder="Enter your Star Code" />
          <div className="submit-btn">
            <button>Submit</button>
          </div>
          <div className="receipt">
            <p>Have a receipt but don't have a code?</p>
            <p>
              Go to <span>starbucks-stars.ca</span> to upload your receipt and
              collect your Stars.
            </p>
          </div>
          <div className="question">
            <h1>Questions?</h1>
            <p>
              We want to help in any way we can. You can ask your barista
              anytime or we’ve
            </p>
            <p className="rightover">
              answered the most commonly asked questions
              <span>right over here.</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StarCode;
