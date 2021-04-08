import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const CategoryEdit = (props) => {
  return (
    <Edit title={"Edit Post"} {...props}>
      <SimpleForm>
        <TextInput source={"id"} disabled />
        <TextInput source={"name"} />
      </SimpleForm>
    </Edit>
  );
};
