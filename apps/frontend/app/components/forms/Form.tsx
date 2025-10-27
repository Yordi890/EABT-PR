import {
  useForm,
  type SubmitHandler,
  type DefaultValues,
} from "react-hook-form";
import { Form as RouterForm, useActionData } from "react-router";
import {
  type ReactNode,
  type ReactElement,
  isValidElement,
  cloneElement,
} from "react";

// Props del componente Form
interface Props<T extends Record<string, any>> {
  children: ReactNode;
  action?: string;
  method?: "post" | "get" | "put" | "patch" | "delete";
  onSubmit?: SubmitHandler<T>;
  defaultValues?: Partial<T>; // <- agregamos defaultValues
}

// Helper para inyectar control y errors a los children
function injectFormProps(
  children: ReactNode,
  props: Record<string, unknown>,
): ReactNode {
  if (Array.isArray(children)) {
    return children.map((child, i) =>
      isValidElement(child)
        ? cloneElement(child as ReactElement<any>, { ...props, key: i })
        : child,
    );
  }
  return isValidElement(children)
    ? cloneElement(children as ReactElement<any>, props)
    : children;
}

const Form = <T extends Record<string, any>>({
  children,
  action = "",
  method = "post",
  onSubmit,
  defaultValues,
}: Props<T>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>, // inicializa valores por defecto para evitar uncontrolled → controlled
  });

  const actionData = useActionData() as { success?: boolean; message?: string };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <RouterForm
          method={method}
          action={action}
          onSubmit={handleSubmit((data) => {
            if (onSubmit) onSubmit(data as unknown as T);
          })}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {injectFormProps(children, { control, errors })}

          {actionData?.success && (
            <p className="text-green-500 text-xs italic mt-4 text-center">
              {actionData.message}
            </p>
          )}
        </RouterForm>
      </div>
    </div>
  );
};

export default Form;
