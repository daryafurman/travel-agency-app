// import { db_places } from "../../../lib/db_places";

// export default function handler(request, response) {
//   return response.status(200).json(db_places);
// }

import dbConnect from "../../../db/connection.js";
import Place from "../../../db/schemas/place.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places);
    } catch (e) {
      return response.status(404).json({ error: e.message });
    }
    // } else {
    //   return response.status(404).json({ message: "Not Found" });
  }
  if (request.method === "POST") {
    try {
      const placeData = request.body;
      await Place.create(placeData);
      return response.status(200).json({ status: "New Place created!" });
    } catch (e) {
      console.error(e);
      return response.status(404).json({ error: e.message });
    }
  }

  return response.status(405).json({ message: "Method not allowed" });
}
