import { Admin, Resource } from "react-admin";
import React from "react";
import { dataProvider } from "../data.provider";
import { CategoryCreate, CategoryEdit, CategoryList } from "./Category";

const ReactAdmin = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name={"categories"}
      list={CategoryList}
      create={CategoryCreate}
      edit={CategoryEdit}
    />
  </Admin>
);

export default ReactAdmin;
