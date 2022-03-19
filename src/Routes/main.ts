import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  queryParam,
  request,
  requestBody,
  response,
} from "inversify-express-utils";
import { Response as Res, Request as Req } from "express";

@controller("/")
export default class RoutesController extends BaseHttpController {
  @httpGet("/")
  public Index(@request() req: Req, @response() res: Res) {
    res.status(404).json({ holis: "not found" });
  }
  @httpPost("/")
  public post(@request() req: Req, @response() res: Res) {
    res.status(404).json({ holis: "not post" });
  }
  @httpGet("paginate")
  public IndexQuery(
    @queryParam("start") start: number,
    @queryParam("count") count: number,
    @request() req: Req,
    @response() res: Res
  ) {
    res.status(404).json({ holis: `strart: ${start} count: ${count}` });
  }
}
