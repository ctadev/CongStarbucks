import React, {useState, useEffect} from "react";

function RewardHero() {
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

  if (width > 750) {
    return (
      <main className="rewardhero-container">
        <section>
          <div>
            <div>
              <h1>FREE COFFEE</h1>
              <h1 className="tap">IS A TAP AWAY.</h1>
            </div>
            <p>Join now to start earning Rewards.</p>
            <button className="desktop-btn">Join now</button>
            <p>
              Or <span>join in the app</span> for the best experience
            </p>
          </div>
        </section>
      </main>
    );
  }
  else {
    return (
      <main className="rewardhero-container">
        <section>
          <div>
            <div>
              <h1>FREE COFFEE</h1>
              <h1 className="tap">IS A TAP AWAY.</h1>
            </div>
            <p>Join now to start earning Rewards.</p>
            <button className="mobile-btn">Join in the app</button>
            <p>
              <span>Or join online</span>
            </p>
          </div>
        </section>
      </main>
    );
  }
}

export default RewardHero;
