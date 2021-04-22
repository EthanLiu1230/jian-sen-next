import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from "react-admin";
import React from "react";
import CategoryFilter from "./CategoryFilter";

const CategoryList = (props) => {
  return (
    <List filters={<CategoryFilter />} {...props}>
      <Datagrid>
        <TextField source={"id"} />
        <TextField source={"name"} />
        <ReferenceField source={"parentId"} reference={"categories"}>
          <TextField source="name" />
        </ReferenceField>
        <TextField source={"level"} />
        <EditButton />
      </Datagrid>
    </List>
  );
};
export default CategoryList;
