import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // 1. Importamos el hook
import { useState } from "react"; // Para manejar el error de credenciales

interface LoginFormInputs {
  usuario: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  // 2. Inicializamos el hook de navegación y el estado de error
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

    const onSubmit = async (data: LoginFormInputs) => {
    setLoginError(null);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Si es Admin, lo mandamos a /admin-dashboard
      if (data.usuario === "admin" && data.password === "123456") {
        localStorage.setItem("userRole", "Admin");
        localStorage.setItem("userName", "Admin Root");
        navigate("/admin-dashboard"); 
      } 
      // Si es Operador, lo mandamos a /operador-dashboard
      else if (data.usuario === "operador" && data.password === "123456") {
        localStorage.setItem("userRole", "Operador");
        localStorage.setItem("userName", "Operador Estándar");
        navigate("/operador-dashboard"); 
      } 
      else {
        setLoginError("Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      setLoginError("Hubo un problema al conectar con el servidor.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 px-4">
      
      {/* Logo y Nombre de la Empresa */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-22 h-22 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <img src="src/assets/images.jpg" alt="" />
        </div>
        
      </div>

      {/* Contenedor del Formulario */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Bienvenido de nuevo</h1>
            <p className="mt-2 text-sm text-slate-500">
              Ingrese sus credenciales para acceder al panel de control.
            </p>
          </div>
          
          {/* 5. Mostramos el error general de login si existe */}
          {loginError && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-sm font-medium text-red-600">{loginError}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            
            {/* CAMPO USUARIO */}
            <div>
              <label
                htmlFor="usuario"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Usuario
              </label>
              <input
                type="text"
                id="usuario"
                {...register("usuario", { 
                  required: "El usuario es obligatorio" 
                })}
                aria-invalid={errors.usuario ? "true" : "false"}
                placeholder="ej: admin"
                className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  errors.usuario 
                    ? "border-red-400 focus:ring-red-100" 
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />
              {errors.usuario && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.usuario.message as string}
                </p>
              )}
            </div>

            {/* CAMPO CONTRASEÑA */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Contraseña
                </label>
                
              </div>
              <input
                type="password"
                id="password"
                {...register("password", { 
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "Debe tener al menos 6 caracteres"
                  }
                })}
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="••••••••"
                className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  errors.password 
                    ? "border-red-400 focus:ring-red-100" 
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />
              {errors.password && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            {/* BOTÓN SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all mt-8 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Verificando...
                </>
              ) : (
                <>
                  Iniciar Sesión
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}