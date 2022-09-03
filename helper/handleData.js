import path from "path";
import fs from "fs";

export const buildPath = () => {
  const filePath = path.join(process.cwd(), "data", "users.json");
  return filePath;
};
export const sendData = (path, data) => {
  const fileData = JSON.parse(fs.readFileSync(path));
  fileData.push(data);
  fs.writeFileSync(path, JSON.stringify(fileData));
};
export const readData = (path) => {
  const fileData = JSON.parse(fs.readFileSync(path));
  return fileData;
};

export const deleteUser = (id, path) => {
  const fileData = JSON.parse(fs.readFileSync(path));
  const updatedData = fileData.filter((elem) => elem.id !== id);
  fs.writeFileSync(path, JSON.stringify(updatedData));
};

export const updatedUser = (id, path, updateText) => {
  const fileData = JSON.parse(fs.readFileSync(path));
  const updatedData = fileData.map((user) => {
    if (user.id === id) {
      return { ...user, text: updateText };
    } else {
      return user;
    }
  });
  fs.writeFileSync(path, JSON.stringify(updatedData));
};
