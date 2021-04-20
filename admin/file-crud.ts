export const createFile = (file: File) => {
  const formData = new FormData();
  formData.append("file", file, file.name);
  return fetch(`http://localhost:3030/uploads`, {
    method: "POST",
    body: formData,
    redirect: "follow",
  });
};
