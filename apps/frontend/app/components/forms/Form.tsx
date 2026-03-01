import { useForm } from "react-hook-form";
import { Form as RouterForm } from "react-router";

type Method = "post" | "get" | "put" | "patch" | "delete";

interface Props<T extends Record<string, any>> {
  children: React.ReactNode;
  action?: string;
  method?: Method;
  onSubmit?: (data: T) => void;
}

const Form = <T extends Record<string, any>>({
  children,
  action = "",
  method = "post",
  onSubmit,
}: Props<T>) => {
  const { handleSubmit } = useForm<T>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <RouterForm
          method={method}
          action={action}
          onSubmit={handleSubmit((data) => onSubmit?.(data))}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {children}
        </RouterForm>
      </div>
    </div>
  );
};

export default Form;
