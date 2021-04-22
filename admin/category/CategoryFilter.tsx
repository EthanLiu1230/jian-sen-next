import { Filter, TextInput } from "react-admin";
import React from "react";

const CategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput source="level" />
  </Filter>
);
export default CategoryFilter;
