type ComponentesBoton = {
  nombre: string;
  link: string;
};

function BotonLink({ nombre, link }: ComponentesBoton) {
  return (
    <a target="_blank" href={link} rel="noreferrer">
      <button>{nombre}</button>
    </a>
  );
}

export default BotonLink;
