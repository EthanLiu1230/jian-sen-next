import React from "react";
import {
  Create,
  Datagrid,
  DateField,
  DeleteButton,
  Edit,
  EditButton,
  FileField,
  ImageField,
  ImageInput,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

const UploadImageField = ({
  source,
  record = {},
  host = "http://localhost:3030",
  label = "image",
}: {
  source: string;
  record?: {};
  host?: string;
  label?: string;
}) => {
  return (
    <img
      style={{ height: 100 }}
      src={`${host}/${record[source]}`}
      alt={label}
    />
  );
};

export const UploadList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <UploadImageField source={"url"} />
    </Datagrid>
  </List>
);

export const UploadEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ImageInput source="file">
        <ImageInput source="url" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
export const UploadCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ImageInput source="file">
        {/* ImageFiled will always preview, we are just providing keys here */}
        <ImageField source="preview" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
