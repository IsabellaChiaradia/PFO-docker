fetch('/personas')
  .then(response => response.json())
  .then(personas => {
    const tbody = document.querySelector('#tabla-personas tbody');
    tbody.innerHTML = ''; // limpia tabla

    personas.forEach(p => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${p.id}</td>
        <td>${p.nombre}</td>
        <td>${p.apellido}</td>
      `;
      tbody.appendChild(fila);
    });
  })
  .catch(err => {
    console.error('Error al cargar personas:', err);
  });
