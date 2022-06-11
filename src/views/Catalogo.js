/*eslint-disable*/
import React, { Fragment, useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getcategories } from "../actions/userActions";
import { Link } from "react-router-dom";

export default function Index() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { catalogo, vendor } = useSelector((state) => state.userLogin);

  let categories = {};
  if (catalogo.categories) {
    categories = catalogo.categories
  }
  let products = {};
  if (vendor.products) {
    products = vendor.products
  }

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getcategories(id));
    }
  }, [dispatch, id]);

  console.log(products);
  return (
    <>
      <IndexNavbar fixed />

      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        {
          categories && categories.length > 0 &&
          (
            <section className="pb-20 -mt-24">
              <div className="container mx-auto px-4">

                <div className="flex flex-wrap items-center mt-32">
                  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                      {categories.name}
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                      Mollit elit qui esse consectetur esse adipisicing ad incididunt incididunt ut qui sit.
                      Ex non dolor et dolore sunt quis reprehenderit velit proident sit commodo consequat exercitation qui.
                      Duis velit eiusmod do duis ea irure Lorem occaecat anim occaecat labore.
                    </p>
                  </div>

                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                      <img
                        alt="..."
                        src={`https://v3.tissini.app${categories.image}`}
                        className="w-full align-middle rounded-t-lg  inline-flex items-center justify-center"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = "https://static.thenounproject.com/png/3843803-200.png";
                        }}
                      ></img>
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-lightBlue-500 fill-current"
                          ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white capitalize">
                          categoria {categories.category}
                        </h4>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }

      </div>

      <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">

              {
                products && products.length > 0 &&
                products.slice(0, 30).map((item, id) => (

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
                            src={`https://v3.tissini.app${item.images[0].url}`}
                            className="w-full align-middle rounded-t-lg  inline-flex items-center justify-center h-60"
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src = "https://static.thenounproject.com/png/3843803-200.png";
                            }}
                          ></img>
                          <p className="mt-2 mb-4 text-blueGray-500 capitalize">
                            {item.reference}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>

                ))}
            </div>
          </div>
        </section>
      <Footer />
    </>
  );
}
