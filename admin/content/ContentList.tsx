import { Datagrid, List, TextField } from "react-admin";
import React from "react";

export const ContentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>
);
export default ContentList;
