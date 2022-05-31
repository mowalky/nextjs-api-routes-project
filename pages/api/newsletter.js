import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email" });
      return;
    } else {
      console.log(userEmail);

      const client = await MongoClient.connect(`${process.env.MONGODB}`);
      const db = await client.db("nextjs");
      await db.collection("newsletter").insertOne({ email: userEmail });
      client.close();
      res.status(201).json({ message: "success" });
    }
  }
}

export default handler;
