import { mostrarcontact_info,mostrarchapters,mostralevels,mostraareas,mostrarcities,mostrarjourney,mostrarpersonal_ref,mostrarposition,mostrarregions,mostrarroutes } from "../views/mostrartablas.js";

export function show(url, infotabla) {
  switch (infotabla) {
    case "contact_info":
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          mostrarcontact_info(data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
      
    case "chapters":
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        mostrarchapters(data);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case "areas":
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        mostraareas(data);
      })
      .catch((error) => {
        console.log(error);
      });

      break;
    case "cities":
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        mostrarcities(data);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case "journey":
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        mostrarjourney(data);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case "levels":
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        mostralevels(data);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case "personal_ref":
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        mostrarpersonal_ref(data);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case "position":
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        mostrarposition(data);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case "regions":
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        mostrarregions(data);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case "routes":
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        mostrarroutes(data);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
  }
}
