const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "hucHQD6Y#jtXShKtf0pjo_tzykLhBR3pccd6bwD1_eDVA5ca-WBA",
MONGODB: process.env.MONGODB || "mongodb://mongo:poWHMYJyJnQRVIObPxLITSKyebEUdyMF@junction.proxy.rlwy.net:54546",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
