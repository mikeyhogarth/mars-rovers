import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  enum Camera {
    "Front Hazard Avoidance Camera"
    FHAZ
    "Rear Hazard Avoidance Camera"
    RHAZ
    "Mast Camera"
    MAST
    "Chemistry and Camera Complex"
    CHEMCAM
    "Mars Hand Lens Imager"
    MAHLI
    "Mars Descent Imager"
    MARDI
    "Navigation Camera"
    NAVCAM
    "Panoramic Camera"
    PANCAM
    "Miniature Thermal Emission Spectrometer (Mini-TES)"
    MINITES
    "Entry cam"
    ENTRY
  }

  enum Rover {
    CURIOSITY
    OPPORTUNITY
    SPIRIT
  }
`;
