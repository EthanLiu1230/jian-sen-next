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
  Filter,
} from "react-admin";
import React from "react";

const CategoryFilter = (props) => (
  <Filter {...props}>
    {/*<TextInput label={"Search"} source="$like" alwaysOn />*/}

    {/*<ReferenceInput*/}
    {/*  label="Parent Category"*/}
    {/*  reference={"categories"}*/}
    {/*  source={"parentId"}*/}
    {/*>*/}
    {/*  <SelectInput optionText={"name"} />*/}
    {/*</ReferenceInput>*/}

    <TextInput source={"level"} />
  </Filter>
);

export const CategoryList = (props) => {
  const basePath = "categories";

  return (
    <List filters={<CategoryFilter />} {...props}>
      <Datagrid>
        <TextField source={"id"} />
        <TextField source={"name"} />
        <ReferenceField source={"parentId"} reference={"categories"}>
          <TextField source="name" />
        </ReferenceField>
        <TextField source={"level"} />
        <DateField source={"createdAt"} />
        <DateField source={"updatedAt"} />
        <EditButton basePath={basePath} />
        {/*<DeleteButton basePath={basePath} />*/}
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
