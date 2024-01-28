const getAverage = require('../../controller/reviewController/getAverage');

const getAverageHandler = async (req, res) => {
    try {
        const { ProductId } = req.query;
        const average = await getAverage(ProductId);
        res.status(200).json(average)
    } catch (error) {
        res.status(404).json({ error: error.message});
    }
}

module.exports = getAverageHandler;