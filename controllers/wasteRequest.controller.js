import Waste from "../models/wasteRequest.model.js";

export const createWasteRequest = async (req, res) => {
  try {
    const wasteRequest = new Waste(req.body);
    const savedWasteRequest = await wasteRequest.save();
    res.status(200).json(savedWasteRequest);
    // res.status(201).send({ message: "Request sent successfully, Thank You" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateWasteRequest = async (req, res) => {
  try {
    const updatedWasteRequest = Waste.findByIdAndUpdate(
      req.param.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({ message: "Update successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getAllWasteRequest = async (req, res) => {
  const query = req.query.new;
  const search = req.query.search;
  try {
    const wasteRequests = query
      ? await Waste.find().sort({ _id: -1 }).limmit(10)
      : search
      ? await Waste.find({
          username: { $regex: search, $options: "i" },
        })
      : await Waste.find();
    res.status(200).json(wasteRequests);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
export const deleteWasteRequest = async (req, res) => {
  try {
    await Waste.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const changeStatus = async (req, res) => {
  try {
    const request = await Waste.findById(req.params.id);

    request.status = "Waste Collected";

    await request.save();
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
