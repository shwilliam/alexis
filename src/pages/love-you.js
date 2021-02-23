import React from "react";
import Confetti from "react-confetti";
import Helmet from "../components/helmet";

class LoveYouIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confetti: false };
  }
  render() {
    const startConfetti = () => {
      this.setState({ confetti: true });
    };

    return (
      <div className="love-you">
        <audio
          onPlay={startConfetti}
          style={
            this.state.confetti
              ? { position: "fixed", bottom: 0, right: 0, zIndex: 999 }
              : { position: "relative", top: "4rem" }
          }
          src="/tune.mp3"
          controls
        />
        {this.state.confetti && (
          <>
            <h1 className="sr-only">Love You</h1>
            <Helmet page="Love You" />
            <div className="love-you-img">
              {Array.from({ length: 18 })
                .map((_, idx) => <img src={`/vday/${idx + 1}.jpg`} />)
                .reverse()}
            </div>
            <Confetti
              style={{ margin: "0 auto" }}
              height={window.innerHeight * 12}
              width={window.innerWidth}
              colors={["red"]}
              numberOfPieces={100}
              drawShape={(ctx) => {
                ctx.beginPath();
                ctx.moveTo(75, 40);
                ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
                ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
                ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
                ctx.fill();
              }}
            />
            <p className="love-you-mssg">Love you, noonchie 🐢</p>
          </>
        )}
      </div>
    );
  }
}

export default LoveYouIndex;
