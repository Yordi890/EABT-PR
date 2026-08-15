import FormBuilder from "~/shared/forms/FormBuilder";
import { type FieldConfig } from "~/shared/forms/formTypes";

type SupplyData = {
  name: string;
  quantity: number;
  unit: string;
  price: number;
};

interface Props {
  onSubmit: (data: SupplyData) => void;
}

const fields: FieldConfig<SupplyData>[] = [
  { name: "name", label: "Nombre del Insumo", type: "text", validationRules: { required: "Requerido" } },
  { name: "quantity", label: "Cantidad", type: "number", validationRules: { required: "Requerido" } },
  { name: "unit", label: "Unidad (kg, L, etc)", type: "text", validationRules: { required: "Requerido" } },
  { name: "price", label: "Precio", type: "number", validationRules: { required: "Requerido" } },
];

export default function SupplyForm({ onSubmit }: Props) {
  return (
    <FormBuilder<SupplyData>
      title="Insumo"
      fields={fields}
      onSubmit={onSubmit}
      submitText="Guardar Insumo"
    />
  );
}