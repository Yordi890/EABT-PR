import FormBuilder from "~/shared/forms/FormBuilder";
import { type FieldConfig } from "~/shared/forms/formTypes";

type ContractData = {
  number: string;
  creationDate: string;
  producerId: number;
  plantingArea: number;
  seedlingQuantity: number;
  plantingType: string;
  tobaccoType: string;
};

interface Props {
  onSubmit: (data: ContractData) => void;
}

const fields: FieldConfig<ContractData>[] = [
  { name: "number", label: "Número de Contrato", type: "text", validationRules: { required: "Requerido" } },
  { name: "creationDate", label: "Fecha de Creación", type: "text", validationRules: { required: "Requerido" } },
  { name: "producerId", label: "ID del Productor", type: "number", validationRules: { required: "Requerido" } },
  { name: "plantingArea", label: "Área de Plantación", type: "number", validationRules: { required: "Requerido" } },
  { name: "seedlingQuantity", label: "Cantidad de Plantines", type: "number", validationRules: { required: "Requerido" } },
  { name: "plantingType", label: "Tipo de Plantación", type: "text", validationRules: { required: "Requerido" } },
  { name: "tobaccoType", label: "Tipo de Tabaco", type: "text", validationRules: { required: "Requerido" } },
];

export default function ContractForm({ onSubmit }: Props) {
  return (
    <FormBuilder<ContractData>
      title="Contrato"
      fields={fields}
      onSubmit={onSubmit}
      submitText="Guardar Contrato"
    />
  );
}