import type { RegisterOptions, FieldValues, Path } from "react-hook-form";

export type FieldConfig<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type: "text" | "number" | "email" | "password";
  validationRules?: RegisterOptions<T>;
};
