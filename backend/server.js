const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const jobRoutes = require("./routes/jobRoutes");
const userRoutes = require("./routes/userRoutes");
const matchRoutes = require("./routes/matchRoutes");
const messageRoutes = require("./routes/messageRoutes");
const profileRoutes = require("./routes/profileRoutes");



dotenv.config();
const app = express();
app.use(express.json());//beche ya9ra les requests en format json



//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => console.error(err));
  app.use("/users", userRoutes);//activer les routes users 
  app.use("/jobs", jobRoutes);//activer les routes jobs
  app.use("/matches", matchRoutes);//activer les routes matches
  app.use("/messages", messageRoutes);//activer les routes messages
  app.use("/profiles", profileRoutes);//activer les routes profiles

  app.get("/", (req, res) => {
    res.send("hello ");
  });

// machi el serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅Serveur démarré sur le port ${PORT}`);
});