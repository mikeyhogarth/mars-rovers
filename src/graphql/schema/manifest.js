import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type PhotoSummary {
    "Martian sol of the Rover's mission"
    sol: Int
    "Earth date of the Rover's mission"
    earth_date: String
    "Number of photos taken by that Rover on"
    total_photos: Int
    "Cameras for which there are photos by that Rover on that sol"
    cameras: [Camera]
  }

  type Manifest {
    "Name of the Rover"
    name: String
    "The Rover's landing date on Mars"
    landing_date: String
    "The Rover's launch date from Earth"
    launch_date: String
    "The Rover's mission status"
    status: String
    "The most recent Martian sol from which photos exist"
    max_sol: Int
    "The most recent Earth date from which photos exist"
    max_date: String
    "Number of photos taken by that Rover"
    total_photos: Int
    "Photos taken by sol/date"
    photos(sol: Int): [PhotoSummary]
  }
`;

export const resolvers = {
  Manifest: {
    photos(obj, args) {
      return args.sol
        ? obj.photos.filter(p => p.sol == parseInt(args.sol))
        : obj.photos;
    }
  }
};
