import FormBuilder from "~/shared/forms/FormBuilder";
import { type FieldConfig } from "~/shared/forms/formTypes";

type SupplyFormData = {
  supplyName: string;
  quantity: number;
  provider: string;
};

const fields: FieldConfig<SupplyFormData>[] = [
  {
    name: "supplyName",
    label: "Nombre del suministro",
    type: "text",
    validationRules: {
      required: "El nombre del suministro es requerido",
      minLength: {
        value: 3,
        message: "Debe tener al menos 3 caracteres",
      },
      maxLength: {
        value: 50,
        message: "Máximo 50 caracteres",
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
        message: "Mínimo 1",
      },
      max: {
        value: 1000,
        message: "Máximo 1000",
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
        message: "Debe tener al menos 3 caracteres",
      },
      maxLength: {
        value: 50,
        message: "Máximo 50 caracteres",
      },
    },
  },
];

export default function SupplyForm() {
  const onSubmit = (data: SupplyFormData) => {
    console.log("Datos del formulario de suministros:", data);
  };

  return (
    <FormBuilder<SupplyFormData>
      title="Formulario de Suministros"
      fields={fields}
      onSubmit={onSubmit}
      submitText="Enviar"
    />
  );
}
