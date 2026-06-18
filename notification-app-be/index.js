const axios = require("axios");
require("dotenv").config();

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function getTopNotifications() {
  try {
    const res = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${process.env.access_token}`
        }
      }
    );

    const notifications = res.data.notifications;

    notifications.sort((a, b) => {
      const typeDiff =
        priority[b.Type] - priority[a.Type];

      if (typeDiff !== 0) return typeDiff;

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    });

    const top10 = notifications.slice(0, 10);

    console.log("TOP 10 PRIORITY NOTIFICATIONS");
    console.table(top10);

  } catch (error) {
    console.error(
      error.response?.data || error.message
    );
  }
}

getTopNotifications();