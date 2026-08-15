import FormBuilder from "~/shared/forms/FormBuilder";
import { type FieldConfig } from "~/shared/forms/formTypes";

type ProducerData = {
  dni: string;
  code: string;
  firstName: string;
  lastName1: string;
  lastName2: string;
  phone: string;
  productionUnitName: string;
  cupCard: string;
  mlcCard: string;
};

interface Props {
  onSubmit: (data: ProducerData) => void;
}

const fields: FieldConfig<ProducerData>[] = [
  { name: "dni", label: "Carnet de Identidad", type: "text", validationRules: { required: "El DNI es requerido" } },
  { name: "code", label: "Código", type: "text", validationRules: { required: "El código es requerido" } },
  { name: "firstName", label: "Nombre", type: "text", validationRules: { required: "El nombre es requerido" } },
  { name: "lastName1", label: "Primer Apellido", type: "text", validationRules: { required: "Requerido" } },
  { name: "lastName2", label: "Segundo Apellido", type: "text" },
  { name: "phone", label: "Teléfono", type: "text" },
  { name: "productionUnitName", label: "Unidad de Producción", type: "text", validationRules: { required: "Requerido" } },
  { name: "cupCard", label: "Tarjeta CUP", type: "text" },
  { name: "mlcCard", label: "Tarjeta MLC", type: "text" },
];

export default function ProducerForm({ onSubmit }: Props) {
  return (
    <FormBuilder<ProducerData>
      title="Productor"
      fields={fields}
      onSubmit={onSubmit}
      submitText="Guardar Productor"
    />
  );
}