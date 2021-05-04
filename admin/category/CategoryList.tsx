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
        <ReferenceField source={"parent_id"} reference={"categories"}>
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
      </Datagrid>
    </List>
  );
};
export default CategoryList;
