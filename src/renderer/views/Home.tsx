import Menus from 'renderer/componentes/Menus';
import Profile from './Profile';

function Home() {
  return (
    <div className="App">
      <Menus />
      <br />
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default Home;
