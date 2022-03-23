import { ValidationError } from "class-validator";

export const formatErrorsDto = (errors: Array<ValidationError>) =>
  errors.reduce(
    (acc: Record<string, any>, ele) => ({
      ...acc,
      [ele.property]: ele.constraints,
    }),
    {}
  );
