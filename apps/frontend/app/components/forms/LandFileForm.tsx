import FormBuilder from "~/shared/forms/FormBuilder";
import { type FieldConfig } from "~/shared/forms/formTypes";

type LandFileData = {
  producerdni: string;
  fileNumber: string;
  area: number;
  propertyType: string;
  issueDate: string;
  expirationDate: string;
};

interface Props {
  onSubmit: (data: LandFileData) => void;
}

const fields: FieldConfig<LandFileData>[] = [
  { name: "producerdni", label: "DNI del Productor", type: "text", validationRules: { required: "Requerido" } },
  { name: "fileNumber", label: "Número de Expediente", type: "text", validationRules: { required: "Requerido" } },
  { name: "area", label: "Área Total", type: "number", validationRules: { required: "Requerido", min: { value: 1, message: "Debe ser mayor a 0" } } },
  { name: "propertyType", label: "Tipo de Propiedad", type: "text", validationRules: { required: "Requerido" } },
  { name: "issueDate", label: "Fecha de Emisión", type: "text", validationRules: { required: "Requerido" } },
  { name: "expirationDate", label: "Fecha de Vencimiento", type: "text", validationRules: { required: "Requerido" } },
];

export default function LandFileForm({ onSubmit }: Props) {
  return (
    <FormBuilder<LandFileData>
      title="Expediente de Tierra"
      fields={fields}
      onSubmit={onSubmit}
      submitText="Guardar Expediente"
    />
  );
}