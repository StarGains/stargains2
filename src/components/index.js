import { Component } from "react";
import img1 from "../img1.png";
import img2 from "../img2.png";
import img3 from "../img3.png";
import "./index.css";

import MyVerticallyCenteredModal from "./modal/index";
//3877619c-f75b-463a-9c10-4822c8d78e7f
class Stocks extends Component {
  state = {
    check: false,
    email: "",
    error: "",
  };

  sendEmail = () => {
    const { email } = this.state;
    const config = {
      Host: "smtp.elasticemail.com",
      Username: "stargainsdeportment@gmail.com",
      Password: "D061A8DDF6F1996F0ACD0EC7FB4E7FEFF69C",
      Port: 2525,
      To: "stargainsreportbot@gmail.com",
      From: "stargainsdeportment@gmail.com",
      Subject: "stargains",
      Body: `${email} has accepted terms and condition`,
    };
    if (window.Email) {
      window.Email.send(config).then((message) =>
        alert("submitted successfully")
      );
      const config2 = {
        Host: "smtp.elasticemail.com",
        Username: "stargainsdeportment@gmail.com",
        Password: "D061A8DDF6F1996F0ACD0EC7FB4E7FEFF69C",
        Port: 2525,
        To: email,
        From: "stargainsdeportment@gmail.com",
        Subject: "Your Gateway for Investing!",
        Body: "We had recieved your response. Thank You for Joining Us.",
      };
      window.Email.send(config2);
    }
  };

  isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  handleCheck = (e) => {
    this.setState({ check: e.target.checked });
    if (e.target.checked === true) {
      this.setState({ error: "" });
    }
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { check, email, error } = this.state;
    return (
      <div className="page-container">
        <div className="page-body">
          <div>
            <h1 className="wealth-heading">StarGains</h1>
            <hr />
          </div>
          {/** div one */}
          <div className="first-div">
            <img className="first-image" src="https://res.cloudinary.com/dpbgpoh76/image/upload/v1669461109/img1_b29trd.png" alt="img1" />
            <div>
              <p className="p1">Your Gateway for Investing!</p>
              <img className="first-image2" src={img1} alt="img1" />
              <p className="p2">
                Traders and Investors in India use our stable and reliable
                platforms regularly
                <br />
                <br />
                Tradings have risk and also brings a lot of fortune. It was like
                rollercoaster that depends on the market to go forward.
                <br />
                <br />
                With us you can always trade safe
              </p>
            </div>
          </div>
          {/** second div */}
          <div className="first-div">
            <div>
              <p className="p1">User Friendly Trading</p>
              <img className="first-image2" src={img2} alt="img1" />
              <p className="p3">
                {" "}
                A Trained research team will send BUY/SELL recommendations on
                the basis of technical analysis.
              </p>

              <p className="p3">
                With our trading strategies, and research backed tips you will
                minimise risks and maximise returns.
              </p>
            </div>
            <img className="first-image" src="https://res.cloudinary.com/dpbgpoh76/image/upload/v1669461112/img2_uh6joh.png" alt="img1" />
          </div>

          {/** third div */}
          <div className="last-div">
            <img className="first-image" src="https://res.cloudinary.com/dpbgpoh76/image/upload/v1669461114/img3_ro0oaj.png" alt="img1" />
            <div>
              <p className="p1">Unmatched Guidance sharing</p>
              <img className="first-image2" src={img3} alt="img1" />
              <p className="p2">
                The price of a stock moves on the basis of any news,
                fundamentals, technical analysis, and so on.
                <br />
                <br />
                By gaining knowledge about these aspects, you can enhance your
                knowledge of stocks and stock markets. This will help you to
                figure out the right price to enter or exit a trade.
              </p>
              <div className="buttons-div">
                <a
                  href="https://www.moneycontrol.com/markets/indian-indices/?wl=indices"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="b1">Live Market</button>
                </a>
                <a
                  href="https://www.cnbctv18.com/live-tv/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="b2">Live News</button>
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="terms-div">
          <h2 className="terms"> Terms and conditions</h2>
          <ol>
            <li>
              Once after registering with us for our service calls, amount will
              not be refunded.
            </li>
            <li>
              Our calls depend on the NSE daily updates and different market
              levels and strategies.
            </li>
            <li>
              {" "}
              We are not responsible for the profits and losses of the clients
              with our daily calls. Those calls purely depend on the market
              levels.
            </li>
            <li>
              We don't handle client accounts until unless he requests us to
              handle his account.
            </li>
            <li>
              Neither our team persons nor our company is not responsible for
              the profits and losses of the clients money in the dmat account.
            </li>
          </ol>
        </div>
        {/**check box */}
        <div className="check-container">
          <div className="todo-check">
            <input
              type="checkbox"
              checked={check}
              onChange={(e) => {
                this.handleCheck(e);
              }}
            />
          </div>
          <p className="todo-para">
            I hereby accept all the Terms & Conditions.
          </p>
        </div>

        {/**email */}
        <div className="email-container">
          <div className="todo-email">
            <input
              value={email}
              placeholder="enter your email"
              className="todo-email-input"
              onChange={(e) => {
                this.setState({ email: e.target.value });
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (re.test(e.target.value)) {
                  this.setState({ error: "" });
                } else {
                  this.setState({ error: "*please enter a vaild email" });
                }
              }}
            />
          </div>
          <div>
            {check ? (
              <div>
                <button
                  className="btn btn-primary todo-button"
                  onClick={() => {
                    if (email === "") {
                      this.setState({ error: "*please enter your email" });
                    } else {
                      this.setState({ error: "" });
                      this.sendEmail();
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="btn btn-outline-secondary todo-button"
                  onClick={() => {
                    this.setState({
                      error: "*please accept terms and condition",
                    });
                  }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="email-container">
          <p className="error">{error}</p>
        </div>
        <div className="email-container">
          <MyVerticallyCenteredModal />
        </div>
      </div>
    );
  }
}

export default Stocks;
