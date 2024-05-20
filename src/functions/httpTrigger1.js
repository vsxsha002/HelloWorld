const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
    const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
    const database = client.database("YourDatabaseName");
    const container = database.container("YourContainerName");

    const { resources: items } = await container.items.readAll().fetchAll();

    context.res = {
        status: 200,
        body: items,
    };
};
