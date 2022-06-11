/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Index() {

  const { categories } = useSelector((state) => state.userLogin);

  return (
    <>
      <IndexNavbar fixed />

      <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Ea dolore eiusmod ea ad. Sint ipsum ut irure mollit dolor pariatur
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">
                  Ipsum ex mollit esse et consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">

            {
              categories.length > 0 &&
              categories.slice(0, 30).map((item, id) => (

                item.parent_id && (
                <div className="w-full lg:w-2/12 px-4 text-center" key={id}>
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">{item.name}</h6>
                      <Link
                        to={`/catalogo/${item.id}`}
                        className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                      >
                      <img
                        alt="..."
                        src={`https://v3.tissini.app${item.image}`}
                        className="w-full align-middle rounded-t-lg  inline-flex items-center justify-center h-60"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = "https://static.thenounproject.com/png/3843803-200.png";
                        }}
                      ></img>
                      <p className="mt-2 mb-4 text-blueGray-500 capitalize">
                        {item.category}
                      </p>
                      </Link>
                    </div>
                  </div>
                </div>
              )
              ))}

          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
