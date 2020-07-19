function parseSQLResponse(arr) {
    return arr.map(ele => ele.dataValues)
}

module.exports = {
    parseSQLResponse
}