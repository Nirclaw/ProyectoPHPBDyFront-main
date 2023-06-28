export function mostrarcontact_info(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Id_staff</th>
    <th scope="col">Whatsapp</th>
    <th scope="col">address</th>
    <th scope="col">cel_number</th>
    <th scope="col">email</th>
    <th scope="col">linkedin</th>

    <th scope="col">instagram</th>
    

  </tr>
</thead>
<tbody id="datos">

</tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      vacio += `
      <tr>
      <th scope="row">${datos[key].id}</th>
      <td>${datos[key].id_staff}</td>
      <td>${datos[key].whatsapp}</td>
      <td>${datos[key].address}</td>
      <td>${datos[key].cel_number}</td>
      <td>${datos[key].email}</td>
      <td>${datos[key].linkedin}</td>
      <td>${datos[key].instagram}</td>
      <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
    <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>
    </th>
         </tr>    
   
              

      `;
    }
    
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}

export function mostrarchapters(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">id_thematic_units</th>
      <th scope="col">name_chapter</th>
      <th scope="col">start_date</th>
      <th scope="col">end_date</th>
      <th scope="col">description</th>
      <th scope="col">duration_days</th>
    </tr>
  </thead>
  <tbody id="datos">
  
  </tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      console.log(datos[key].nombre);
      vacio += `
        <tr>
        <th scope="row">${datos[key].id}</th>
        <td>${datos[key].id_thematic_units}</td>
        <td>${datos[key].name_chapter}</td>
        <td>${datos[key].start_date}</td>
        <td>${datos[key].end_date}</td>
        <td>${datos[key].description}</td>
        <td>${datos[key].duration_days}</td>
        <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
        <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>


        `;
    }
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}

export function mostralevels(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">name_level</th>
      <th scope="col">group_level</th>
    </tr>
  </thead>
  <tbody id="datos">
  
  </tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      console.log(datos[key].nombre);
      vacio += `
        <tr>
        <th scope="row">${datos[key].id}</th>
        <td>${datos[key].name_level}</td>
        <td>${datos[key].group_level}</td>
        <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
    <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>`;
    }
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}

export function mostraareas(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">name_area</th>
    </tr>
  </thead>
  <tbody id="datos">
  
  </tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      vacio += `
        <tr>
        <th scope="row">${datos[key].id}</th>
        <td>${datos[key].name_area}</td>
        <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
    <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>`;
    }
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}

export function mostrarcities(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">name_city</th>
      <th scope="col">id_region</th>
    </tr>
  </thead>
  <tbody id="datos">
  
  </tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      vacio += `
        <tr>
        <th scope="row">${datos[key].id}</th>
        <td>${datos[key].name_city}</td>
        <td>${datos[key].id_region}</td>
        <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
    <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>`;
    }
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}

export function mostrarjourney(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">name_journey</th>
      <th scope="col">check_in</th>
      <th scope="col">check_out</th>
    </tr>
  </thead>
  <tbody id="datos">
  
  </tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      vacio += `
        <tr>
        <th scope="row">${datos[key].id}</th>
        <td>${datos[key].name_journey}</td>
        <td>${datos[key].check_in}</td>
        <td>${datos[key].check_out}</td>
        <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
    <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>`;
    }
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}

export function mostrarpersonal_ref(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">full_name</th>
      <th scope="col">cel_number</th>
      <th scope="col">relationship</th>
      <th scope="col">occupation</th>
    </tr>
  </thead>
  <tbody id="datos">
  
  </tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      vacio += `
        <tr>
        <th scope="row">${datos[key].id}</th>
        <td>${datos[key].full_name}</td>
        <td>${datos[key].cel_number}</td>
        <td>${datos[key].relationship}</td>
        <td>${datos[key].occupation}</td>
        <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
    <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>`;
    }
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}

export function mostrarposition(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">name_position</th>
      <th scope="col">arl</th>
    
    </tr>
  </thead>
  <tbody id="datos">
  
  </tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      vacio += `
        <tr>
        <th scope="row">${datos[key].id}</th>
        <td>${datos[key].name_position}</td>
        <td>${datos[key].arl}</td>
        <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
    <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>
        `;
    }
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}

export function mostrarregions(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">name_region</th>
      <th scope="col">id_country</th>
    </tr>
  </thead>
  <tbody id="datos">
  
  </tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      vacio += `
        <tr>
        <th scope="row">${datos[key].id}</th>
        <td>${datos[key].name_region}</td>
        <td>${datos[key].id_country}</td>
        <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
    <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>`;
    }
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}

export function mostrarroutes(datos) {
  document.getElementById("fomulario").innerHTML = `<table class="table"> 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">start_date</th>
      <th scope="col">end_date</th>
      <th scope="col">description</th>
      <th scope="col">duration_month</th>
    </tr>
  </thead>
  <tbody id="datos">
  
  </tbody>`;

  let vacio = "";

  if (datos.length !== 0) {
    for (let key in datos) {
      vacio += `
        <tr>
        <th scope="row">${datos[key].id}</th>
        <td>${datos[key].start_date}</td>
        <td>${datos[key].end_date}</td>
        <td>${datos[key].description}</td>
        <td>${datos[key].duration_month}</td>
        <td><button  id="editar"  value="${datos[key].id}">EDITAR</button></td>
    <th scope="col"><button id="eliminar" value="${datos[key].id}">eliminar</button>`;
    }
  } else
    alert("la vace de datos esta vacia, ingrese valores a la base de datos ");
  document.getElementById("datos").innerHTML = vacio;
}
