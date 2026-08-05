¡Perfecto! Aquí tienes el documento `README.md` redactado de forma profesional y clara, listo para que se lo envíes a tu compañero de backend. 

Puedes copiar todo este texto, pegarlo en un archivo llamado `API_ENDPOINTS.md` (o simplemente pasárselo por WhatsApp/Telegram/Email).

***

# 📄 Documentación de API - SGI Contratación (EABT Pinar del Río)

Este documento describe los endpoints necesarios para el funcionamiento del Frontend (React + Vite). 

## ⚙️ Configuración General

*   **URL Base de la API:** `http://localhost:3000/api`
*   **Formato de intercambio:** JSON (`Content-Type: application/json`)
*   **Configuración CORS (¡MUY IMPORTANTE!):** 
    El backend DEBE tener habilitado CORS para el puerto de Vite (por defecto `http://localhost:5173`). Sin esto, el navegador bloqueará todas las peticiones.
    ```javascript
    // Ejemplo en Node.js/Express:
    const cors = require('cors');
    app.use(cors({ origin: 'http://localhost:5173' }));
    ```

---

## 1. 🔐 Autenticación (Login)

### `POST /api/auth/login`
Verifica las credenciales del usuario y devuelve su rol para que el frontend lo redirija a su panel correspondiente.

**Body (JSON):**
```json
{
  "usuario": "string",
  "password": "string"
}
```
**Respuesta Exitosa (200 OK):**
```json
{
  "token": "jwt_token_aqui",
  "role": "Admin", 
  "userName": "Nombre del Usuario"
}
```
*Nota: El campo `role` debe ser exactamente `"Admin"` o `"Operador"`.*
*Nota 2: El frontend tiene un superusuario local (`Tenebris`) para pruebas de desarrollo que no pasa por la API.*

---

## 2. 📦 Endpoints CRUD (Gestión de Datos)

Para cada módulo, se requiere un conjunto estándar de rutas REST. La API debe devolver arreglos de objetos JSON.

### Módulos y Rutas Base:
*   **Usuarios:** `/api/users`
*   **Productores:** `/api/producers`
*   **Unidades de Producción:** `/api/production-units`
*   **Expedientes de Tierra:** `/api/land-files`
*   **Insumos:** `/api/supplies`
*   **Contratos:** `/api/contracts`

### Métodos requeridos para cada módulo:

| Método | Ruta | Descripción | Respuesta Esperada |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Obtiene todos los registros | `200 OK` - Array de objetos `[...]` |
| `POST` | `/` | Crea un nuevo registro | `201 Created` - Objeto creado `{...}` (incluyendo su `id`) |
| `PUT` | `/:id` | Actualiza un registro existente | `200 OK` - Objeto actualizado `{...}` |
| `DELETE` | `/:id` | Elimina un registro | `200 OK` o `204 No Content` |

### 📋 Estructura de Datos (JSON) esperada por el Frontend:

**User (Usuario)**
```json
{ "id": 1, "identityCard": "12345678", "firstName": "Admin", "lastName": "Root", "fullName": "Admin Root", "userName": "admin", "password": "123456" }
```

**Producer (Productor)**
```json
{ "id": 1, "dni": "98765432", "code": "P-001", "firstName": "Juan", "lastName1": "Perez", "lastName2": "Gomez", "phone": "5551234", "productionUnitName": "Mártires del Corintia", "cupCard": "90123456", "mlcCard": "12345678" }
```

**ProductionUnit (Unidad de Producción)**
```json
{ "id": 1, "name": "Mártires del Corintia", "address": "Km 8/2 carretera San Juan" }
```

**LandFile (Expediente de Tierra)**
```json
{ "id": 1, "producerCode": "P-001", "productionUnitName": "Mártires del Corintia", "fileNumber": "EXP-001", "area": 10.5, "issueDate": "2021-01-15", "expirationDate": "2026-01-15", "propertyType": "Propietario" }
```

**Supply (Insumo)**
```json
{ "id": 1, "name": "Fertilizante A", "price": 25.50, "category": "Canasta basica", "tapado": 10, "vegaFina2da": 10, "burley": 10, "vegaFina1ra": 10, "solPalo": 10, "totalQuantity": 50 }
```

**Contract (Contrato)**
```json
{ "id": 1, "producerCode": "P-001", "productionUnitName": "Mártires del Corintia", "number": "CNT-2023-01", "plantingArea": 5.0, "seedlingQuantity": 1000, "plantingType": "Semia", "tobaccoType": "Virginia", "startDate": "2023-05-01", "endDate": "2023-09-01" }
```

---

## 3. 📊 Endpoints de Reportes

### `GET /api/reports`
Devuelve un objeto JSON con los datos precalculados para los gráficos y tablas del módulo de reportes.

**Respuesta Esperada (Estructura):**
El frontend espera un objeto con las claves `r1`, `r2`, `r3`, `r4`, `r5`. Cada clave debe contener un `title`, un arreglo `table` y un arreglo `chartData`.

```json
{
  "r1": {
    "title": "Total de ha por unidad y tipo de tabaco",
    "table": [{ "unidad": "Carlos Hidalgo", "tipo": "Vega Fina 1ra", "ha": 80 }],
    "chartData": [{ "name": "Carlos Hidalgo", "Vega Fina 1ra": 80, "Tapado": 50 }]
  },
  "r2": {
    "title": "Total de ha contratadas por tipo de tabaco",
    "table": [{ "tipo": "Tapado", "total": 210 }],
    "chartData": [{ "name": "Tapado", "value": 210 }]
  },
  "r3": {
    "title": "Productores contratados por unidad",
    "table": [{ "unidad": "Carlos Hidalgo", "productores": 4 }],
    "chartData": [{ "name": "Carlos Hidalgo", "productores": 4 }]
  },
  "r4": {
    "title": "Insumos asignados a cada productor",
    "table": [{ "productor": "Juan Pérez", "insumo": "Fertilizante A", "cantidad": 50 }],
    "chartData": [{ "name": "Fertilizante A", "value": 65 }]
  },
  "r5": {
    "title": "Listado de productores por unidad",
    "table": [{ "productor": "Juan Pérez Guerra", "unidad": "Carlos Hidalgo" }],
    "chartData": [{ "name": "Carlos Hidalgo", "value": 2 }]
  }
}
```