import { buildPath, deleteUser, updatedUser } from "../../../helper/handleData";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const id = req.query.userId;
    const path = buildPath();
    deleteUser(id, path);
    res.status(200).json({ message: "User Deleted" });
    return;
  }
  if (req.method === "PATCH") {
    const { newText } = req.body;
    const id = req.query.userId;
    const path = buildPath();
    updatedUser(id, path, newText);
    res.status(200).json({ message: "text Updated" });
    return;
  }
  res.status(402).json({ message: "this router not accpet this method " });
}
