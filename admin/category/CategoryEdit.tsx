import { Edit, SimpleForm, TextInput } from "react-admin";
import React from "react";

const CategoryEdit = (props) => {
  return (
    <Edit title={`Edit Category`} {...props}>
      <SimpleForm>
        <TextInput source={"id"} disabled />
        <TextInput source={"name"} />
        {/*<ReferenceInput source="parentId" reference="categories" allowEmpty>*/}
        {/*  <SelectInput optionText="name" />*/}
        {/*</ReferenceInput>*/}
      </SimpleForm>
    </Edit>
  );
};

export default CategoryEdit;
