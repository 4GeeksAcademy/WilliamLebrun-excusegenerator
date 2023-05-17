/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let element = document.querySelector(".excusegen");
  let who = ["The owl", "My gerble", "ninja turtles", "My boss"];
  let action = ["tore", "hid", "left stains", "threw"];
  let what = ["my shirt", "the wallet", "the tv"];
  let when = [
    "before the lunch",
    "",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whorand = Math.floor(Math.random() * who.length);
  let actionrand = Math.floor(Math.random() * action.length);
  let whatrand = Math.floor(Math.random() * what.length);
  let whenrand = Math.floor(Math.random() * when.length);

  console.log(
    who[whorand] +
      " " +
      action[actionrand] +
      " " +
      what[whatrand] +
      " " +
      when[whenrand]
  );
  element.innerHTML =
    who[whorand] +
    " " +
    action[actionrand] +
    " " +
    what[whatrand] +
    " " +
    when[whenrand];
};
