/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    * @route GET /
    * @returns {Object[]} 200 - An array of comment objects.
    * @returns {Error} 500 - Internal server error.
    */

 /**
    * DELETE /:commentId
    * Deletes a comment by its ID.
    * @route DELETE /:commentId
    * @param {string} commentId - The ID of the comment to delete.
    * @returns {string} 200 - Success message indicating comment was deleted.
    * @returns {Error} 400 - Error message if deletion fails.
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
    Comment.find()
        .then((comments) => res.json(comments))
        .catch((err) => console.log(err));
});

// add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res, next) => {
    try {
        await Comment.findByIdAndDelete(req.params.commentId);
        res.json("Comment deleted.");
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});