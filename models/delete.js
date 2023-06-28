export function delet(url,objeto) {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(objeto)
    })
      .then((response) => {
        if (response.ok) {
          alert("El recurso ha sido eliminado exitosamente.");
        } else {
          alert("No se pudo eliminar el recurso.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }