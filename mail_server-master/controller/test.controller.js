

exports.testServer = async (req, resp) => {
    resp.status(200).json({ status: "true", msg: "Server Started" });
};