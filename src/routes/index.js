import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Discover from "./Discover";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Discover />} />
    </Switch>
  );
}
