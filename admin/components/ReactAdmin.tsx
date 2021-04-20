import {
  Admin,
  EditGuesser,
  ListGuesser,
  ShowGuesser,
  Resource,
} from "react-admin";
import React from "react";
import { dataProvider } from "../data.provider";
import { CategoryCreate, CategoryEdit, CategoryList } from "./Category";
import { UploadCreate, UploadEdit, UploadList } from "./Upload";

const ReactAdmin = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name={"categories"}
      list={CategoryList}
      create={CategoryCreate}
      edit={CategoryEdit}
    />
    <Resource
      name={"uploads"}
      list={UploadList}
      edit={UploadEdit}
      create={UploadCreate}
    />
  </Admin>
);

export default ReactAdmin;
