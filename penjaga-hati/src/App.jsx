import { useEffect, useState } from 'react'
import './assets/vara.min.js'

function App() {
const fontSize = window.screen.width < 1200 ? 55 : 80;

useEffect(() => {
  var vara = new Vara(
  	"#container",
  	"https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
    [
      {
        text : "Karna bersamamu semua terasa indah",
        y: 150,
        fromCurrentPosition: {
          y:false
        },
        delay: 1000,
        duration: 4500
      },
      {
        text : "Gundah gulana hatiku pun hancur sirna",
        y: 150,
        fromCurrentPosition: {
          y:false
        },
        delay: 1500,
        duration: 4500
      },
      {
        text : "janji ku tak kan ku lepas",
        y: 150,
        fromCurrentPosition: {
          y:false
        },
        delay: 1000,
          duration: 2500
      },
      {
        text : "wahai kau bidadariku dari surga",
        y: 150,
        fromCurrentPosition: {
          y:false
        },
        delay: 1000,
        duration: 4000
      },
      {
        text : "tuk selamanya",
        y: 150,
        fromCurrentPosition: {
          y:false
        },
        delay: 1300,
        duration:3200
      },
    ],
    {
      strokeWidth: 2,
      color:"#fff",
      fontSize: fontSize,
      textAlign:"center"
    }
  );
  vara.ready(function(){
    var erase = true;
    vara.animationEnd(function(i, o){
        if (i == "no_erase") erase = false; 
        if (erase) {
          o.container.style.transition = "opacity 1s 1s";
          o.container.style.opacity = 0;
        }
    });
  });
}, []);


  return (
    <>
      <div id="container"></div>
        <a href="" className="hidden"></a>
        <div className="wrapper">
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </>
  )
}

export default App
