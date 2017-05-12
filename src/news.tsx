import * as React from "react"
import * as Slider from "react-slick";
import { INewsEntry } from "./models/newsEntry";

const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

interface IContentState {news: INewsEntry[]}

export const NewsContent = (props: IContentState) => 
      (
        <div className="content">
          <section className="home content-box-1200">
            <div className="flex">
              <Slider {...settings} className="slider flex-2">
                {props.news.length > 0 ? props.news.map((entry, index)=> {
                  return (
                    <div className="slide-item" key={index}>
                      <h1>{ entry.title }</h1>
                      <div>{ entry.date }</div>
                      <img src={ entry.image } alt=""/>
                    </div>
                    );
                }) : <div></div>}
              </Slider>
            </div>
          </section>
        </div>
        );