import React from 'react';
class App extends React.Component {
  render() {
    const students = [
      {
        promo: 'A',
        name: 'Sofía',
        age: 20,
      },
      {
        promo: 'B',
        name: 'María',
        age: 21,
      },
      {
        promo: 'A',
        name: 'Lucía',
        age: 22,
      },
    ];
    //mejor usar filter que if, una función siempre devuelve algo, si entra por el else devuelve undefined, react es lo suficiente listo como para no pintar nada, pero no es elegante. Además mezclamos acciones, filtramos y pintamos, mejorpreparar los datos antes en una constante (con filter en este caso) y en return pintar.
    //primero filtro
    const filterStudents = students.filter((student) => {
      return student.promo === "A";
    });
    //después mapeo
    const result = filterStudents.map((student, index) => {
      // cada return retorna un li
      return (
        <li key={index}>
          <h2>Nombre estudiante: {student.name}</h2>
          <p>Edad: {student.age}</p>
        </li>
      );
    });
    return (
      <div>
        <h1>Pintar adalabers con React:</h1>
        {result}
      </div>
    );
  }
}
export default App;


