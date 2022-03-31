import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { formatErrorsDto } from "../../Common/";

export const ValidatorDto =
  (dtoClass: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const output: any = plainToClass(dtoClass, req.body);
    const errors: Array<ValidationError> = await validate(output);

    if (errors.length > 0) {
      let errosText = formatErrorsDto(errors);
      return res.status(422).json(errosText);
    }

    next();
  };
