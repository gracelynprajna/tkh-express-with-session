import express from "express";

const router = express.Router();

router.post(
  "/login",
  //Need some type of middleware to handle the login
  (request, response) => {
    response.status(200).json({
      success: "true",
    });
  }
);

export default router;
