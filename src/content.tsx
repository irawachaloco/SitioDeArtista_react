import * as React from "react";
import * as Slider from "react-slick";
import * as rx from "rxjs";
import { client } from './client';
import { INewsEntry } from "./models/newsEntry";
import { IContentObserverProps, ContentObserver } from "./contentObserver";

const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

interface IContentState {news: INewsEntry[]}

const NewsContent = (props: IContentState) => 
      (
        <div className="content">
          <section className="home content-box-1200">
            <div className="flex">
              <Slider {...settings} className="slider flex-2">
                {props.news.length > 0 ? props.news.map((entry, index)=> {
                  return (
                    <div className="slide-item" key={index}>
                      <h1>{ entry.title }</h1>
                    </div>
                    );
                }) : <div></div>}
              </Slider>
              <div className="news flex-1">
                <h2>Somme news</h2>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              </div>
            </div>
          </section>
        </div>
        );

// Ahora vamos a extender nuestro control y lo vamos a convertir en un control que acepta Observables:
interface IReactContentProps extends IContentObserverProps<INewsEntry[]> {
}
export class Content extends ContentObserver<INewsEntry[], IReactContentProps> {
    navigationAction: (a: INewsEntry) => void;
    constructor (props: IReactContentProps) {
        super(props);
    }
    render () {
        return <NewsContent news={this.state.data}  />;
    }
}







//Jugando con observables
/*rx.Observable.range(1,4)
  .map( n => n*2 )
  .flatMap( n => rx.Observable.range(1,n))
  .filter( n => n % 2 === 0 )
  .subscribe(
    next => {
      console.log('next', next);
    },
    error => {
      console.log('error', error);
    },
    () => {
      console.log('complete');
    }
  );*/

  // of > unit: convierte un valor en un bolsa
  // range, from, interval...

  //básicos: of(unit) + map(devuelve otra bolsa) + flatMap(desenvuelve los objetos de la bolsa grande)
  //Se debe cumplir reglas para estos observables (son reglas matemáticas: objetos llamados 'mónadas')