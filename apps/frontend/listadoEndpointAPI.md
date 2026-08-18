
***

# 📄 Documentación de API - SGI Contratación (EABT Pinar del Río)

## ⚙️ Configuración General

*   **URL Base de la API:** `http://localhost:3005/api/v1`
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

### `POST /auth/login`
Verifica las credenciales del usuario y devuelve su rol para que el frontend lo redirija a su panel correspondiente.

*   **Recibe (Body):**
    ```json
    { "username": "string", "password": "string" }
    ```
*   **Devuelve (Respuesta Exitosa):**
    ```json
    {
      "access_token": "jwt_token_aqui",
      "user": {
        "id": "string",
        "userName": "Nombre del Usuario",
        "role": "Admin" 
      }
    }
    ```
*Nota: El campo `role` debe ser exactamente `"Admin"` o `"Operador"`.*

---

## 2. 📦 Endpoints CRUD (Gestión de Datos Paginados)

*(Aplicar para: `users`, `producers`, `production-units`, `land-files`, `supplies`, `contracts`)*

El frontend usa TanStack Table y envía parámetros de paginación en la URL.

### Métodos requeridos:
*   `GET /:resource?page=1&pageSize=10` 
    *   Devuelve: `{ "data": [ {...}, {...} ], "meta": { "currentPage": 1, "totalPages": 5 } }`
*   `POST /:resource` -> Crea un registro. Devuelve el objeto creado.
*   `PUT /:resource/:id` -> Actualiza un registro. Devuelve el objeto actualizado.
*   `DELETE /:resource/:id` -> Elimina un registro. Devuelve `200 OK` o `204 No Content`.

### 📋 Estructura de Datos (JSON) esperada por el Frontend:

**User (Usuarios)**
```json
{ "id": 1, "identityCard": "12345678", "firstName": "Admin", "lastName": "Root", "fullName": "Admin Root", "userName": "admin", "password": "123456" }
```

**Producer (Productores)**
```json
{ "id": 1, "dni": "98765432", "code": "P-001", "firstName": "Juan", "lastName1": "Perez", "lastName2": "Gomez", "phone": "5551234", "productionUnitName": "Mártires del Corintia", "cupCard": "90123456", "mlcCard": "12345678" }
```

**ProductionUnit (Unidades de Producción)**
```json
{ "id": 1, "name": "Mártires del Corintia", "address": "Km 8/2 carretera San Juan" }
```

**LandFile (Expedientes de Tierra)**
```json
{ "id": 1, "producerCode": "P-001", "productionUnitName": "Mártires del Corintia", "fileNumber": "EXP-001", "area": 10.5, "issueDate": "2021-01-15", "expirationDate": "2026-01-15", "propertyType": "Propietario" }
```

**Supply (Insumos)**
```json
{ "id": 1, "name": "Fertilizante A", "price": 25.50, "category": "Canasta basica", "tapado": 10, "vegaFina2da": 10, "burley": 10, "vegaFina1ra": 10, "solPalo": 10, "totalQuantity": 50 }
```

**Contract (Contratos)**
```json
{ "id": 1, "producerCode": "P-001", "productionUnitName": "Mártires del Corintia", "number": "CNT-2023-01", "plantingArea": 5.0, "seedlingQuantity": 1000, "plantingType": "Semia", "tobaccoType": "Virginia", "startDate": "2023-05-01", "endDate": "2023-09-01" }
```

---

## 3. 📊 Endpoints de Reportes

### `GET /reports`
Devuelve un objeto JSON con los datos precalculados para los gráficos y tablas del módulo de reportes.

El frontend espera un objeto con las claves `r1`, `r2`, `r3`, `r4`, `r5`. Cada clave debe contener un `title`, un arreglo `table` y un arreglo `chartData`.

*   **Devuelve (Respuesta Exitosa):**
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