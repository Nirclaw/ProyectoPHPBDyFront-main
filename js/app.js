import {
  contact_info,
  chapters,
  areas,
  cities,
  journey,
  levels,
  personal_ref,
  position,
  regions,
  routes,
} from "./formularios.js";

import { post } from "../models/post.js";
import { show } from "../models/show.js";
import { delet } from "../models/delete.js";

const formulario = document.getElementById("fomulario");
const target = document.getElementById("target");
const tablas = document.getElementById("tablas");
const infoTabla = document.getElementById("tabalasMostrar");
const URL = "http://localhost/ProyectoPHPBDyFront/uploads/";

tablas.addEventListener("click", function (e) {
  switch (e.target.id) {
    case "contact_info":
      target.innerHTML = `<a href="#">${e.target.id}</a>`;
      formulario.innerHTML = contact_info;

      break;

    case "chapters":
      formulario.innerHTML = chapters;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "areas":
      formulario.innerHTML = areas;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "cities":
      formulario.innerHTML = cities;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "journey":
      formulario.innerHTML = journey;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "levels":
      formulario.innerHTML = levels;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "personal_ref":
      formulario.innerHTML = personal_ref;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "position":
      formulario.innerHTML = position;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "regions":
      formulario.innerHTML = regions;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "routes":
      formulario.innerHTML = routes;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
  }
});
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  switch (e.submitter.id) {
    case "editar":
 console.log('hola');      

      break;

    case "eliminar":
      let url2 = URL + target.innerText + "/delete";
      console.log(target.innerText);
      let datos2 = { id: e.submitter.value };
      delet(url2, datos2);
      console.log("eliminar");

      break;
    case "enviar":
      let url = URL + target.innerText + "/create";

      let datos = Object.fromEntries(new FormData(formulario));

      document.querySelector(".modal-body").textContent = "Creado con exito";

      post(url, datos);

      e.stopPropagation();
      formulario.reset();
      break;
  }
});

infoTabla.addEventListener("click", function (e) {
  console.log(e.target.id);

  switch (e.target.id) {
    case "contact_info":
      let url = URL + e.target.id;

      target.innerHTML = `<a href="#">${e.target.id}</a>`;
      formulario.innerHTML = show(url, "contact_info");

      break;

    case "chapters":
      let url2 = URL + e.target.id;

      target.innerHTML = `<a href="#">${e.target.id}</a>`;
      formulario.innerHTML = show(url2, "chapters");

      break;
    case "areas":
      let url3 = URL + e.target.id;

      target.innerHTML = `<a href="#">${e.target.id}</a>`;
      formulario.innerHTML = show(url3, "areas");

      break;
    case "cities":
      let url4 = URL + e.target.id;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;
      formulario.innerHTML = show(url4, "cities");

      break;
    case "journey":
      let url5 = URL + e.target.id;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;
      formulario.innerHTML = show(url5, "journey");

      break;
    case "levels":
      let url6 = URL + e.target.id;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;
      formulario.innerHTML = show(url6, "levels");

      break;
    case "personal_ref":
      let url7 = URL + e.target.id;
      target.innerHTML = `<a href="#">${e.target.id}</a>`;
      formulario.innerHTML = show(url7, "personal_ref");

      break;
    case "position":
      let url8 = URL + e.target.id;
      formulario.innerHTML = show(url8, "position");
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "regions":
      let url9 = URL + e.target.id;
      formulario.innerHTML = show(url9, "regions");
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
    case "routes":
      let url10 = URL + e.target.id;
      formulario.innerHTML = show(url10, "routes");
      target.innerHTML = `<a href="#">${e.target.id}</a>`;

      break;
  }
});
