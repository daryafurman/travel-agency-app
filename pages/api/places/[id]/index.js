// import { db_places } from "../../../../lib/db_places";
// import { db_comments } from "../../../../lib/db_comments";
import dbConnect from "../../../../db/connection.js";
import Place from "../../../../db/schemas/place.js";
import Comment from "../../../../db/schemas/comment.js";

export default async function handler(request, response) {
  const { id } = request.query;
  console.log(id);
  if (!id) {
    return;
  }
  await dbConnect();

  if (request.method === "GET") {
    const foundPlace = await Place.findById(id);
    const commentIds = foundPlace?.comments;
    if (commentIds && commentIds.length > 0) {
      const comments = (
        await Promise.all(
          commentIds.map(async (commentId) => {
            const fullComment = await Comment.findById(commentId);
            return fullComment;
          })
        )
      ).filter(Boolean);

      return response
        .status(200)
        .json({ place: foundPlace, comments: comments });
    } else {
      return response.status(200).json({ place: foundPlace, comments: [] });
    }
  }

  if (request.method === "PUT") {
    await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    return response
      .status(200)
      .json({ status: "Place is sucsessfully updated" });
  }
  if (request.method === "DELETE") {
    const places = await Place.findByIdAndDelete(id);
    response.status(260).json("Place deleted");

    return response.status(200).json(places);
  }

  if (request.method === "POST") {
    try {
      const newComment = request.body;
      const requestCommentCreate = await Comment.create(newComment);
      await Place.updateOne(
        { _id: id },
        { $push: { comments: requestCommentCreate._id } }
      );

      return response.status(200).json({
        message: "New comment added!",
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
