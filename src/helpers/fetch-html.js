
const axios = require('axios');
const cheerio = require('cheerio');

const fetchHTML = async(url) => {
    const { data } = await axios.get(url)
    return cheerio.load(data)
}

module.exports = {
    fetchHTML
}