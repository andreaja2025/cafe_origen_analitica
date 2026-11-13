Diccionario de datos
Cada registro está representado mediante un objeto JavaScript con siete propiedades:

| Propiedad | Tipo de dato | Significado |
| id | Number | Identificador único del registro de venta. |
| fecha | String | Fecha en la que se realizó la venta, expresada en formato YYYY-MM-DD. |
| cliente | String | Código de identificación del cliente. |
| producto | String | Nombre del producto adquirido. |
| ciudad | String | Ciudad asociada a la venta. |
| cantidad | Number | Número de unidades vendidas. |
| precio | Number / null | Precio unitario del producto. Puede contener un valor faltante. |

Observación: La fecha está almacenada como texto (String), aunque representa un dato temporal. El precio admite un valor numérico o null para identificar información faltante.

Casos borde detectados

Durante la exploración de los 12 registros se identificaron los siguientes casos que requieren atención:

1. Inconsistencia en el nombre de la ciudad (ID 5)

- Problema: La ciudad aparece escrita como "medellín", mientras que en otros registros aparece como "Medellín".
- Decisión: Normalizar la escritura para mantener uniformidad en los datos y evitar que una misma ciudad sea interpretada como dos categorías diferentes.

2. Cantidad igual a cero (ID 8)

- Problema: El registro presenta una cantidad de 0 unidades.
- Decisión: Conservar el registro original y marcarlo para revisión. No se contabilizará como una venta efectiva de unidades hasta determinar si se trata de un error o una operación válida.

3. Precio faltante (ID 12)

- Problema: El registro no contiene información sobre el precio del producto; su valor es null.
- Decisión: Mantener el valor faltante sin reemplazarlo por cero ni inventar un precio. Se excluirá de los cálculos que requieran el precio hasta obtener la información correcta.

4. Clientes que aparecen en múltiples registros

- Problema: El cliente C01 aparece en tres ventas diferentes y otros clientes también presentan compras repetidas.
- Decisión: Mantener los identificadores originales. Para los análisis de clientes se utilizará el código del cliente como referencia, evitando contar cada compra como un cliente diferente.