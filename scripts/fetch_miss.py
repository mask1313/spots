import json, time, urllib.parse, urllib.request

KEY = "3"
BASE = f"https://www.thesportsdb.com/api/v1/json/{KEY}"

def get(url, tries=4):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=20) as r:
                return json.loads(r.read().decode())
        except Exception:
            time.sleep(3.0)
    return {}

def team_badge(names):
    for n in names:
        d = get(f"{BASE}/searchteams.php?t={urllib.parse.quote(n)}")
        teams = d.get("teams") or []
        if teams and teams[0].get("strBadge"):
            return teams[0]["strBadge"]
        time.sleep(3.0)
    return ""

def player_img(names):
    for n in names:
        d = get(f"{BASE}/searchplayers.php?p={urllib.parse.quote(n)}")
        ps = d.get("player") or []
        if ps and (ps[0].get("strCutout") or ps[0].get("strThumb")):
            p = ps[0]
            return {"cutout": p.get("strCutout") or "", "thumb": p.get("strThumb") or ""}
        time.sleep(3.0)
    return {"cutout": "", "thumb": ""}

CLUBS = {
    "hilal": ["Al Hilal Saudi", "Al Hilal"], "nassr": ["Al Nassr FC", "Al Nassr"],
    "ittihad": ["Ittihad", "Al Ittihad"], "ahli": ["Al Ahli SC", "Al Ahli"],
    "akhdoud": ["Al Akhdoud", "Akhdoud"],
    "porto": ["Porto", "FC Porto"], "benfica": ["Benfica", "SL Benfica"], "napoli": ["SSC Napoli", "Napoli"],
    "roma": ["Roma", "AS Roma"], "celtic": ["Celtic", "Celtic FC"], "milan": ["AC Milan", "Milan"],
    "tottenham": ["Tottenham Hotspur", "Tottenham"], "newcastle": ["Newcastle United", "Newcastle"],
    "sevilla": ["Sevilla FC", "Sevilla"], "marseille": ["Olympique de Marseille", "Marseille"],
}
PLAYERS = {"rodrygo": ["Rodrygo Goes", "Rodrygo"], "valverde": ["Fede Valverde", "Federico Valverde"]}

d = json.load(open("/app/scripts/sportsdb_assets.json"))
for k, names in CLUBS.items():
    b = team_badge(names)
    if b:
        d["clubs"][k] = b
    print("club", k, "->", "OK" if b else "MISS", flush=True)
for k, names in PLAYERS.items():
    img = player_img(names)
    if img["cutout"] or img["thumb"]:
        d["players"][k] = img
    print("star", k, "->", "OK" if (img["cutout"] or img["thumb"]) else "MISS", flush=True)

json.dump(d, open("/app/scripts/sportsdb_assets.json", "w"), ensure_ascii=False, indent=1)
ok_c = sum(1 for v in d["clubs"].values() if v)
ok_p = sum(1 for v in d["players"].values() if v["cutout"] or v["thumb"])
print(f"DONE clubs {ok_c}/{len(d['clubs'])} players {ok_p}/{len(d['players'])}", flush=True)
