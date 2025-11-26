from pathlib import Path
p = Path(r"c:/Users/yeico/REPOS/StromRol/StromRol/src/Info/spells.json")
s = p.read_text(encoding='utf-8')
# Remove control characters except TAB(9), LF(10), CR(13)
clean = ''.join(ch for ch in s if (ord(ch) >= 32) or ord(ch) in (9,10,13))
if clean != s:
    p.write_text(clean, encoding='utf-8')
    print('Se eliminaron caracteres de control no válidos.')
else:
    print('No se detectaron caracteres de control no válidos.')
