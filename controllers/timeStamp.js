const convert = (date) => {
    const timestampUnix = Math.floor(date.getTime()); //milliseconds
    const utcDate = date.toUTCString();
    // console.log("timestampUnix: ", timestampUnix, "utcDate: ", utcDate )
    return {"unix": timestampUnix, "utc": utcDate }
}

exports.getTimeStampclean = (req, res) => {
    let date = new Date();
    convert(date);
    res.json(convert(date));
}
exports.getTimeStamp = (req, res, next) => {
    const timestamp = req.params.timestamp;
    // console.log("timestamp: ", typeof(timestamp));
    let date = new Date(timestamp);
    if (date != "Invalid Date"){
        res.json(convert(date));
    } else {
        let date = new Date(Number(timestamp));
        if (date == "Invalid Date"){
            res.json({ error : "Invalid Date" });
            return;
        }
        // console.log("Tipo de dato: ", typeof(date));
        convert(date);
        res.json(convert(date));
    }
  };

