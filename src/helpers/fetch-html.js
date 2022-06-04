
const axios = require('axios');
const cheerio = require('cheerio');

const fetchHTML = async(url) => {

    const headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16'
    }
    const { data } = await axios.get(url, headers)
    return cheerio.load(data)
}

module.exports = {
    fetchHTML
}