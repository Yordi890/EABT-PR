import { useNavigate } from "react-router";
import { useState } from "react";
import Form from "./Form";
import Field from "./Field";
import { useLogin } from "~/hooks/useLogin";

interface LoginData {
  username: string;
  password: string;
}

const LoginForm = () => {
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

      if (res.ok) {
        navigate("/dashboard");
      } else {
        setErrorMsg("No se pudo establecer la sesión en el servidor.");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Ocurrió un error al crear la sesión.");
    }
  }, setErrorMsg);

  const onSubmit = (data: LoginData) => {
    setErrorMsg(null);
    loginMutation.mutate(data);
  };

  return (
    <Form<LoginData>
      onSubmit={onSubmit}
      defaultValues={{ username: "", password: "" }} // <- inicializamos valores
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

      <Field<LoginData>
        name="username"
        label="Nombre de usuario"
        type="text"
        validationRules={{
          required: "El nombre de usuario es requerido",
          minLength: {
            value: 3,
            message: "Debe tener al menos 3 caracteres",
          },
          maxLength: {
            value: 20,
            message: "Máximo 20 caracteres",
          },
        }}
      />

      <Field<LoginData>
        name="password"
        label="Contraseña"
        type="password"
        validationRules={{
          required: "La contraseña es requerida",
          minLength: {
            value: 6,
            message: "Debe tener al menos 6 caracteres",
          },
        }}
      />

      {errorMsg && (
        <p className="text-red-500 text-sm text-center mb-3">{errorMsg}</p>
      )}

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? "Verificando..." : "Iniciar Sesión"}
        </button>
      </div>
    </Form>
  );
};

export default LoginForm;
