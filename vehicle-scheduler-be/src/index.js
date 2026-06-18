const axios = require("axios");
require("dotenv").config();

const knapsack = require("./utils/knapsack");

async function main() {
    try {
        const depotsRes = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        const vehiclesRes = await axios.get(
            "http://4.224.186.213/evaluation-service/vehicles",
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        const depots = depotsRes.data.depots;
        const vehicles = vehiclesRes.data.vehicles;

        for (const depot of depots) {
            const result = knapsack(
                vehicles,
                depot.MechanicHours
            );

            console.log("\nDepot:", depot.ID);
            console.log(
                "Max Impact:",
                result.maxImpact
            );
            console.log(
                "Selected Tasks:",
                result.selectedTasks.length
            );
        }
    } catch (error) {
        console.error(
            error.response?.data || error.message
        );
    }
}

main();