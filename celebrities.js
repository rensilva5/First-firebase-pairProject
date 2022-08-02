import { dbConnect } from "./dbconnect.js";

export function getCeleb(req, res) {
  const db = dbConnect();
  console.log('Getting celebs...')
  db.collection("celebrities")
    .get()
    .then((collection) => {
      const celebs = collection.docs.map((doc) => {
        console.log(doc.data())
        return doc.data()
      });
      console.log(celebs)

      res.send(celebs);
    })
    .catch((err) => res.status(500).send(err));
}

export function createCeleb(req, res) {
  const newCeleb = req.body;

  const db = dbConnect();

  db.collection("celebrities")
    .add(newCeleb)
    .then((doc) => {
      res.status(201).send({
        success: true,
        id: doc.id,
      });
    })
    .catch((err) => handleError(err, res));
}
