import fs from 'fs/promises'

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

export const health = ((req, res) => {
  const timeStamp = new Date();
  res.json({ status: "ok", serverTime: timeStamp });
  console.log("health check");
});

export const getTarget = (async (req, res) => {
  const targets = JSON.parse(
    await fs.readFile(process.cwd() + "/data/targets.json", "utf-8")
  );
  const result = targets.targets.find((target) => target.id === req.params.id);
  if (!result) {
    res.status(404).json({ message: `${req.params.id} not found` });
  }
  res.json(result);
});

export const getTargets = (async (req, res) => {
  const region = req.query.region;
  const status = req.query.status;
  const minPriority = req.query.minPriority;

  if (!(region && status && minPriority)) {
    res.status(404).send("Headers not sended !");
  }
  const targets = JSON.parse(
    await fs.readFile(process.cwd() + "/data/targets.json", "utf-8")
  ).targets;
  const result = targets.filter(
    (t) =>
      t.region === region && t.status === status && t.priority >= minPriority
  );
  if (result.length == 0) {
    res.send("not found !");
    return;
  }
  res.json(result);
});