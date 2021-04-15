import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import React from "react";
import { dataProvider } from "../data.provider";
import { CategoryCreate, CategoryEdit, CategoryList } from "./Category";
import { UploadEdit, UploadList } from "./Upload";

const ReactAdmin = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name={"categories"}
      list={CategoryList}
      create={CategoryCreate}
      edit={CategoryEdit}
    />
    <Resource name={"uploads"} list={UploadList} edit={UploadEdit} />
  </Admin>
);

export default ReactAdmin;
