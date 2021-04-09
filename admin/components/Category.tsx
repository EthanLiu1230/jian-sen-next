import {
  Create,
  Datagrid,
  DateField,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
import React from "react";

export const CategoryEdit = (props) => {
  return (
    <Edit title={"Edit Post"} {...props}>
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

export const CategoryList = (props) => {
  const basePath = "categories";

  return (
    <List {...props}>
      <Datagrid>
        <TextField source={"id"} />
        <TextField source={"name"} />
        <ReferenceField source={"parentId"} reference={"categories"}>
          <TextField source="name" />
        </ReferenceField>
        <DateField source={"createdAt"} />
        <DateField source={"updatedAt"} />
        <EditButton basePath={basePath} />
        {/*<DeleteButton basePath={basePath} />*/}
      </Datagrid>
    </List>
  );
};
