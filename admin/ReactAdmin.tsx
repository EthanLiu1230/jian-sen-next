import {
  Admin,
  EditGuesser,
  ListGuesser,
  ShowGuesser,
  Resource,
  Login,
} from "react-admin";
import React from "react";
import dataProvider from "../client/graphiti/data.provider";
import authProvider from "../client/graphiti/auth.provider";
import category from "./category";

const ReactAdmin = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name={"categories"} {...category} />
  </Admin>
);

export default ReactAdmin;
