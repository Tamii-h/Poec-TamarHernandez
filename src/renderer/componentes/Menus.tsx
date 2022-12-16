import { useState } from 'react';
import MenuModel from 'renderer/Models/MenuModel';
import Menu from './Menu';

export default function Menus() {
  const menus: MenuModel[] = [
    { texto: 'Archivo', options: ['Guardar', 'Abrir', 'Cerrar'] },
    { texto: 'Editar', options: ['Copiar', 'Pegar', 'Cortar'] },
    { texto: 'archivo', options: ['Ver', 'Vistas'] },
    { texto: 'archivo', options: ['Actualizar', 'Ver mas'] },
  ];

  const [show, setShow] = useState<number>();

  return (
    <div className="meenu">
      <div
        className="title-bar"
        onClick={() => setShow(undefined)}
        style={{ display: show !== undefined ? 'block' : 'none' }}
      />

      {menus.map((menu, i) => (
        <Menu
          show={show === i}
          label={menu.texto}
          options={menu.options}
          showMe={() => setShow(i)}
        />
      ))}

      <span
        onClick={() => window.nativeFunctions.minimize()}
        style={{
          padding: 10,
        }}
      >
        ─
      </span>
      <span
        style={{
          padding: 10,
        }}
      >
        ❐
      </span>
      <span
        onClick={() => window.nativeFunctions.close()}
        style={{
          padding: 10,
        }}
      >
        ☓
      </span>
    </div>
  );
}
