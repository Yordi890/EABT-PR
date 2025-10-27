import {
  Controller,
  type FieldErrors,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface FieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: string;
  validationRules?: any;
  control?: Control<T>;
  errors?: FieldErrors<T>;
}

const Field = <T extends FieldValues>({
  name,
  label,
  type,
  validationRules,
  control,
  errors,
}: FieldProps<T>) => {
  if (!control) return null;

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        )}
      />

      {errors && errors[name] && (
        <p className="text-red-500 text-xs italic mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Field;
