import {
  Create,
  Datagrid,
  Edit,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  Filter,
} from "react-admin";
import React from "react";

const CategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput source={"level"} />
  </Filter>
);

export const CategoryList = (props) => {
  return (
    <List filters={<CategoryFilter />} basePath={"categories"} {...props}>
      <Datagrid rowClick="edit">
        <TextField source={"id"} />
        <TextField source={"name"} />
        <ReferenceField source={"parentId"} reference={"categories"}>
          <TextField source="name" />
        </ReferenceField>
        <TextField source={"level"} />
      </Datagrid>
    </List>
  );
};

export const CategoryEdit = (props) => {
  return (
    <Edit title={`Edit Category`} {...props}>
      <SimpleForm>
        <TextInput source={"id"} disabled />
        <TextInput source={"name"} />
        <ReferenceInput source="parentId" reference="categories" allowEmpty>
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export const CategoryCreate = (props) => {
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
