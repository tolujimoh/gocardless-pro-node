import GocardlessResource from "../GocardlessResource";
import { Params } from "../types/resources";
import {
  Events,
  GetEventsSuccessResponse,
  ListEventsRequest,
  ListEventsSuccessResponse,
} from "../types/resources/Events";

class EventsResource extends GocardlessResource implements Events {
  public resourceName: string = "events";

  public list(
    params: ListEventsRequest | Params<ListEventsRequest>,
  ): ListEventsSuccessResponse {
    return super.get(`/${this.resourceName}`, params);
  }
  public get(resourceId: string): GetEventsSuccessResponse {
    return super.get(`/${this.resourceName}/${resourceId}`);
  }
}

export default EventsResource;
