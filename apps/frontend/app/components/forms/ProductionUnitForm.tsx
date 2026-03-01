import FormBuilder from "~/shared/forms/FormBuilder";
import { type FieldConfig } from "~/shared/forms/formTypes";

type ProductionUnitData = {
  nombre: string;
  direccion: string;
};

interface Props {
  onSubmit: (data: ProductionUnitData) => void;
}

const fields: FieldConfig<ProductionUnitData>[] = [
  {
    name: "nombre",
    label: "Nombre",
    type: "text",
    validationRules: {
      required: "El nombre es requerido",
    },
  },
  {
    name: "direccion",
    label: "Dirección",
    type: "text",
    validationRules: {
      required: "La dirección es requerida",
    },
  },
];

export default function ProductionUnitForm({ onSubmit }: Props) {
  return (
    <FormBuilder<ProductionUnitData>
      title="Unidad de Producción"
      fields={fields}
      onSubmit={onSubmit}
      submitText="Guardar Unidad"
    />
  );
}
