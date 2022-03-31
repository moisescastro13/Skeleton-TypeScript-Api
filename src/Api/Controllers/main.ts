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
import { uploadFileMiddleware } from "../middlewares";
import { TrackDto } from "../Dtos";
import { ValidatorDto } from "../validations";

@controller("/main")
export default class RoutesController extends BaseHttpController {
  @httpGet("/", ValidatorDto(TrackDto))
  public Index(
    @request() req: Req,
    @response() res: Res,
    @requestBody() test: TrackDto
  ) {
    console.log(test);
    res.status(200).json({ holis: "not found" });
  }

  @httpPost("/", uploadFileMiddleware.single("file"))
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
