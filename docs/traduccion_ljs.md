# Traducción de los 486 hechizos LJS — Guía operativa

Esta guía explica cómo continuar, en otra sesión o en otro día, la
traducción al español de las descripciones de los 486 hechizos del
**LIBRO JUGADOR STROM** (LJS) del dataset
`StromRol/public/dnd_2e_spells_es.json`.

> **Estado a 2026-10-11**: 0/486 descripciones traducidas (todas en
> inglés con `idioma_descripcion: "en"`). El script ya existe y
> está probado. Pendiente: empezar a traducir por lotes.

---

## Lo que hay en el repo hoy

- **`StromRol/public/dnd_2e_spells_es.json`** — dataset de hechizos.
  Los 486 con stats completas (312 mago + 174 sacerdote) están
  marcados con `fuente_strom: "LIBRO JUGADOR STROM"`.
- **`StromRol/public/dnd_2e_spells_es.json.bak`** — backup creado
  por el script `add_fuente_strom.mjs`. Tiene los datos **anteriores**
  al campo `fuente_strom`. No usar para restaurar.
- **`StromRol/scripts/add_fuente_strom.mjs`** — añade el campo
  `fuente_strom` a los 486 hechizos con stats. Ya ejecutado.
- **`StromRol/scripts/translate_ljs_descriptions.mjs`** — aplica
  parches JSON de traducciones al dataset. Solo modifica
  `descripcion` e `idioma_descripcion`. **Es idempotente**.

---

## Comprobaciones rápidas (antes de empezar)

```powershell
# Ir a la carpeta del proyecto (PowerShell)
cd C:\Users\yeico\REPOS\StromRol\StromRol

# Verificar cuántos hechizos están en cada idioma
node -e "const d=require('./public/dnd_2e_spells_es.json');const t=[...d.conjuros_de_hechicero.conjuros_con_estadisticas_completas,...d.conjuros_de_sacerdote.conjuros_con_estadisticas_completas];const en=t.filter(h=>h.idioma_descripcion==='en').length;const es=t.filter(h=>h.idioma_descripcion==='es').length;console.log('EN:',en,'/ ES:',es,'/ Total:',t.length,'/',Math.round(es/t.length*100)+'%');"

# Listar hechizos aún sin traducir (los N primeros)
node -e "const d=require('./public/dnd_2e_spells_es.json');const t=[...d.conjuros_de_hechicero.conjuros_con_estadisticas_completas,...d.conjuros_de_sacerdote.conjuros_con_estadisticas_completas].map((h,i)=>({h,i})).filter(x=>x.h.idioma_descripcion==='en');t.slice(0,10).forEach(x=>console.log(x.i,x.h.nombre,'|',x.h.descripcion.slice(0,80)+'...'));"
```

---

## Flujo por sesión (lote de 30–50 hechizos recomendado)

### 1) Elegir lote

Buen punto de partida: **mago nivel 1** (45 hechizos) o **sacerdote
nivel 1** (24 hechizos). Cada nivel de mago tiene ~30-50; el nivel
9 de mago tiene solo 18 (más rápido).

Para listar un nivel concreto:

```powershell
node -e "const d=require('./public/dnd_2e_spells_es.json');const m=d.conjuros_de_hechicero.conjuros_con_estadisticas_completas.filter(h=>h.nivel===1&&h.idioma_descripcion==='en');console.log('Mago nivel 1 pendientes:',m.length);m.forEach((h,i)=>console.log(i,h.nombre,'|',h.descripcion.slice(0,60)+'...'));"
```

### 2) Pedir las traducciones al LLM

Abre un chat con el LLM y dile:

> "Aquí tienes N descripciones de hechizos de AD&D 2E en inglés.
> Devuélvemelas en JSON con el formato:
> `[{ \"caster\": \"mago\" | \"sacerdote\", \"indice\": <n>, \"descripcion\": \"<texto en español>\" }, ...]`
> Mantén los nombres propios (Melf, Leomund, Tenser's...). Traduce
> 'wizard' como 'mago', 'priest' como 'sacerdote', 'level' como
> 'nivel', 'round' como 'asiento' (ronda), 'spell' como 'conjuro'."

El LLM te devuelve un array JSON. Pégalo en el siguiente paso.

### 3) Escribir el parche a disco (¡cuidado con el encoding!)

⚠️ **No uses `Set-Content -Encoding utf8`** en PowerShell 5.1 —
añade BOM y rompe el JSON. Usa **Node**:

```powershell
# Pegar el JSON del LLM como una string multilínea
$parche = @'
[{"caster":"mago","indice":0,"descripcion":"..."}, ...]
'@

# Escribirlo correctamente a un archivo
node -e "const fs=require('fs');fs.writeFileSync('$env:TEMP\\lote.json', process.env.PARCHE, 'utf8')" 
# Si el comando anterior no funciona, usa este método alternativo:

# Método alternativo (temporal + heredoc)
$env:PARCHE = $parche
node -e "const fs=require('fs');fs.writeFileSync(process.env.TEMP+'\\lote.json', process.env.PARCHE, 'utf8')"

# Verificar que el JSON está bien
Get-Content "$env:TEMP\lote.json"
```

> **Truco**: si el JSON del LLM tiene caracteres UTF-8 raros
> (tildes, eñes), prueba `Get-Content` con `-Encoding utf8` (sin BOM
> en PS 6+) o simplemente confíate de Node, que escribe UTF-8
> siempre bien.

### 4) Aplicar el parche

```powershell
cd C:\Users\yeico\REPOS\StromRol\StromRol
node scripts/translate_ljs_descriptions.mjs "$env:TEMP\lote.json"
```

Salida esperada:

```
Backup ya existía: ...dnd_2e_spells_es.json.bak (no se sobrescribe)

Resumen:
  traducidos:    45
  saltados:      0
  no encontrados: 0
  archivo:       ...dnd_2e_spells_es.json
```

- **traducidos**: hechizos que se han pasado de EN a ES.
- **saltados**: ya estaban en ES (segunda ejecución del mismo parche).
- **no encontrados**: índices que no existen en el dataset (error en el lote).

### 5) Verificar progreso

```powershell
node -e "const d=require('./public/dnd_2e_spells_es.json');const t=[...d.conjuros_de_hechicero.conjuros_con_estadisticas_completas,...d.conjuros_de_sacerdote.conjuros_con_estadisticas_completas];console.log('ES:',t.filter(h=>h.idioma_descripcion==='es').length,'/ Total:',t.length);"
```

### 6) Verificar en el navegador

1. `npm run build` (regenera `docs/`).
2. Abre `http://localhost:5173/` → pestaña **COMPENDIO** →
   **Hechizos por libro**.
3. El filtro **Libro** ya está en `LJS — LIBRO JUGADOR STROM`
   por defecto.
4. Selecciona un hechizo del lote recién traducido.
5. Comprueba que:
   - La descripción aparece en español.
   - El chip **`EN`** ya **no** sale junto al nombre.

### 7) Commit

```powershell
cd C:\Users\yeico\REPOS\StromRol
git add StromRol/public/dnd_2e_spells_es.json
git commit -m "Traduce LJS mago nivel N (X hechizos)"
git push
```

---

## Plan de hitos (orientativo)

| Hito | Hechizos | % | Sugerencia de lote |
| --- | --- | --- | --- |
| H1 | 50 | 10% | Mago N1 (45) |
| H2 | 150 | 31% | Sacerdote N1-2 (24 + 27) + Mago N2 (50) |
| H3 | 250 | 51% | Mago N3 (47) + Sacerdote N3 (29) |
| H4 | 350 | 72% | Mago N4-5 (48 + 50) |
| H5 | 486 | 100% | Mago N6-9 + Sacerdote N4-7 (resto) |

Cada sesión debería traducir entre 30 y 50 hechizos para no saturar
al LLM ni al usuario. Con 8-10 sesiones se cubren los 486.

---

## Convenciones de traducción

| Inglés | Español |
| --- | --- |
| wizard | mago |
| priest | sacerdote |
| caster | lanzador |
| level | nivel |
| round / rd. | asiento (ronda) |
| spell | conjuro |
| saving throw | tirada de salvación |
| touch | toque |
| foot / feet | pie / pies |
| inch / inches | pulgada / pulgadas |
| yard / yards | yarda / yardas |
| damage | daño |
| hit points | puntos de golpe |
| area of effect | área de efecto |
| duration | duración |
| casting time | tiempo de lanzamiento |
| components | componentes |
| range | alcance |
| school | escuela |
| sphere | esfera |
| save vs. spell | salvación contra conjuro |
| None / Neg. / Special | Ninguna / Neg. / Especial |
| Reversible | Reversible |
| Reversed | Invertido / Reverso |
| Material component | componente material |
| Verbal component | componente verbal |
| Somatic component | componente somático |

### Reglas específicas del proyecto

- **No traducir** `nombre_original_en` (queda en inglés en cursiva).
- **No traducir** nombres propios (Melf, Leomund, Tenser's, Bigby, Nahal, Hornung, Mordenkainen, etc.).
- **No traducir** nombres de deidades o planos (Oerth, Ravenloft, etc.).
- **No traducir** "Hit Dice" → en español se mantiene como "Dados de Golpe" o se deja "Hit Dice" entre comillas si suena raro.
- **No traducir** "Saving Throw" → "Tirada de Salvación" (con mayúsculas).
- **Mantener** el formato de listas y abreviaturas (VSM, VS, V, M).
- **Mantener** el sentido del original: si el original dice "wizard may", traducir como "el mago puede", no como "puede el mago" (mantener orden natural en español cuando se pueda).

---

## Errores comunes y soluciones

### "ERROR: Unexpected token '�', ... is not valid JSON"
Estás intentando leer un archivo con BOM. Solución: reescribe el
archivo con Node (ver paso 3).

### "Backup ya existía: ... (no se sobrescribe)"
Es el comportamiento correcto. El `.bak` original se mantiene.

### "saltados: 5" cuando esperas 0
Has ejecutado el mismo parche dos veces. No es un problema: el
script es idempotente. Los 5 ya estaban traducidos.

### "no encontrados: 3"
Algún índice del parche está mal. Revisa que el array empiece en
0 y que la sección (`mago` / `sacerdote`) coincida con el hechizo
que esperabas traducir.

### Al restaurar el `.bak` pierdes `fuente_strom`
El `.bak` se creó **antes** de `add_fuente_strom.mjs`. Si lo
restauras, tienes que re-ejecutar:
```powershell
node scripts/add_fuente_strom.mjs
```
Para evitar esto, considera renombrar el backup tras cada hito
importante:
```powershell
Copy-Item public/dnd_2e_spells_es.json public/dnd_2e_spells_es.json.bak_h1
```

---

## Resumen en un comando

Si quieres traducir **toda la sección mago de golpe** en una sola
sesión (muchas horas, recomendado solo para valientes):

```powershell
# 1) Listar todo lo pendiente de mago
node -e "const d=require('./public/dnd_2e_spells_es.json');const m=d.conjuros_de_hechicero.conjuros_con_estadisticas_completas.filter(h=>h.idioma_descripcion==='en');console.log('Pendientes mago:',m.length);"

# 2) Pegar el JSON del LLM en $parche
# 3) Escribir
$env:PARCHE = $parche
node -e "const fs=require('fs');fs.writeFileSync(process.env.TEMP+'\\lote.json', process.env.PARCHE, 'utf8')"

# 4) Aplicar
node scripts/translate_ljs_descriptions.mjs "$env:TEMP\lote.json"

# 5) Verificar
node -e "const d=require('./public/dnd_2e_spells_es.json');const m=d.conjuros_de_hechicero.conjuros_con_estadisticas_completas;console.log('Mago ES:',m.filter(h=>h.idioma_descripcion==='es').length,'/',m.length);"
```

---

## Recursos adicionales

- **Plan completo en memoria**: `/memories/session/translate_ljs_plan.md`
  (con detalles de diseño, riesgos, decisiones).
- **Comandos de inspección** del dataset: ver la sección
  "Comprobaciones rápidas" arriba.
- **Lista de escuelas / esferas / fuentes**: están en el JSON
  raíz (`leyenda_de_fuentes`) y en cada hechizo.
- **Compendio de magia original** (referencia): Ediciones Zinco
  1992-1997 (Manual del Jugador + Tomo de Magia).

---

**Última actualización**: 2026-10-11. Plan operativo creado por
el LLM asistente. Probado y verificado en navegador con
`http://localhost:5173/`.
