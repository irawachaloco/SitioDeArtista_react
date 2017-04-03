import * as React from "react";
import * as Slider from "react-slick";
import * as rx from "rxjs";

const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
export const Content = () => 
    <div className="content">
      <section className="home content-box-1200">
        <div className="flex">
          <Slider {...settings} className="slider flex-2">
            <div className="slide-item">
              <img src="assets/images/ecce-homo.jpg" alt=""/>
            </div>
            <div className="slide-item">
              <img src="assets/images/cafe.jpg" alt=""/>
            </div>
          </Slider>
          <div className="news flex-1">
            <h2>Somme news</h2>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          </div>
        </div>
      </section>
    </div>;

window.rx = rx;