import * as React from "react"
import { IAuthorsEntry } from "./models/authorsEntry";

interface IContentState {authors: IAuthorsEntry[]}

export const AuthorsContent = (props: IContentState) => 
      (
        <div className="content">
          <section className="home content-box-1200">
            <div className="flex">

              <div className="grid">
                {props.authors.length > 0 ? props.authors.map((entry, index)=> {
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