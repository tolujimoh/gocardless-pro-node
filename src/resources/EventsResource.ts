import GocardlessResource from "../GocardlessResource";
import { Events } from "../types/resources";

class EventsResource extends GocardlessResource implements Events {
  public resourceName: string = "events";
}

export default EventsResource;
