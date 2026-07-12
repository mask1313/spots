import json, time, urllib.parse, urllib.request

KEY = "3"
BASE = f"https://www.thesportsdb.com/api/v1/json/{KEY}"

def get(url, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=20) as r:
                return json.loads(r.read().decode())
        except Exception:
            time.sleep(2.0)
    return {}

def team_badge(names):
    for n in names:
        d = get(f"{BASE}/searchteams.php?t={urllib.parse.quote(n)}")
        teams = d.get("teams") or []
        if teams and teams[0].get("strBadge"):
            return teams[0]["strBadge"]
        time.sleep(2.2)
    return ""

def player_img(names):
    for n in names:
        d = get(f"{BASE}/searchplayers.php?p={urllib.parse.quote(n)}")
        ps = d.get("player") or []
        if ps:
            p = ps[0]
            img = p.get("strCutout") or p.get("strThumb") or ""
            if img:
                return {"cutout": p.get("strCutout") or "", "thumb": p.get("strThumb") or ""}
        time.sleep(2.2)
    return {"cutout": "", "thumb": ""}

SAUDI = {
    "hilal": ["Al Hilal"], "nassr": ["Al Nassr"], "ittihad": ["Al Ittihad", "Al-Ittihad"],
    "ahli": ["Al Ahli", "Al-Ahli"], "shabab": ["Al Shabab"], "fayha": ["Al Fayha", "Al-Feiha"],
    "qadisiyah": ["Al Qadisiyah", "Al-Qadsiah"], "ettifaq": ["Al Ettifaq"], "damac": ["Damac"],
    "khaleej": ["Al Khaleej", "Al-Khaleej"], "fath": ["Al Fateh"], "abha": ["Abha"],
    "raed": ["Al Raed"], "orubah": ["Al Orobah", "Al-Orubah"], "wehda": ["Al Wehda"],
    "hazm": ["Al Hazm", "Al-Hazem"], "akhdoud": ["Al Akhdoud"], "tai": ["Al Tai"],
}
WORLD = {
    "barca": ["Barcelona"], "realmadrid": ["Real Madrid"], "intermiami": ["Inter Miami"],
    "mancity": ["Manchester City"], "liverpool": ["Liverpool"], "manutd": ["Manchester United"],
    "bayern": ["Bayern Munich"], "psg": ["Paris SG", "Paris Saint-Germain"], "juventus": ["Juventus"],
    "inter": ["Inter Milan", "Internazionale"], "arsenal": ["Arsenal"], "chelsea": ["Chelsea"],
    "atletico": ["Atletico Madrid", "Atlético Madrid"], "dortmund": ["Borussia Dortmund"],
    "ajax": ["Ajax"], "porto": ["FC Porto", "Porto"], "benfica": ["Benfica"], "napoli": ["Napoli"],
    "roma": ["AS Roma", "Roma"], "celtic": ["Celtic"], "milan": ["AC Milan", "Milan"],
    "tottenham": ["Tottenham"], "newcastle": ["Newcastle"], "sevilla": ["Sevilla"],
    "marseille": ["Marseille", "Olympique Marseille"],
}
STARS = {
    "ronaldo": ["Cristiano Ronaldo"], "messi": ["Lionel Messi"], "mbappe": ["Kylian Mbappe"],
    "neymar": ["Neymar"], "haaland": ["Erling Haaland"], "benzema": ["Karim Benzema"],
    "vinicius": ["Vinicius Junior", "Vinicius"], "salah": ["Mohamed Salah"], "dybala": ["Paulo Dybala"],
    "modric": ["Luka Modric"], "dejong": ["Frenkie de Jong"], "bellingham": ["Jude Bellingham"],
    "pedri": ["Pedri"], "lewy": ["Robert Lewandowski"], "debruyne": ["Kevin De Bruyne"],
    "sane": ["Leroy Sane"], "kane": ["Harry Kane"], "rashford": ["Marcus Rashford"],
    "osimhen": ["Victor Osimhen"], "yamal": ["Lamine Yamal"], "rodri": ["Rodri"],
    "saka": ["Bukayo Saka"], "foden": ["Phil Foden"], "musiala": ["Jamal Musiala"],
    "wirtz": ["Florian Wirtz"], "nicowilliams": ["Nico Williams"], "lautaro": ["Lautaro Martinez"],
    "leao": ["Rafael Leao"], "brunofernandes": ["Bruno Fernandes"], "palmer": ["Cole Palmer"],
    "rodrygo": ["Rodrygo"], "valverde": ["Federico Valverde"],
}

out = {"clubs": {}, "players": {}}
for k, names in {**SAUDI, **WORLD}.items():
    b = team_badge(names)
    out["clubs"][k] = b
    print("club", k, "->", "OK" if b else "MISS", flush=True)
for k, names in STARS.items():
    img = player_img(names)
    out["players"][k] = img
    print("star", k, "->", "OK" if (img["cutout"] or img["thumb"]) else "MISS", flush=True)

with open("/app/scripts/sportsdb_assets.json", "w") as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
ok_c = sum(1 for v in out["clubs"].values() if v)
ok_p = sum(1 for v in out["players"].values() if v["cutout"] or v["thumb"])
print(f"DONE clubs {ok_c}/{len(out['clubs'])} players {ok_p}/{len(out['players'])}", flush=True)
