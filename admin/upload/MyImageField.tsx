import React from "react";

const MyImageField = ({
  source = "url",
  record = {},
  host = "http://localhost:3030",
  label = "image",
}: {
  source?: string;
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
export default MyImageField;
