import json
from pathlib import Path

p = Path(r"c:/Users/yeico/REPOS/StromRol/StromRol/src/Info/spells.json")
js = json.loads(p.read_text(encoding='utf-8'))
for s in js.get('spells', []):
    if s.get('id') == 12:
        s['description'] = (
            "Este hechizo permite al sacerdote ordenar a otra criatura con una sola palabra.\n\n"
            "La orden debe pronunciarse en un idioma que la criatura entienda. El sujeto obedecerá en la medida de sus capacidades solo mientras la orden sea absolutamente clara y inequívoca; por ejemplo, una orden de \"¡Suicídate!\" se ignora. Una orden de \"¡Muere!\" provoca que la criatura caiga en un estado de desmayo o catalepsia durante un asalto, pero después se recupera y queda viva.\n\n"
            "Órdenes típicas: *retrocede*, *detente*, *huye*, *corre*, *para*, *cae*, *ve*, *vete*, *entrégate*, *duerme*, *descansa*, etc.\n\n"
            "Ninguna orden afecta a la criatura por más de un asalto. Los muertos vivientes no se ven afectados.\n\n"
            "Criaturas con Inteligencia 13 o más, o con 6 o más Dados de Golpe (o niveles de experiencia), tienen derecho a una tirada de salvación contra hechizos, ajustada por Sabiduría. (Criaturas con 13+ de Inteligencia y 6+ DG/niveles solo obtienen una salvación.)"
        )
        break
p.write_text(json.dumps(js, ensure_ascii=False, indent=2), encoding='utf-8')
print('Hecho: descripción del hechizo id 12 actualizada.')
