// npm

// logic
exports.singup = async (req, res) => {
  try {
    res.status(200).json({ messagee: "hit signup ---> Post " });
  } catch (error) {
    console.log(error);
  }
};
exports.singin = async (req, res) => {
  return res.status(200).json({ messagee: "hit signin ---> Get " });
};
