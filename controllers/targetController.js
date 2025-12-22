export const welcome = (req, res) => {
  res.json({
    message: "Welcome to Military Targets Server",
    version: "1.0.0",
  });
};
export const msg =  (req, res) => {
  if (req.headers["client-unit"] === "Golani") {
    res.json({
      unit: "Golani",
      message: "briefing delivered",
    });
  } else {
    res
      .status(400)
      .json({ message: `${req.headers["client-unit"]} unit not found` });
  }
}