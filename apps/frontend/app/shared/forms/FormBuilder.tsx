import { useForm, Controller, type FieldValues } from "react-hook-form";
import { type FieldConfig } from "./formTypes";

type Props<T extends FieldValues> = {
  fields: FieldConfig<T>[];
  onSubmit: (data: T) => void;
  title: string;
  isSubmitting?: boolean;
  submitText?: string;
  loadingText?: string;
  externalError?: string | null;
};

function FormBuilder<T extends FieldValues>({
  fields,
  onSubmit,
  title,
  isSubmitting = false,
  submitText = "Enviar",
  loadingText = "Procesando...",
  externalError,
}: Props<T>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>

          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {field.label}
              </label>

              <Controller
                name={field.name}
                control={control}
                rules={field.validationRules}
                render={({ field: input }) => (
                  <input
                    {...input}
                    type={field.type}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                )}
              />

              {errors[field.name] && (
                <p className="text-red-500 text-xs italic mt-1">
                  {String(errors[field.name]?.message)}
                </p>
              )}
            </div>
          ))}

          {externalError && (
            <p className="text-red-500 text-sm text-center mb-3">
              {externalError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50"
          >
            {isSubmitting ? loadingText : submitText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormBuilder;
