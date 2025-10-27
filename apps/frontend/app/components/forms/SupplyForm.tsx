// SupplyForm.tsx
import { useForm, Controller } from "react-hook-form";
import type { FormData, Field } from "./Form";

const SupplyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Datos del formulario de suministros:", data);
    // Aquí puedes manejar los datos del formulario de suministros
  };

  const fields: Field[] = [
    {
      name: "supplyName",
      label: "Nombre del suministro",
      type: "text",
      validationRules: {
        required: "El nombre del suministro es requerido",
        minLength: {
          value: 3,
          message: "El nombre del suministro debe tener al menos 3 caracteres",
        },
        maxLength: {
          value: 50,
          message:
            "El nombre del suministro debe tener como máximo 50 caracteres",
        },
      },
    },
    {
      name: "quantity",
      label: "Cantidad",
      type: "number",
      validationRules: {
        required: "La cantidad es requerida",
        min: {
          value: 1,
          message: "La cantidad debe ser al menos 1",
        },
        max: {
          value: 1000,
          message: "La cantidad debe ser como máximo 1000",
        },
      },
    },
    {
      name: "provider",
      label: "Proveedor",
      type: "text",
      validationRules: {
        required: "El proveedor es requerido",
        minLength: {
          value: 3,
          message: "El proveedor debe tener al menos 3 caracteres",
        },
        maxLength: {
          value: 50,
          message: "El proveedor debe tener como máximo 50 caracteres",
        },
      },
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Formulario de Suministros
          </h2>
          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <Controller
                name={field.name}
                control={control}
                rules={field.validationRules}
                render={({ field: { onChange, onBlur, value } }) => (
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupplyForm;
