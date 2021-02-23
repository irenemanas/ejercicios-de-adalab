import photo from '../profile.jpg';
import '../style/App.scss';
import React from "react";
import MediaCard from './MediaCard';


function App() {
  const AppHeader = (
  <div>
    <div className="App-header">
        <img src={photo} className="profile-photo" alt="profilephoto" />
        <div className="name-date">
          <h1>Irene Mañas</h1>
          <h2 className="date">Martes 16 de febrero de 2021</h2>
        </div>
    </div>
  </div>
  );
  const AppText = ( 
    <p className="text">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ex illum cupiditate totam illo libero reiciendis iusto voluptatum, porro quos eveniet ad aliquam voluptatibus. Quis temporibus at laudantium neque iusto.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ex illum cupiditate totam illo libero reiciendis iusto voluptatum, porro quos eveniet ad aliquam voluptatibus. Quis temporibus at laudantium neque iusto.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ex illum cupiditate totam illo libero reiciendis iusto voluptatum, porro quos eveniet ad aliquam voluptatibus. Quis temporibus at laudantium neque iusto.
    </p> 
  );
  const AppFooter = (
    <div className="App-footer">
      <p className="read">Leer mas...</p>
      <p className="number">37</p>
      <i className="fa fa-heart" aria-hidden="true"></i>
    </div>
  );
  const AppReturn = (
    <div className="App">
      {AppHeader}{AppText}{AppFooter}
    </div>
  )
  return AppReturn;    
}
export default App;