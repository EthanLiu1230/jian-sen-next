import { Create, ImageField, ImageInput, SimpleForm } from "react-admin";
import React from "react";

const UploadCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ImageInput source="file">
        <ImageField source="preview" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default UploadCreate;
