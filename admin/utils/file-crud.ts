export const postFile = (file: File) => {
  const formData = new FormData();
  formData.append("file", file, file.name);
  return fetch(`http://localhost:3030/uploads`, {
    method: "POST",
    body: formData,
    redirect: "follow",
  }).then((res) => res.json());
};

export const patchFile = (id: number, file: File) => {
  const formData = new FormData();
  formData.append("file", file, file.name);
  return fetch(`http://localhost:3030/uploads/${id}`, {
    method: "PATCH",
    body: formData,
    redirect: "follow",
  }).then((res) => res.json());
};
