import { Admin, Resource } from "react-admin";
import React from "react";
import { CategoryList } from "./components/CategoryList";
import { dataProvider } from "./data.provider";
import CategoryCreate from "./components/CategoryCreate";

const ReactAdmin = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name={"categories"} list={CategoryList} create={CategoryCreate} />
  </Admin>
);

export default ReactAdmin;
