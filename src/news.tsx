import * as React from "react";
import * as rx from "rxjs";

const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

interface IContentState {data: any[]}
export class Content extends React.Component<undefined, IContentState> {
  constructor() {
    super();
    this.state = {
      data: [],
    };

    rx.Observable.ajax({
      url:'/api/news'
    })
      .map(r => r.response)
      .subscribe(
        next => {
          this.setState((prevState) => ({
            data: next.data
          }));
          console.log(next.data);
        },
        error => {
          console.log('error', error);
        },
        () => {
          console.log('complete');
        }
      );
  }
  render() {
      return (
        <div className="content">
          <section className="home content-box-1200">
            <div className="flex">
             
                {this.state.data.length > 0 ? this.state.data.map((entry, index)=> {
                  return (
                    <div className="" key={index}>
                      <h1>{ entry.title }</h1>
                    </div>
                    );
                }) : <div></div>}
             
              <div className="news flex-1">
                <h2>Somme news</h2>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              </div>
            </div>
          </section>
        </div>
        );
    }
}

