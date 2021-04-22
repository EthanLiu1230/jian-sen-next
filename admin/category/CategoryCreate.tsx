import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import React from "react";

const CategoryCreate = (props) => {
  return (
    <Create title={"Create a category"} {...props}>
      <SimpleForm>
        <TextInput source={"name"} />
        <ReferenceInput source="parentId" reference="categories" allowEmpty>
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CategoryCreate;
