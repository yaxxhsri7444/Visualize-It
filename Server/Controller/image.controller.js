import axios from "axios";
import userModel from "../Models/user.model.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;
    console.log("userId:", userId, "prompt:", prompt);

    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing the Details" });
    }

    // Fix: reference only user's creditBalance
    if (user.creditBalance === 0 || user.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const formdata = new FormData();
    formdata.append("prompt", prompt);

    // Fix: Capture and destructure data from axios response
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formdata,
      {
        headers: {
          ...formdata.getHeaders(),
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    // Fix: decrement user's credit balance with correct value
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      resultImage,
      creditBalance: user.creditBalance - 1,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Token verification failed" });
  }
};
