function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email" });
      return;
    } else {
      console.log(userEmail);
      res.status(200).json({ message: "Success" });
    }
  }
}

export default handler;
