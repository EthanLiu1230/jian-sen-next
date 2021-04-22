import {
  Edit,
  ImageField,
  ImageInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import React from "react";
import MyImageField from "./MyImageField";

const UploadEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <MyImageField />

      <ImageInput source="file">
        <ImageField source="preview" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
export default UploadEdit;
