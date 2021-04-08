import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'

const client = feathers();

const restClient = rest(); // connect to the same as the browser URL

client.configure(restClient.fetch(window.fetch))

// export const categoriesService = app.service('categories')

export default client;