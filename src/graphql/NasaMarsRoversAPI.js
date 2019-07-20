import { RESTDataSource } from "apollo-datasource-rest";

class NasaMarsRoversAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.nasa.gov/mars-photos/api/v1/";
  }

  willSendRequest(request) {
    request.params.set("api_key", process.env.NASA_API_KEY);
  }

  async getManifestForRover({ rover }) {
    const manifest = await this.get(`manifests/${rover}`);
    return manifest.photo_manifest;
  }

  async getPhotosBySol({ rover, sol, camera, page }) {
    const photos = await this.get(`rovers/${rover}/photos`, {
      sol,
      camera,
      page
    });
    return photos.photos;
  }
}

export default NasaMarsRoversAPI;
