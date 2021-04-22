import {
  Admin,
  EditGuesser,
  ListGuesser,
  ShowGuesser,
  Resource,
} from "react-admin";
import React from "react";
import dataProvider from "./providers/data.provider";
import category from "./category";

const ReactAdmin = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name={"categories"} {...category} />
  </Admin>
);

export default ReactAdmin;
