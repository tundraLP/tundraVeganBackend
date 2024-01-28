const { Review } = require('../../db');

const getAverage = async (ProductId) => {
    const reviews = await Review.findAll({ where: { ProductId } });
    if (reviews){
        let sum = 0;
        reviews.forEach((e) => {
        if (e && e.dataValues){
            sum += e?.dataValues?.stars;
        }
        });
        const average = Math.floor(sum / reviews.length);
        return average;
    }else return null;
}

module.exports = getAverage;