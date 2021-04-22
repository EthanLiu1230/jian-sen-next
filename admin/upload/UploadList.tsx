import { Datagrid, List, TextField } from "react-admin";
import React from "react";
import MyImageField from "./MyImageField";

const UploadList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <MyImageField />
    </Datagrid>
  </List>
);
export default UploadList;
