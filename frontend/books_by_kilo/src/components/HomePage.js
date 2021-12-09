import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";
import "../App.css";
import Footer from "./Footer";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://www.booksbykilo.in/media/staticimages/Homepage-main-banner3.png",
  },
  {
    url: "https://www.booksbykilo.in/media/staticimages/Homepage-main-banner1.png",
  },
  {
    url: "https://www.booksbykilo.in/media/staticimages/Homepage-main-banner2.png",
  },
];

export default class HomePage extends Component {
  newBooks = () => {
    console.log("clicked");
    window.location = "/newBooks";
  };
  premiumCollection = () => {
    console.log("clicked");
    window.location = "/premiumCollection";
  };
  classicCollection = () => {
    console.log("clicked");
    window.location = "/classicCollection";
  };
  standardCollection = () => {
    console.log("clicked");
    window.location = "/standardCollection";
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="row">
          <div className="col-md-3" style={{ marginLeft: "20px" }}>
            <div className="card">
              <div className="card-body">
                <img
                  style={{ width: "100%" }}
                  src="https://www.booksbykilo.in/media/staticimages/HomepageNewBooks.png"
                />
                <h5 style={{ marginRight: "135px" }}>New books</h5>
                <div className="row">
                  <div className="col-md-7">
                    <h6>Discount of 80%</h6>
                    <p>New best-selling releases</p>
                  </div>
                  <div className="col-md-5">
                    <div className="button2">
                      <button
                        className="btn button2"
                        onClick={() => this.newBooks()}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ marginLeft: "-10px" }}>
            <div className="card">
              <div className="card-body">
                <img
                  style={{ width: "100%" }}
                  src="https://www.booksbykilo.in/media/staticimages/HomepagePremium.png"
                />
                <h5 style={{ marginRight: "100px" }}>Premium Books</h5>
                <div className="row">
                  <div className="col-md-7">
                    <h6>Books at ₹499/kg</h6>
                    <p>Dive into the world of best sellers</p>
                  </div>
                  <div className="col-md-5">
                    <div className="button2">
                      <button
                        className="btn button2"
                        onClick={() => this.premiumCollection()}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ marginLeft: "-10px" }}>
            <div className="card">
              <div className="card-body">
                <img
                  style={{ width: "100%" }}
                  src="https://www.booksbykilo.in/media/staticimages/HomepageClassic.jpg"
                />
                <h5 style={{ marginRight: "120px" }}>Classic Books</h5>
                <div className="row">
                  <div className="col-md-7">
                    <h6>Books at ₹399/kg</h6>
                    <p>Explore books and get hooked</p>
                  </div>
                  <div className="col-md-5">
                    <div className="button2">
                      <button
                        className="btn button2"
                        onClick={() => this.classicCollection()}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-3"
            style={{ marginLeft: "-20px", marginTop: "0px" }}
          >
            <div className="card">
              <div className="card-body">
                <img
                  style={{ width: "100%" }}
                  src="https://www.booksbykilo.in/media/staticimages/HomepageStandard.jpg"
                />
                <h5 style={{ marginRight: "100px" }}>Standard Books</h5>
                <div className="row">
                  <div className="col-md-7">
                    <h6>Books at ₹299/kg</h6>
                    <p>Rediscover reading with our books</p>
                  </div>
                  <div className="col-md-5">
                    <div className="button2">
                      <button
                        className="btn button2"
                        onClick={() => this.standardCollection()}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      <div className="row">
     <c>  <div className="col-md-8">
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={0.5}
            autoPlay={true}
            autoPlayDelay={3.0}
          />
        </div></c>
      <c>  <div className="col-md-2" style={{paddingTop: "10px"}}>
          <div className="row">
          <img style={{width:"350px", borderRadius:"20px"}} src="https://png.pngitem.com/pimgs/s/523-5234612_google-reviews-hd-png-download.png"/>
          </div>
          <div className="row" style={{paddingTop: "50px"}}>
          <img style={{width:"350px", borderRadius:"20px"}} src="https://growtraffic-bc85.kxcdn.com/blog/wp-content/uploads/2019/01/Amazon-5-Star-Review-Illustration.jpg"/>
          </div></div></c></div>
        <br />
        <br />

        <div>
          <div className="row">
            <div className="col-md-3" style={{ marginLeft: "20px" }}>
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "100%" }}
                    src="https://www.booksbykilo.in/media/staticimages/Homepage-informative-activity-Books.jpg"
                  />
                  <h5 style={{ marginRight: "60px" }}>Informative/Activity</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <h6>Discount of 80%</h6>
                      <p>New best-selling releases</p>
                    </div>
                    <div className="col-md-5">
                      <div className="button2">
                        <button
                          className="btn button2"
                          onClick={() => this.newBooks()}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ marginLeft: "-10px" }}>
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "100%" }}
                    src="https://www.booksbykilo.in/media/staticimages/HomepageBookunder100.jpg"
                  />
                  <h5 style={{ marginRight: "70px" }}>Books Under 100 Rs </h5>
                  <div className="row">
                    <div className="col-md-7">
                      <h6>Books at ₹499/kg</h6>
                      <p>Dive into the world of best sellers</p>
                    </div>
                    <div className="col-md-5">
                      <div className="button2">
                        <button
                          className="btn button2"
                          onClick={() => this.premiumCollection()}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ marginLeft: "-10px" }}>
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "100%" }}
                    src="https://www.booksbykilo.in/media/staticimages/HomepageFictionNonFiction.png"
                  />
                  <h5 style={{ marginRight: "45px" }}>Fiction & Non Fiction</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <h6>Books at ₹399/kg</h6>
                      <p>Explore books and get hooked</p>
                    </div>
                    <div className="col-md-5">
                      <div className="button2">
                        <button
                          className="btn button2"
                          onClick={() => this.classicCollection()}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-3"
              style={{ marginLeft: "-20px", marginTop: "0px" }}
            >
              <div className="card">
                <div className="card-body bg-image hover-zoom">
                  <img
                    style={{ width: "80%" }}
                    src="https://www.booksbykilo.in/media/staticimages/Homepagekids.png"
                  />

                  <h5 style={{ marginRight: "70px" }}>Childeren Books</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <p>Rediscover reading with our books</p>
                    </div>
                    <div className="col-md-5">
                      <div className="button2">
                        <button
                          className="btn button2"
                          onClick={() => this.standardCollection()}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div>
          <div className="row">
            <div
              className="col-md-3"
              style={{ marginLeft: "20px", marginTop: "0px" }}
            >
              <div className="card">
                <div className="card-body bg-image hover-zoom">
                  <img
                    style={{ width: "80%" }}
                    src="https://www.booksbykilo.in/media/staticimages/Homepagebulk.png"
                  />

                  <h5 style={{ marginRight: "70px" }}>Books in bulk</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <p>Rediscover reading with our books</p>
                    </div>
                    <div className="col-md-5">
                      <div className="button2">
                        <button
                          className="btn button2"
                          onClick={() => this.standardCollection()}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "100%" }}
                    src="https://www.booksbykilo.in/media/staticimages/Homepage-teen-fiction-Books.jpg"
                  />
                  <h5 style={{ marginRight: "140px" }}>Teen fiction</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <h6>Discount of 80%</h6>
                      <p>New best-selling releases</p>
                    </div>
                    <div className="col-md-5">
                      <div className="button2">
                        <button
                          className="btn button2"
                          onClick={() => this.newBooks()}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ marginLeft: "-10px" }}>
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "100%" }}
                    src="https://www.booksbykilo.in/media/staticimages/HomepageBestSellingAuthors.jpg"
                  />
                  <h5 style={{ marginRight: "70px" }}>Best selling authors</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <h6>Books at ₹499/kg</h6>
                      <p>Dive into the world of best sellers</p>
                    </div>
                    <div className="col-md-5">
                      <div className="button2">
                        <button
                          className="btn button2"
                          onClick={() => this.premiumCollection()}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ marginLeft: "-10px" }}>
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "100%" }}
                    src="https://www.booksbykilo.in/media/staticimages/HomepageOnlineLibrary.png"
                  />
                  <h5 style={{ marginRight: "45px" }}>Books under 100 gm</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <h6>Books ₹399/kg</h6>
                      <p>Explore books and get hooked</p>
                    </div>
                    <div className="col-md-5">
                      <div className="button2">
                        <button
                          className="btn button2"
                          onClick={() => this.classicCollection()}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </>
    );
  }
}
