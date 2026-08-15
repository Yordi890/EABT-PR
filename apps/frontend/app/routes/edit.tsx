import ProductionUnitForm from "~/components/forms/ProductionUnitForm";

export default function edit() {
  return (
    <ProductionUnitForm
      onSubmit={function (data): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
