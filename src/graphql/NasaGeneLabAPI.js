import { RESTDataSource } from "apollo-datasource-rest";

class NASAGeneLabAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://genelab-data.ndc.nasa.gov/genelab/data/";
  }

  willSendRequest(request) {
    request.params.set("api_key", process.env.NASA_API_KEY);
  }

  async search({ from = 0, size = 25, animal }) {
    // querying genelab...
    let query = "type=cgene";

    // from/size
    query += `&from=${from}`;
    query += `&size=${size}`;

    // add the animals...
    query += `&term=${encodeURI(animal)}`;

    return this.get("search", query);
  }
}

export default NASAGeneLabAPI;
