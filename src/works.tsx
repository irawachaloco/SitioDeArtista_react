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
                    </div>
                    );
                }) : <div></div>}
              </div>
            </div>
          </section>
        </div>
        );