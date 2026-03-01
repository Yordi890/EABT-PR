import FormBuilder from "~/shared/forms/FormBuilder";
import { type FieldConfig } from "~/shared/forms/formTypes";

type UserFormData = {
  username: string;
  age: number;
  email: string;
};

const fields: FieldConfig<UserFormData>[] = [
  {
    name: "username",
    label: "Nombre de usuario",
    type: "text",
    validationRules: {
      required: "El nombre de usuario es requerido",
      minLength: { value: 3, message: "Mínimo 3 caracteres" },
    },
  },
  {
    name: "age",
    label: "Edad",
    type: "number",
    validationRules: {
      required: "Edad requerida",
      min: { value: 18, message: "Mínimo 18" },
    },
  },
  {
    name: "email",
    label: "Correo electrónico",
    type: "email",
    validationRules: {
      required: "Email requerido",
    },
  },
];

export default function UserForm() {
  return (
    <FormBuilder<UserFormData>
      title="Formulario de Usuarios"
      fields={fields}
      onSubmit={(data) => console.log(data)}
    />
  );
}
