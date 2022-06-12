/*eslint-disable*/
import { logout } from "actions/userActions";
import React from "react";
import { Link } from "react-router-dom";
import store from '../../store';

export default function Navbar(props) {

  const onLogoutClick = () => {
    store.dispatch(logout());
  };

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-end px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-end">
        <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Categorias
            </Link>
          </div>
          <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/catalogo/1"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Catálogo
            </Link>
          </div>
          <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/carro"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Carrito
            </Link>
          </div>
          <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start">
            <a
              onClick={() => onLogoutClick()}
              href="#!"
              className="text-red-500 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
            >
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
