/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "actions/userActions";

export default function Index() {
  const dispatch = useDispatch();

  let articulos = []
  let total = 0;
  const { cart } = useSelector((state) => state.userLogin);


  Object.keys(cart).map((item, id) => {
    articulos[id] = cart[item];
    total += cart[item].cantidad * cart[item].price;
  })

  return (
    <>
      <IndexNavbar fixed />

      <section className="">
        <div className="container mx-auto px-4 py-16 mt-10">

          {
            articulos.length > 0 &&
            articulos.map((item, id) => (

              <div className="flex flex-wrap items-center mt-8" key={id}>
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    {item.name}
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 text-blueGray-600">
                    <strong>Price USD:</strong> {item.price}
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 text-blueGray-600">
                    <strong>Ref:</strong> {item.reference}
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 text-blueGray-600">
                    <strong>cantidad:</strong> {item.cantidad}
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 text-blueGray-600">
                    <strong>Total USD:</strong> {Number(item.cantidad * item.price).toFixed(2)}
                  </p>

                </div>

                <div className="w-6/12 lg:w-2/12 px-4 mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                    <img
                      alt="..."
                      src={`https://v3.tissini.app${item.images[0].url}`}
                      className="w-full align-middle rounded-t-lg"
                    />
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </section>

      <hr className="my-6 border-blueGray-300" />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-left text-left mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Total:</h2>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
              {Number(total).toFixed(2)}
            </p>
            <button
              className="bg-red-500 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
              onClick={()=>dispatch(removeCart())}
            >
              Borrar Carrito
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
