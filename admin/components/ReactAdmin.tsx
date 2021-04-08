import { Admin, Resource } from "react-admin";
import React from "react";
import { CategoryList } from "./CategoryList";
import { dataProvider } from "../data.provider";
import CategoryCreate from "./CategoryCreate";
import { CategoryEdit } from "./CategoryEdit";

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
