import './assets/scss/main.scss'
import Handlebars from "handlebars";
import iconExercise from '@/assets/images/icon-exercise.svg';

let app = document.querySelector<HTMLDivElement>("#app")!

let templateString = document.querySelector("#entry-template")!.innerHTML
const template = Handlebars.compile(templateString);

app.innerHTML += template({
  name: 'Jeremy Robson',
  timeCategories: [{ category: 'Daily' }, { category: 'Weekly' }, { category: 'Monthly' }]
})