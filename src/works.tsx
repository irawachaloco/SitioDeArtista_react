import * as React from "react"
import { IWorksEntry } from "./models/worksEntry";

interface IContentState {works: IWorksEntry[]}

export const WorksContent = (props: IContentState) => 
      (
        <div className="content">
          <section className="home content-box-1200">
            <div className="flex">

              <div className="grid">
                {props.works.length > 0 ? props.works.map((entry, index)=> {
                  return (
                    <div className="grid-item" key={index}>
                      <h1>{ entry.title }</h1>
                      <div>{ entry.authorName }</div>
                      {(entry.subWorks || []).map( w => {
                        return (
                          <div key={w.title}>
                            <div>{ w.title }</div>
                            <div>{ w.year }</div>
                          </div>
                          
                        );
                      })} 
                    </div>
                    );
                }) : <div></div>}
              </div>
            </div>
          </section>
        </div>
        );