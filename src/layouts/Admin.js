import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components


// views

import Login from "views/auth/Login.js";

export default function Auth() {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
              "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Switch>
            <Route path="/admin/login" exact component={Login} />
            <Redirect from="/admin" to="/auth/login" />
          </Switch>
        </section>
      </main>
    </>
  );
}
