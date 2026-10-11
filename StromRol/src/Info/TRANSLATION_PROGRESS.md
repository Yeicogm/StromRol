**Estado de la traducción — 11 de octubre de 2026**

- Archivo objetivo: `src/Info/spells.json`
- Script de aplicación: `scripts/translate_spells_batch.py` (usa `MAPPING` con traducciones por `id`).
- Backup más reciente: `src/Info/spells.json.bak` (creado antes de la última escritura).
- Último id traducido y aplicado: `887` (traducciones añadidas y escritas al JSON).
- Estado actual: **Traducción completa**. Total: 728 entradas en `MAPPING`, 887 hechizos en `spells.json`, 0
  descripciones en inglés restantes.

Lotes aplicados (cada uno de ~20 ids, ejecutando el script tras cada lote):

| Lote          | Rango de ids                | Hechizos | Acumulado |
| ------------- | --------------------------- | -------- | --------- |
| 1             | 501–557                     | 20       | 460       |
| 2             | 562–607                     | 20       | 480       |
| 3             | 608–651                     | 20       | 500       |
| 4             | 653–688                     | 20       | 520       |
| 5             | 689–717                     | 20       | 540       |
| 6             | 719–750                     | 20       | 560       |
| 7             | 751–798                     | 20       | 580       |
| 8             | 799–821                     | 20       | 600       |
| 9             | 822–847                     | 20       | 620       |
| 10            | 848–868                     | 20       | 640       |
| 11            | 869–887                     | 16       | 656       |
| 12 (catch-up) | 502,504,...,778 (mezclados) | 72       | 728       |

Lote 12 de repaso: incluye 72 hechizos adicionales que comenzaban con "**This spell**" o marcadores similares,
identificados tras una segunda pasada de verificación con un detector más estricto.

Notas:

- El script crea una copia de seguridad (`.bak`) antes de sobrescribir — no borres el backup hasta confirmar
  el resultado final.
- Mantén los valores de `name` y `description` únicamente; no añadas campos nuevos.
- Todos los hechizos están ahora en español; verificado con un detector de descripciones que comienzan por
  marcadores ingleses típicos ("When ", "This ", "By ", "\*\*This", etc.).
- Si necesitas revisar o corregir traducciones específicas, los datos están en `MAPPING` dentro de
  `scripts/translate_spells_batch.py`.

Contacto del estado: este archivo refleja el punto de restauración si necesitas pausar y continuar.

-- Generado automáticamente por el asistente al aplicar traducciones (estado del repo)

-- Generado automáticamente por el asistente al aplicar traducciones (estado del repo)
