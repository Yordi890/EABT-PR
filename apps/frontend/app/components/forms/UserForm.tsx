// UserForm.tsx
import { useForm, Controller } from "react-hook-form";
import type { FormData, Field } from "./Form";

const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Datos del formulario de usuarios:", data);
    // Aquí puedes manejar los datos del formulario de usuarios
  };

  const fields: Field[] = [
    {
      name: "username",
      label: "Nombre de usuario",
      type: "text",
      validationRules: {
        required: "El nombre de usuario es requerido",
        minLength: {
          value: 3,
          message: "El nombre de usuario debe tener al menos 3 caracteres",
        },
        maxLength: {
          value: 20,
          message: "El nombre de usuario debe tener como máximo 20 caracteres",
        },
      },
    },
    {
      name: "age",
      label: "Edad",
      type: "number",
      validationRules: {
        required: "La edad es requerida",
        min: {
          value: 18,
          message: "La edad debe ser al menos 18",
        },
        max: {
          value: 100,
          message: "La edad debe ser como máximo 100",
        },
      },
    },
    {
      name: "email",
      label: "Correo electrónico",
      type: "email",
      validationRules: {
        required: "El correo electrónico es requerido",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Correo electrónico inválido",
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
            Formulario de Usuarios
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

export default UserForm;
