export default class LOERequest {
   public id: number;
   public Description: string;
   public IsUSClient: boolean;
   public RequestedBy: string;

constructor(id: number, description: string, isUSClient: boolean, requestedBy: string) {
    this.id = id;
    this.Description = description;
    this.IsUSClient = isUSClient;
    this.RequestedBy = requestedBy;
}
}
