import BotonLink from 'renderer/componentes/componenteLink';
import galaxia from '../../../assets/galaxia.jpeg';

function Home() {
  const titulo = 'BIENVENIDOS';

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img width="200" src={galaxia} />
      <br />
      <br />

      <BotonLink
        nombre="Classroom"
        link="https://classroom.google.com/u/0/c/Mjg0MDIzNjg3MTQ4?hl=es"
      />
      <BotonLink nombre="Github" link="https://github.com/" />
    </div>
  );
}

export default Home;
