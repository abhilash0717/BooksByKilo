import React, {useState} from "react";
import { Component } from "react";
import "../App.css";

// export default class SlideShow extends Component{
    export default function SlideShow() {
        const dataSlider = [
            {
              id: "1",
            },
            {
              id: "2",
            },
            {
              id: "3",
            },
          ];
        const [slideIndex, setSlideIndex] = useState(1)
  
        const moveDot = index => {
            setSlideIndex(index)
        }
    
        return (
            <div className="container-slider">
                {/* we are using map function because we are creating array */}
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img 
                            src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                            />
                        </div>
                    )
                })}
    {/* for creating dot we are using array function  */}
                <div className="container-dots">
                    {Array.from({length: 3}).map((item, index) => (
                        <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
        )
    }