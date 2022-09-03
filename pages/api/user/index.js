import { sendData, buildPath, readData } from "../../../helper/handleData";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = { ...req.body };
    const path = buildPath();
    sendData(path, { ...data, id: new Date() });
    res.status(201).json({ message: "user successfully added", data });
    return;
  }
  if (req.method === "GET") {
    const path = buildPath();
    const data = readData(path);
    res.status(200).json([...data]);
    return;
  }

  res.status(402).json({ message: "this router not accpet this method " });
}
