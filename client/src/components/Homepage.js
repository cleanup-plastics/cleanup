import React, { Component } from "react";
import "./Homepage.css";
import Carousel from "react-elastic-carousel";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import accordionData from "../accordionData.json";

class Homepage extends Component {
  state = {
    accordionToggled: false,
  };

  toggleAccordion = () => {
    this.setState((state) => ({
      accordionToggled: !state.accordionToggled,
    }));
  };

  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];

    return (
      <div>
        <header>
          <div className="header-img"></div>
        </header>
        <div className="section">
          <h1>Welcome to cleanup - aiming for a plastic-free world</h1>
          <p>
            A recent study released by the 5 Gyres Institute estimates that
            there are currently 5.25 trillion plastic particles in the ocean.
            Sources of this waste are wide ranging including plastic fishing
            nets, food and beverage containers, microbeads from personal care
            items, cosmetics, straws, and bags just to name a few.. It is
            estimated that ingestion of plastic kills 1 million marine birds and
            100,000 marine animals each year. It is more than a tremendous
            plastic problem in our food chain, plastics entangle marine animals
            and make movement impossible - killed by plastic bottles, can
            holders, plastic based fishing nets, because we have failed to
            recycle properly. Only 12% of our plastic waste will be recycled the
            rest goes into landfills or into the ocean..
          </p>
          <a href="https://www.5gyres.org/faq" target="blank">
            Read more
          </a>
        </div>

        <div className="section">
          <h2>What can you do?</h2>
          <div className="flex-container">
            <div className="flex-column info-box">
              <h3>Cleanup events</h3>
              <p>
                Join or organise a cleanup event in your neighbourhood or during
                your holidays!
              </p>
            </div>
            <div className="flex-column info-box">
              <h3>Avoid using plastic</h3>
              <p>
                Reduce the amount of plastic that you use and start
                transitioning to a zero-waste lifestyle!
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Some impressions from our cleanup events:</h2>
          <Carousel breakPoints={breakPoints}>
            <img src={image1} alt="no pic" className="slider-img" />
            <img src={image2} alt="no pic" className="slider-img" />
            <img src={image3} alt="no pic" className="slider-img" />
            <img src={image4} alt="no pic" className="slider-img" />
            <img src={image5} alt="no pic" className="slider-img" />
            <img src={image6} alt="no pic" className="slider-img" />
          </Carousel>
        </div>

        <div className="section flex-column">
          {accordionData.map((accordionItem) => {
            return (
              <div className="accordion-container">
                <button onClick={this.toggleAccordion}>
                  {accordionItem.label}
                </button>
                {this.state.accordionToggled && <p>{accordionItem.content}</p>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Homepage;
