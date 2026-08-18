import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useLogin } from "~/hooks/useLogin"; 
import logoEmpresa from "../../assets/images.jpg";
interface LoginFormInputs {
  username: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Iniciar Sesión - SGI Contratación";
  }, []);

  // Hook de React Query de tu compañero
  const { mutate, isPending } = useLogin(
    async (data) => {
      // Ajustado a la estructura de tu compañero
      localStorage.setItem("token", data.access_token);
      const role = (data.user as any).role || "Operador";
      localStorage.setItem("userRole", role);
      localStorage.setItem("userName", data.user.userName);
      
      // CAMBIADO A /dashboard
      navigate("/dashboard");
    },
    (msg) => {
      setLoginError(msg || "Usuario o contraseña incorrectos.");
    }
  );

      const onSubmit = (data: LoginFormInputs) => {
    setLoginError(null);

    // Superusuario Tenebris
    if (data.username === "Test" && data.password === "Test.123456") {
      localStorage.setItem("userRole", "Admin");
      localStorage.setItem("userName", "Test");
      navigate("/dashboard"); // <--- VUELVE A USAR navigate AQUÍ
      return;
    }

    mutate(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 px-4">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-32 h-32 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
         <img src={logoEmpresa} alt="Logo Empresa" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Bienvenido de nuevo</h1>
            <p className="mt-2 text-sm text-slate-500">Ingrese sus credenciales para acceder al panel de control.</p>
          </div>
          
          {loginError && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm font-medium text-red-600">
              {loginError}
            </div>
          )}

          {/* Tu diseño visual de inputs con Tailwind */}
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1.5">Usuario</label>
              <input 
                type="text" 
                id="username" 
                {...register("username", { required: "El usuario es obligatorio" })} 
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-blue-500 focus:ring-blue-100 transition-all" 
              />
              {errors.username && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.username.message as string}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">Contraseña</label>
              </div>
              <input 
                type="password" 
                id="password" 
                {...register("password", { required: "La contraseña es obligatoria" })} 
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-blue-500 focus:ring-blue-100 transition-all" 
              />
              {errors.password && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.password.message as string}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isPending} 
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all mt-8 cursor-pointer"
            >
              {isPending ? "Verificando..." : "Iniciar Sesión"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}