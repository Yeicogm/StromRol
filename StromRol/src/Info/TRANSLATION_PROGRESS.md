**Estado de la traducción — 29 de noviembre de 2025**

- Archivo objetivo: `src/Info/spells.json`
- Script de aplicación: `scripts/translate_spells_batch.py` (usa `MAPPING` con traducciones por `id`).
- Backup más reciente: `src/Info/spells.json.bak` (creado antes de la última escritura).
 - Último id traducido y aplicado: `360` (traducciones añadidas y escritas al JSON).
 - Estado actual: Traducción por lotes: ids `301–360` aplicados.
 - Siguiente id pendiente: `361`.
 - Último id traducido y aplicado: `380` (traducciones añadidas y escritas al JSON).
 - Estado actual: Traducción por lotes: ids `301–380` aplicados.
 - Siguiente id pendiente: `381`.

Pasos para reanudar (automático, recomendado):

1. Abrir terminal en la carpeta del proyecto:

```powershell
Set-Location 'C:\Users\yeico\REPOS\StromRol\StromRol'
```

2. Editar `scripts/translate_spells_batch.py` añadiendo las entradas en `MAPPING` para los ids siguientes (solo `name` y `description`).

3. Ejecutar el script para aplicar los cambios y validar JSON:

```powershell
python .\scripts\translate_spells_batch.py
```

4. Verificar que `src/Info/spells.json` contiene las traducciones esperadas y que `spells.json.bak` se generó.

Notas y recomendaciones:

- El script crea una copia de seguridad (`.bak`) antes de sobrescribir — no borres el backup hasta confirmar el resultado final.
- Mantén los valores de `name` y `description` únicamente; no añadas campos nuevos.
- Sugerencia de flujo: trabajar en lotes de ~20 ids por pasada y ejecutar el script tras cada lote.
- Si quieres, puedo crear commits automáticos por lotes (p. ej. cada 20 ids). Dime tu preferencia.

Contacto del estado: este archivo refleja el punto de restauración si necesitas pausar y continuar.

-- Generado automáticamente por el asistente al aplicar traducciones (estado del repo)
