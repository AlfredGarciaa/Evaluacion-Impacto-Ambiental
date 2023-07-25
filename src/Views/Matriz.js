// Función para crear y mostrar una matriz de Leopold
function crearMatrizLeopold() {
    const matrizLeopold = [
      ['Factor 1', 'Factor 2', 'Factor 3', 'Factor 4'],
      ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'],
      ['Elemento 5', 'Elemento 6', 'Elemento 7', 'Elemento 8'],
      ['Elemento 9', 'Elemento 10', 'Elemento 11', 'Elemento 12'],
    ];
  
    // Crear una tabla para mostrar la matriz
    const tabla = document.createElement('table');
    tabla.style.borderCollapse = 'collapse';
  
    // Recorrer la matriz y crear filas y celdas
    matrizLeopold.forEach((fila) => {
      const filaTabla = document.createElement('tr');
  
      fila.forEach((elemento) => {
        const celdaTabla = document.createElement('td');
        celdaTabla.textContent = elemento;
        celdaTabla.style.border = '1px solid black';
        celdaTabla.style.padding = '8px';
        filaTabla.appendChild(celdaTabla);
      });
  
      tabla.appendChild(filaTabla);
    });
  
    // Mostrar la tabla en la página
    document.body.appendChild(tabla);
  }
  
  // Llamar a la función para mostrar la matriz de Leopold
export default crearMatrizLeopold;