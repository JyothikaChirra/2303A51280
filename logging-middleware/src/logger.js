const axios = require("axios");
require("dotenv").config();
console.log(process.env.ACCESS_TOKEN);
async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
      }
    );

    console.log("Log Success:", response.data);
  } catch (error) {
    console.error(
      "Log Error:",
      error.response?.data || error.message
    );
  }
}

module.exports = Log;