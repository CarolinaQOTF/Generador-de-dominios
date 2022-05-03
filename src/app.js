/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generate() {
    let pronoun = ["the", "our", "your"];
    let adj = [
      "great",
      "big",
      "happy",
      "little",
      "Fuck",
      "shit",
      "brave",
      "funny",
      "brave",
      "dirty",
      "cut",
      "tiny",
      "hollow",
      "square",
      "famous",
      "loud"
    ];
    let noun = [
      "jogger",
      "racoon",
      "cat",
      "dog",
      "beer",
      "style",
      "sky",
      "window",
      "heaven",
      "hell",
      "bird",
      "bacon",
      "ball",
      "hand",
      "spike",
      "cup",
      "cloud",
      "lips",
      "sexy",
      "head",
      "little devil"
    ];
    let final = [
      ".com",
      ".io",
      ".net",
      ".es",
      ".ve",
      ".ru",
      ".org",
      ".tech",
      ".onLine",
      ".blog"
    ];

    let dominio = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++)
        for (let k = 0; k < noun.length; k++)
          for (let l = 0; l < final.length; l++) {
            dominio.push(pronoun[i] + adj[j] + noun[k] + final[l]);
            console.log(pronoun[i] + adj[j] + noun[k] + final[l]);
          }
    }

    return dominio;
  }
  document.querySelector("#generador1").addEventListener("click", () => {
    var dominio2 = generate();
    let indexRandom = Math.floor(Math.random() * dominio2.length);
    document.querySelector("#dominio1").value = dominio2[indexRandom];
  });
};
