import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";

const client = feathers();

const restClient = rest("http://localhost:3030"); // connect to the same as the browser URL

client.configure(restClient.fetch(fetch));

export default client;
