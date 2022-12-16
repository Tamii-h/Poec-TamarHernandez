import { useState, useEffect } from 'react';
import galaxia from '../../../assets/galaxia.png';

function Profile() {
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);
  const [nombre, setNombre] = useState('');
  const [img, setImg] = useState('');

  function save() {
    console.log('Nombre: ', nombre);
    setEditando(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setNombre('Tamar Hernandez');
      setImg(galaxia);
    }, 3000);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        background: 'Teal',
        borderRadius: '20px',

      }}
    >
      <img
        style={{
          borderRadius: 165,
        }}
        src={img || null}
        alt=""
        width={200}
        height={200}
        className={loading ? 'skeleton' : ''}
      />
      {editando ? (
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          type="text"
          placeholder="Nombres"
        />
      ) : (
        <h4 className={loading ? 'skeleton' : ''}>{nombre}</h4>
      )}
      <button
        variant="contained"
        color={editando ? 'primary' : 'secondary'}
        onClick={() => (editando ? save() : setEditando(true))}
      >
        {editando ? '✔️' : '✏️'}
      </button>
    </div>
  );
}
export default Profile;
