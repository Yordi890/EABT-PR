import { useNavigate } from "react-router";
import { useState } from "react";
import FormBuilder from "~/shared/forms/FormBuilder";
import { type FieldConfig } from "~/shared/forms/formTypes";
import { useLogin } from "~/hooks/useLogin";

type LoginData = {
  username: string;
  password: string;
};

const fields: FieldConfig<LoginData>[] = [
  {
    name: "username",
    label: "Nombre de usuario",
    type: "text",
    validationRules: {
      required: "El nombre de usuario es requerido",
      minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
    },
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    validationRules: {
      required: "La contraseña es requerida",
      minLength: { value: 6, message: "Debe tener al menos 6 caracteres" },
    },
  },
];

export default function LoginForm() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const loginMutation = useLogin(async (data) => {
    try {
      localStorage.setItem("token", data.access_token);

      const formData = new FormData();
      formData.append("userId", data.user.id);

      const res = await fetch("/login", {
        method: "POST",
        body: formData,
      });

      if (res.ok) navigate("/dashboard");
      else setErrorMsg("No se pudo establecer la sesión.");
    } catch {
      setErrorMsg("Ocurrió un error al crear la sesión.");
    }
  }, setErrorMsg);

  const onSubmit = (data: LoginData) => {
    setErrorMsg(null);
    loginMutation.mutate(data);
  };

  return (
    <FormBuilder<LoginData>
      title="Iniciar Sesión"
      fields={fields}
      onSubmit={onSubmit}
      isSubmitting={loginMutation.isPending}
      submitText="Iniciar Sesión"
      loadingText="Verificando..."
      externalError={errorMsg}
    />
  );
}
