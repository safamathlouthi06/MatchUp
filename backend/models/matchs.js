const mongoose = require('mongoose');
const matchs = new Map(); // { userId: [matchedUserIds] }

app.post('/like/:userId/:targetId', (req, res) => {
  if (checkForMatch(req.params.userId, req.params.targetId)) {
    // Crée un match !
    notifyUsers(req.params.userId, req.params.targetId);
    res.json({ matched: true });
  } else {
    res.json({ matched: false });
  }
});

function checkForMatch(userId, targetId) {
  const targetLikes = matchs.get(targetId) || [];
  if (targetLikes.includes(userId)) {
    addMatch(userId, targetId);
    return true;
  }
  addLike(userId, targetId);
  return false;
}