import './assets/scss/main.scss'
import Handlebars from "handlebars";
// import Remus from 'remusjs';

let app = document.querySelector<HTMLDivElement>("#app")!


// let remus = new Remus({
//   element: '.remus', // selector for main Remus container
//   height: null // height value in pixels if you want it to be fixed - optional
// });

let templateString = document.querySelector("#entry-template")!.innerHTML
const template = Handlebars.compile(templateString);

app.innerHTML += template({
  name: 'Jeremy Robson',
  timeCategories: [{ category: 'Daily' }, { category: 'Weekly' }, { category: 'Monthly' }]
})