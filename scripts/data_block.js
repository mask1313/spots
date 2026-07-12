const DATA = {

  // ===== الأندية السعودية =====
  hilal: {
    name: 'الهلال', sub: 'نادي الهلال السعودي',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'الموقع الرسمي',    url: 'https://www.alhilal.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@Alhilal_FC',       url: 'https://x.com/Alhilal_FC' },
      { icon: '📸', cls: 'icon-ig',  label: 'alhilal.fc',         url: 'https://www.instagram.com/alhilal.fc' },
      { icon: '▶',  cls: 'icon-yt',  label: 'AlHilal FC',         url: 'https://www.youtube.com/@AlHilalFC' },
    ]
  },
  nassr: {
    name: 'النصر', sub: 'نادي النصر السعودي',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'الموقع الرسمي',    url: 'https://www.alnassr.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlNassrFC',        url: 'https://x.com/AlNassrFC' },
      { icon: '📸', cls: 'icon-ig',  label: 'alnassr_fc',         url: 'https://www.instagram.com/alnassr_fc' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Al Nassr FC',        url: 'https://www.youtube.com/@AlNassrFC' },
    ]
  },
  ittihad: {
    name: 'الاتحاد', sub: 'نادي الاتحاد السعودي',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'الموقع الرسمي',    url: 'https://www.alittihad.com.sa' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@ittihad_club',     url: 'https://x.com/ittihad_club' },
      { icon: '📸', cls: 'icon-ig',  label: 'ittihadclub',        url: 'https://www.instagram.com/ittihadclub' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Ittihad Club',       url: 'https://www.youtube.com/@ittihadclub' },
    ]
  },
  ahli: {
    name: 'الأهلي', sub: 'نادي الأهلي السعودي',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'الموقع الرسمي',    url: 'https://www.alahli.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlAhliSaudiFC',    url: 'https://x.com/AlAhliSaudiFC' },
      { icon: '📸', cls: 'icon-ig',  label: 'alahli_fc',          url: 'https://www.instagram.com/alahli_fc' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Al Ahli Saudi FC',   url: 'https://www.youtube.com/@AlAhliSaudiFC' },
    ]
  },
  shabab: {
    name: 'الشباب', sub: 'نادي الشباب السعودي',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'الموقع الرسمي',    url: 'https://www.alshabab.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlShabab_FC',      url: 'https://x.com/AlShabab_FC' },
      { icon: '📸', cls: 'icon-ig',  label: 'alshabab_fc',        url: 'https://www.instagram.com/alshabab_fc' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Al Shabab FC',       url: 'https://www.youtube.com/@AlShabab_FC' },
    ]
  },
  fayha: {
    name: 'الفيحاء', sub: 'نادي الفيحاء السعودي',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'الموقع الرسمي',    url: 'https://www.alfayha.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlFayhaClub',      url: 'https://x.com/AlFayhaClub' },
      { icon: '📸', cls: 'icon-ig',  label: 'alfayha_fc',         url: 'https://www.instagram.com/alfayha_fc' },
    ]
  },
  qadisiyah: {
    name: 'القادسية', sub: 'نادي القادسية السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlQadsiah',         url: 'https://x.com/AlQadsiah' },
      { icon: '📸', cls: 'icon-ig',  label: 'alqadsiah_fc',        url: 'https://www.instagram.com/alqadsiah_fc' },
    ]
  },
  ettifaq: {
    name: 'الاتفاق', sub: 'نادي الاتفاق السعودي',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'الموقع الرسمي',    url: 'https://www.alettifaq.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlEttifaqClub',    url: 'https://x.com/AlEttifaqClub' },
      { icon: '📸', cls: 'icon-ig',  label: 'alettifaq_club',     url: 'https://www.instagram.com/alettifaq_club' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Al Ettifaq FC',      url: 'https://www.youtube.com/@alettifaqclub' },
    ]
  },
  damac: {
    name: 'ضمك', sub: 'نادي ضمك السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@DAMAC_FC',          url: 'https://x.com/DAMAC_FC' },
      { icon: '📸', cls: 'icon-ig',  label: 'damac_fc',            url: 'https://www.instagram.com/damac_fc' },
    ]
  },
  khaleej: {
    name: 'الخليج', sub: 'نادي الخليج السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlKhaleejClub',     url: 'https://x.com/AlKhaleejClub' },
      { icon: '📸', cls: 'icon-ig',  label: 'alkhaleej_club',      url: 'https://www.instagram.com/alkhaleej_club' },
    ]
  },
  fath: {
    name: 'الفتح', sub: 'نادي الفتح السعودي',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'الموقع الرسمي',    url: 'https://www.alfath.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlFatehSaudi',     url: 'https://x.com/AlFatehSaudi' },
      { icon: '📸', cls: 'icon-ig',  label: 'alfateh_sa',         url: 'https://www.instagram.com/alfateh_sa' },
    ]
  },
  abha: {
    name: 'أبها', sub: 'نادي أبها السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@AbhaClub',          url: 'https://x.com/AbhaClub' },
      { icon: '📸', cls: 'icon-ig',  label: 'abha_club',           url: 'https://www.instagram.com/abha_club' },
    ]
  },
  raed: {
    name: 'الرائد', sub: 'نادي الرائد السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlRaedClub',        url: 'https://x.com/AlRaedClub' },
      { icon: '📸', cls: 'icon-ig',  label: 'alraed_club',         url: 'https://www.instagram.com/alraed_club' },
    ]
  },
  orubah: {
    name: 'العروبة', sub: 'نادي العروبة السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlUrubahFC',        url: 'https://x.com/AlUrubahFC' },
      { icon: '📸', cls: 'icon-ig',  label: 'alurubah_fc',         url: 'https://www.instagram.com/alurubah_fc' },
    ]
  },
  wehda: {
    name: 'الوحدة', sub: 'نادي الوحدة السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlWehda_FC',        url: 'https://x.com/AlWehda_FC' },
      { icon: '📸', cls: 'icon-ig',  label: 'alwehda_fc',          url: 'https://www.instagram.com/alwehda_fc' },
    ]
  },
  hazm: {
    name: 'الحزم', sub: 'نادي الحزم السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlHazmClub',        url: 'https://x.com/AlHazmClub' },
      { icon: '📸', cls: 'icon-ig',  label: 'alhazm_club',         url: 'https://www.instagram.com/alhazm_club' },
    ]
  },
  akhdoud: {
    name: 'الأخدود', sub: 'نادي الأخدود السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlAkhdoudFC',       url: 'https://x.com/AlAkhdoudFC' },
      { icon: '📸', cls: 'icon-ig',  label: 'alakhdoud_fc',        url: 'https://www.instagram.com/alakhdoud_fc' },
    ]
  },
  tai: {
    name: 'الطائي', sub: 'نادي الطائي السعودي',
    links: [
      { icon: '𝕏',  cls: 'icon-x',   label: '@AlTaeeFC',          url: 'https://x.com/AlTaeeFC' },
      { icon: '📸', cls: 'icon-ig',  label: 'altaee_fc',           url: 'https://www.instagram.com/altaee_fc' },
    ]
  },

  // ===== الصحف العالمية =====
  espn: {
    name: 'ESPN', sub: 'الولايات المتحدة • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'espn.com',           url: 'https://www.espn.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@espn',              url: 'https://x.com/espn' },
      { icon: '📸', cls: 'icon-ig',  label: 'espn',               url: 'https://www.instagram.com/espn' },
      { icon: '▶',  cls: 'icon-yt',  label: 'ESPN',               url: 'https://www.youtube.com/@ESPN' },
    ]
  },
  skysports: {
    name: 'Sky Sports', sub: 'المملكة المتحدة • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'skysports.com',      url: 'https://www.skysports.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@SkySports',         url: 'https://x.com/SkySports' },
      { icon: '📸', cls: 'icon-ig',  label: 'skysports',          url: 'https://www.instagram.com/skysports' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Sky Sports',         url: 'https://www.youtube.com/@SkySports' },
    ]
  },
  marca: {
    name: 'MARCA', sub: 'إسبانيا • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'marca.com',          url: 'https://www.marca.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@marca',             url: 'https://x.com/marca' },
      { icon: '📸', cls: 'icon-ig',  label: 'marca',              url: 'https://www.instagram.com/marca' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Marca',              url: 'https://www.youtube.com/@marca' },
    ]
  },
  lequipe: {
    name: "L'Équipe", sub: 'فرنسا • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'lequipe.fr',         url: 'https://www.lequipe.fr' },
      { icon: '𝕏',  cls: 'icon-x',   label: "@lequipe",           url: 'https://x.com/lequipe' },
      { icon: '📸', cls: 'icon-ig',  label: 'lequipe',            url: 'https://www.instagram.com/lequipe' },
      { icon: '▶',  cls: 'icon-yt',  label: "L'Équipe",           url: 'https://www.youtube.com/@lequipe' },
    ]
  },
  bbcsport: {
    name: 'BBC Sport', sub: 'المملكة المتحدة • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'bbc.co.uk/sport',    url: 'https://www.bbc.co.uk/sport' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@BBCSport',          url: 'https://x.com/BBCSport' },
      { icon: '📸', cls: 'icon-ig',  label: 'bbcsport',           url: 'https://www.instagram.com/bbcsport' },
      { icon: '▶',  cls: 'icon-yt',  label: 'BBC Sport',          url: 'https://www.youtube.com/@BBCSport' },
    ]
  },
  as: {
    name: 'AS', sub: 'إسبانيا • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'as.com',             url: 'https://as.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@diarioas',          url: 'https://x.com/diarioas' },
      { icon: '📸', cls: 'icon-ig',  label: 'diarioas',           url: 'https://www.instagram.com/diarioas' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Diario AS',          url: 'https://www.youtube.com/@diarioas' },
    ]
  },
  gazzetta: {
    name: 'Gazzetta dello Sport', sub: 'إيطاليا • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'gazzetta.it',        url: 'https://www.gazzetta.it' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@Gazzetta_it',       url: 'https://x.com/Gazzetta_it' },
      { icon: '📸', cls: 'icon-ig',  label: 'gazzettadellosport', url: 'https://www.instagram.com/gazzettadellosport' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Gazzetta dello Sport',url: 'https://www.youtube.com/@GazzettaTV' },
    ]
  },
  goal: {
    name: 'Goal', sub: 'عالمية • كرة القدم',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'goal.com',           url: 'https://www.goal.com/ar' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@goal',              url: 'https://x.com/goal' },
      { icon: '📸', cls: 'icon-ig',  label: 'goal',               url: 'https://www.instagram.com/goal' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Goal',               url: 'https://www.youtube.com/@goal' },
    ]
  },
  athletic: {
    name: 'The Athletic', sub: 'الولايات المتحدة • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'theathletic.com',    url: 'https://theathletic.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@TheAthletic',       url: 'https://x.com/TheAthletic' },
      { icon: '📸', cls: 'icon-ig',  label: 'theathleticsports',  url: 'https://www.instagram.com/theathleticsports' },
    ]
  },
  bild: {
    name: 'Bild', sub: 'ألمانيا • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'bild.de/sport',      url: 'https://www.bild.de/sport' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@BILD_Sport',        url: 'https://x.com/BILD_Sport' },
      { icon: '📸', cls: 'icon-ig',  label: 'bild',               url: 'https://www.instagram.com/bild' },
      { icon: '▶',  cls: 'icon-yt',  label: 'BILD',               url: 'https://www.youtube.com/@BILD' },
    ]
  },
  sport: {
    name: 'Sport', sub: 'إسبانيا • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'sport.es',           url: 'https://www.sport.es' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@sport',             url: 'https://x.com/sport' },
      { icon: '📸', cls: 'icon-ig',  label: 'sport',              url: 'https://www.instagram.com/sport' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Sport',              url: 'https://www.youtube.com/@sport' },
    ]
  },
  mundodeportivo: {
    name: 'Mundo Deportivo', sub: 'إسبانيا • رياضة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'mundodeportivo.com', url: 'https://www.mundodeportivo.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@mundodeportivo',    url: 'https://x.com/mundodeportivo' },
      { icon: '📸', cls: 'icon-ig',  label: 'mundodeportivo',     url: 'https://www.instagram.com/mundodeportivo' },
    ]
  },
  transfermarkt: {
    name: 'Transfermarkt', sub: 'ألمانيا • إحصاءات وانتقالات',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'transfermarkt.com',  url: 'https://www.transfermarkt.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@transfermarkt',     url: 'https://x.com/transfermarkt' },
      { icon: '📸', cls: 'icon-ig',  label: 'transfermarkt',      url: 'https://www.instagram.com/transfermarkt' },
    ]
  },

  // ===== الصحف السعودية =====
  arriyadiyah: {
    name: 'الرياضية', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'arriyadiyah.com',    url: 'https://www.arriyadiyah.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@arriyadiyah',       url: 'https://x.com/arriyadiyah' },
      { icon: '📸', cls: 'icon-ig',  label: 'arriyadiyah',        url: 'https://www.instagram.com/arriyadiyah' },
    ]
  },
  okaz: {
    name: 'عكاظ', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'okaz.com.sa',        url: 'https://www.okaz.com.sa/sports' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@OkazOnline',        url: 'https://x.com/OkazOnline' },
      { icon: '📸', cls: 'icon-ig',  label: 'okazsa',             url: 'https://www.instagram.com/okazsa' },
    ]
  },
  sabq: {
    name: 'سبق', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'sabq.org',           url: 'https://sabq.org' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@sabqorg',           url: 'https://x.com/sabqorg' },
      { icon: '📸', cls: 'icon-ig',  label: 'sabqorg',            url: 'https://www.instagram.com/sabqorg' },
    ]
  },
  filgoal: {
    name: 'فيلقوال', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'filgoal.com',        url: 'https://www.filgoal.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@filgoal',           url: 'https://x.com/filgoal' },
      { icon: '📸', cls: 'icon-ig',  label: 'filgoal',            url: 'https://www.instagram.com/filgoal' },
    ]
  },
  kooora: {
    name: 'كووورة', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'kooora.com',         url: 'https://www.kooora.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@kooora',            url: 'https://x.com/kooora' },
      { icon: '📸', cls: 'icon-ig',  label: 'kooora',             url: 'https://www.instagram.com/kooora' },
    ]
  },
  sada: {
    name: 'صدى الملاعب', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'sada-almalaaeb.com', url: 'https://www.sada-almalaaeb.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@SadaAlmalaaeb',     url: 'https://x.com/SadaAlmalaaeb' },
      { icon: '📸', cls: 'icon-ig',  label: 'sadamalaaeb',        url: 'https://www.instagram.com/sadamalaaeb' },
    ]
  },
  alwatan: {
    name: 'الوطن رياضة', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'alwatan.com.sa',     url: 'https://www.alwatan.com.sa/sport' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@alwatanofficial',   url: 'https://x.com/alwatanofficial' },
      { icon: '📸', cls: 'icon-ig',  label: 'alwatan_sa',         url: 'https://www.instagram.com/alwatan_sa' },
    ]
  },
  saudi360: {
    name: 'سعودي 360', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'saudi360.com',       url: 'https://www.saudi360.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@Saudi360com',       url: 'https://x.com/Saudi360com' },
      { icon: '📸', cls: 'icon-ig',  label: 'saudi360com',        url: 'https://www.instagram.com/saudi360com' },
    ]
  },
  almowaten: {
    name: 'المواطن', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'almowaten.com',      url: 'https://www.almowaten.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@almowaten',         url: 'https://x.com/almowaten' },
      { icon: '📸', cls: 'icon-ig',  label: 'almowaten',          url: 'https://www.instagram.com/almowaten' },
    ]
  },
  riyadhi: {
    name: 'رياضي', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'riyadi.sa',          url: 'https://www.riyadi.sa' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@riyadi_sa',         url: 'https://x.com/riyadi_sa' },
      { icon: '📸', cls: 'icon-ig',  label: 'riyadi_sa',          url: 'https://www.instagram.com/riyadi_sa' },
    ]
  },
  nujoomfc: {
    name: 'نجوم مستر', sub: 'المملكة العربية السعودية',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'nujoomfc.com',       url: 'https://www.nujoomfc.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@nujoomfc',          url: 'https://x.com/nujoomfc' },
      { icon: '📸', cls: 'icon-ig',  label: 'nujoomfc',           url: 'https://www.instagram.com/nujoomfc' },
    ]
  },

  // ===== الأندية العالمية =====
  barca: {
    name: 'برشلونة', sub: '🇪🇸 FC Barcelona • إسبانيا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'fcbarcelona.com',     url: 'https://www.fcbarcelona.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@FCBarcelona_ar',     url: 'https://x.com/FCBarcelona_ar' },
      { icon: '📸', cls: 'icon-ig',  label: 'fcbarcelona',         url: 'https://www.instagram.com/fcbarcelona' },
      { icon: '▶',  cls: 'icon-yt',  label: 'FC Barcelona',        url: 'https://www.youtube.com/@fcbarcelona' },
    ]
  },
  realmadrid: {
    name: 'ريال مدريد', sub: '🇪🇸 Real Madrid CF • إسبانيا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'realmadrid.com',      url: 'https://www.realmadrid.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@realmadrid',         url: 'https://x.com/realmadrid' },
      { icon: '📸', cls: 'icon-ig',  label: 'realmadrid',          url: 'https://www.instagram.com/realmadrid' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Real Madrid CF',      url: 'https://www.youtube.com/@realmadrid' },
    ]
  },
  intermiami: {
    name: 'إنتر ميامي', sub: '🇺🇸 Inter Miami CF • الولايات المتحدة',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'intermiamicf.com',    url: 'https://www.intermiamicf.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@InterMiamiCF',       url: 'https://x.com/InterMiamiCF' },
      { icon: '📸', cls: 'icon-ig',  label: 'intermiamicf',        url: 'https://www.instagram.com/intermiamicf' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Inter Miami CF',      url: 'https://www.youtube.com/@InterMiamiCF' },
    ]
  },
  mancity: {
    name: 'مانشستر سيتي', sub: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester City • إنجلترا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'mancity.com',         url: 'https://www.mancity.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@ManCity',            url: 'https://x.com/ManCity' },
      { icon: '📸', cls: 'icon-ig',  label: 'mancity',             url: 'https://www.instagram.com/mancity' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Manchester City',     url: 'https://www.youtube.com/@mancity' },
    ]
  },
  liverpool: {
    name: 'ليفربول', sub: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Liverpool FC • إنجلترا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'liverpoolfc.com',     url: 'https://www.liverpoolfc.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@LFC',                url: 'https://x.com/LFC' },
      { icon: '📸', cls: 'icon-ig',  label: 'liverpoolfc',         url: 'https://www.instagram.com/liverpoolfc' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Liverpool FC',        url: 'https://www.youtube.com/@LiverpoolFC' },
    ]
  },
  manutd: {
    name: 'مانشستر يونايتد', sub: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United • إنجلترا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'manutd.com',          url: 'https://www.manutd.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@ManUtd',             url: 'https://x.com/ManUtd' },
      { icon: '📸', cls: 'icon-ig',  label: 'manchesterunited',    url: 'https://www.instagram.com/manchesterunited' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Manchester United',   url: 'https://www.youtube.com/@ManUtd' },
    ]
  },
  bayern: {
    name: 'بايرن ميونخ', sub: '🇩🇪 FC Bayern München • ألمانيا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'fcbayern.com',        url: 'https://fcbayern.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@FCBayern',           url: 'https://x.com/FCBayern' },
      { icon: '📸', cls: 'icon-ig',  label: 'fcbayern',            url: 'https://www.instagram.com/fcbayern' },
      { icon: '▶',  cls: 'icon-yt',  label: 'FC Bayern München',   url: 'https://www.youtube.com/@FCBayern' },
    ]
  },
  psg: {
    name: 'باريس سان جيرمان', sub: '🇫🇷 Paris Saint-Germain • فرنسا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'psg.fr',              url: 'https://www.psg.fr' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@PSG_inside',         url: 'https://x.com/PSG_inside' },
      { icon: '📸', cls: 'icon-ig',  label: 'psg',                 url: 'https://www.instagram.com/psg' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Paris Saint-Germain', url: 'https://www.youtube.com/@PSG' },
    ]
  },
  juventus: {
    name: 'يوفنتوس', sub: '🇮🇹 Juventus FC • إيطاليا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'juventus.com',        url: 'https://www.juventus.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@juventusfc',         url: 'https://x.com/juventusfc' },
      { icon: '📸', cls: 'icon-ig',  label: 'juventus',            url: 'https://www.instagram.com/juventus' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Juventus',            url: 'https://www.youtube.com/@juventus' },
    ]
  },
  inter: {
    name: 'إنتر ميلان', sub: '🇮🇹 FC Internazionale • إيطاليا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'inter.it',            url: 'https://www.inter.it' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@Inter',              url: 'https://x.com/Inter' },
      { icon: '📸', cls: 'icon-ig',  label: 'inter',               url: 'https://www.instagram.com/inter' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Inter',               url: 'https://www.youtube.com/@inter' },
    ]
  },
  arsenal: {
    name: 'آرسنال', sub: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Arsenal FC • إنجلترا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'arsenal.com',         url: 'https://www.arsenal.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@Arsenal',            url: 'https://x.com/Arsenal' },
      { icon: '📸', cls: 'icon-ig',  label: 'arsenal',             url: 'https://www.instagram.com/arsenal' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Arsenal',             url: 'https://www.youtube.com/@Arsenal' },
    ]
  },
  chelsea: {
    name: 'تشيلسي', sub: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea FC • إنجلترا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'chelseafc.com',       url: 'https://www.chelseafc.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@ChelseaFC',          url: 'https://x.com/ChelseaFC' },
      { icon: '📸', cls: 'icon-ig',  label: 'chelseafc',           url: 'https://www.instagram.com/chelseafc' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Chelsea FC',          url: 'https://www.youtube.com/@ChelseaFC' },
    ]
  },
  atletico: {
    name: 'أتلتيكو مدريد', sub: '🇪🇸 Atlético de Madrid • إسبانيا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'atleticodemadrid.com',url: 'https://www.atleticodemadrid.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@Atleti',             url: 'https://x.com/Atleti' },
      { icon: '📸', cls: 'icon-ig',  label: 'atleticodemadrid',    url: 'https://www.instagram.com/atleticodemadrid' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Atlético de Madrid',  url: 'https://www.youtube.com/@atleticodemadrid' },
    ]
  },
  dortmund: {
    name: 'دورتموند', sub: '🇩🇪 Borussia Dortmund • ألمانيا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'bvb.de',              url: 'https://www.bvb.de' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@BVB',                url: 'https://x.com/BVB' },
      { icon: '📸', cls: 'icon-ig',  label: 'bvb09',               url: 'https://www.instagram.com/bvb09' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Borussia Dortmund',   url: 'https://www.youtube.com/@bvb' },
    ]
  },
  ajax: {
    name: 'أياكس', sub: '🇳🇱 AFC Ajax • هولندا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'ajax.nl',             url: 'https://www.ajax.nl' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@AFCAjax',            url: 'https://x.com/AFCAjax' },
      { icon: '📸', cls: 'icon-ig',  label: 'afcajax',             url: 'https://www.instagram.com/afcajax' },
      { icon: '▶',  cls: 'icon-yt',  label: 'AFC Ajax',            url: 'https://www.youtube.com/@AFCAjax' },
    ]
  },
  porto: {
    name: 'بورتو', sub: '🇵🇹 FC Porto • البرتغال',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'fcporto.pt',          url: 'https://www.fcporto.pt' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@FCPorto',            url: 'https://x.com/FCPorto' },
      { icon: '📸', cls: 'icon-ig',  label: 'fcporto',             url: 'https://www.instagram.com/fcporto' },
      { icon: '▶',  cls: 'icon-yt',  label: 'FC Porto',            url: 'https://www.youtube.com/@FCPorto' },
    ]
  },
  benfica: {
    name: 'بنفيكا', sub: '🇵🇹 SL Benfica • البرتغال',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'slbenfica.pt',        url: 'https://www.slbenfica.pt' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@SLBenfica',          url: 'https://x.com/SLBenfica' },
      { icon: '📸', cls: 'icon-ig',  label: 'slbenfica',           url: 'https://www.instagram.com/slbenfica' },
      { icon: '▶',  cls: 'icon-yt',  label: 'SL Benfica',          url: 'https://www.youtube.com/@SLBenfica' },
    ]
  },
  napoli: {
    name: 'نابولي', sub: '🇮🇹 SSC Napoli • إيطاليا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'sscnapoli.it',        url: 'https://www.sscnapoli.it' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@sscnapoli',          url: 'https://x.com/sscnapoli' },
      { icon: '📸', cls: 'icon-ig',  label: 'officialsscnapoli',   url: 'https://www.instagram.com/officialsscnapoli' },
      { icon: '▶',  cls: 'icon-yt',  label: 'SSC Napoli',          url: 'https://www.youtube.com/@sscnapoli' },
    ]
  },
  roma: {
    name: 'روما', sub: '🇮🇹 AS Roma • إيطاليا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'asroma.com',          url: 'https://www.asroma.com' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@ASRomaAR',           url: 'https://x.com/ASRomaAR' },
      { icon: '📸', cls: 'icon-ig',  label: 'officialasroma',      url: 'https://www.instagram.com/officialasroma' },
      { icon: '▶',  cls: 'icon-yt',  label: 'AS Roma',             url: 'https://www.youtube.com/@ASRoma' },
    ]
  },
  celtic: {
    name: 'سيلتيك', sub: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Celtic FC • اسكتلندا',
    links: [
      { icon: '🌐', cls: 'icon-web', label: 'celticfc.net',        url: 'https://www.celticfc.net' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@CelticFC',           url: 'https://x.com/CelticFC' },
      { icon: '📸', cls: 'icon-ig',  label: 'celticfc',            url: 'https://www.instagram.com/celticfc' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Celtic FC',           url: 'https://www.youtube.com/@CelticFC' },
    ]
  },

  // ===== نجوم العالم =====
  ronaldo: {
    name: 'كريستيانو رونالدو', sub: '🇵🇹 CR7 • البرتغال',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'cristiano',           url: 'https://www.instagram.com/cristiano' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@Cristiano',          url: 'https://x.com/Cristiano' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Cristiano Ronaldo',   url: 'https://www.youtube.com/@cristiano' },
      { icon: '🎵', cls: 'icon-tk',  label: 'cristiano',           url: 'https://www.tiktok.com/@cristiano' },
      { icon: '👍', cls: 'icon-fb',  label: 'Cristiano',           url: 'https://www.facebook.com/Cristiano' },
    ]
  },
  messi: {
    name: 'ليونيل ميسي', sub: '🇦🇷 La Pulga • الأرجنتين',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'leomessi',            url: 'https://www.instagram.com/leomessi' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@TeamMessi',          url: 'https://x.com/TeamMessi' },
      { icon: '🎵', cls: 'icon-tk',  label: 'leomessi',            url: 'https://www.tiktok.com/@leomessi' },
      { icon: '👍', cls: 'icon-fb',  label: 'Leo Messi',           url: 'https://www.facebook.com/LeoMessi' },
    ]
  },
  mbappe: {
    name: 'كيليان مبابي', sub: '🇫🇷 Kylian Mbappé • فرنسا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'k.mbappe',            url: 'https://www.instagram.com/k.mbappe' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@KMbappe',            url: 'https://x.com/KMbappe' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Kylian Mbappé',       url: 'https://www.youtube.com/@KylianMbappe' },
    ]
  },
  neymar: {
    name: 'نيمار جونيور', sub: '🇧🇷 Neymar Jr • البرازيل',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'neymarjr',            url: 'https://www.instagram.com/neymarjr' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@neymarjr',           url: 'https://x.com/neymarjr' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Neymar Jr',           url: 'https://www.youtube.com/@neymarjr' },
      { icon: '👍', cls: 'icon-fb',  label: 'Neymar Jr',           url: 'https://www.facebook.com/neymarjr' },
    ]
  },
  haaland: {
    name: 'إيرلينغ هالاند', sub: '🇳🇴 Erling Haaland • النرويج',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'erling.haaland',      url: 'https://www.instagram.com/erling.haaland' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@ErlingHaaland',      url: 'https://x.com/ErlingHaaland' },
    ]
  },
  benzema: {
    name: 'كريم بنزيمة', sub: '🇫🇷 KB9 • فرنسا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'karimbenzema',        url: 'https://www.instagram.com/karimbenzema' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@Benzema',            url: 'https://x.com/Benzema' },
      { icon: '👍', cls: 'icon-fb',  label: 'Karim Benzema',       url: 'https://www.facebook.com/KarimBenzemaOfficiel' },
    ]
  },
  vinicius: {
    name: 'فينيسيوس جونيور', sub: '🇧🇷 Vini Jr • البرازيل',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'vinijr',              url: 'https://www.instagram.com/vinijr' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@vinijr',             url: 'https://x.com/vinijr' },
    ]
  },
  salah: {
    name: 'محمد صلاح', sub: '🇪🇬 The Egyptian King • مصر',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'mosalah',             url: 'https://www.instagram.com/mosalah' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@MoSalah',            url: 'https://x.com/MoSalah' },
      { icon: '👍', cls: 'icon-fb',  label: 'Mohamed Salah',       url: 'https://www.facebook.com/MohamedSalah' },
    ]
  },
  dybala: {
    name: 'باولو ديبالا', sub: '🇦🇷 La Joya • الأرجنتين',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'paulodybala',         url: 'https://www.instagram.com/paulodybala' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@PauDybala_JR',       url: 'https://x.com/PauDybala_JR' },
    ]
  },
  modric: {
    name: 'لوكا مودريتش', sub: '🇭🇷 El Mago • كرواتيا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'lukamodric10',        url: 'https://www.instagram.com/lukamodric10' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@lukamodric10',       url: 'https://x.com/lukamodric10' },
    ]
  },
  dejong: {
    name: 'فرينكي دي يونج', sub: '🇳🇱 Frenkie de Jong • هولندا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'frenkiedejong',       url: 'https://www.instagram.com/frenkiedejong' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@FDJ',                url: 'https://x.com/FDJ' },
    ]
  },
  bellingham: {
    name: 'جود بيلينغهام', sub: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Jude Bellingham • إنجلترا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'judebellingham',      url: 'https://www.instagram.com/judebellingham' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@BellinghamJude',     url: 'https://x.com/BellinghamJude' },
    ]
  },
  pedri: {
    name: 'بيدري', sub: '🇪🇸 Pedri González • إسبانيا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'pedri',               url: 'https://www.instagram.com/pedri' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@Pedri',              url: 'https://x.com/Pedri' },
    ]
  },
  lewy: {
    name: 'روبرت ليفاندوفسكي', sub: '🇵🇱 Lewandowski • بولندا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'robertlewandowski',   url: 'https://www.instagram.com/robertlewandowski' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@lewy_official',      url: 'https://x.com/lewy_official' },
      { icon: '▶',  cls: 'icon-yt',  label: 'Robert Lewandowski',  url: 'https://www.youtube.com/@RobertLewandowski' },
    ]
  },
  debruyne: {
    name: 'كيفن دي بروين', sub: '🇧🇪 Kevin De Bruyne • بلجيكا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'kevindebruyne',       url: 'https://www.instagram.com/kevindebruyne' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@kevindebruyne',      url: 'https://x.com/kevindebruyne' },
    ]
  },
  sane: {
    name: 'لياندرو ساني', sub: '🇩🇪 Leroy Sané • ألمانيا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'leroysane19',         url: 'https://www.instagram.com/leroysane19' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@LeroySane19',        url: 'https://x.com/LeroySane19' },
    ]
  },
  kane: {
    name: 'هاري كين', sub: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Harry Kane • إنجلترا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'harrykane',           url: 'https://www.instagram.com/harrykane' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@HKane',              url: 'https://x.com/HKane' },
    ]
  },
  rashford: {
    name: 'ماركوس راشفورد', sub: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Marcus Rashford • إنجلترا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'marcusrashford',      url: 'https://www.instagram.com/marcusrashford' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@MarcusRashford',     url: 'https://x.com/MarcusRashford' },
    ]
  },
  osimhen: {
    name: 'فيكتور أوسيمهن', sub: '🇳🇬 Victor Osimhen • نيجيريا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'victorosimhen9',      url: 'https://www.instagram.com/victorosimhen9' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@victorosimhen9',     url: 'https://x.com/victorosimhen9' },
    ]
  },
  yamal: {
    name: 'لامين يامال', sub: '🇪🇸 Lamine Yamal • إسبانيا',
    links: [
      { icon: '📸', cls: 'icon-ig',  label: 'lamineyamal',         url: 'https://www.instagram.com/lamineyamal' },
      { icon: '𝕏',  cls: 'icon-x',   label: '@LamineYamal',        url: 'https://x.com/LamineYamal' },
    ]
  },
};

// ===== SVG أيقونات وسائل التواصل =====
const ICONS = {
  'icon-web': `<svg viewBox="0 0 24 24" fill="none" stroke="#f5c518" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  'icon-x':   `<svg viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  'icon-ig':  `<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  'icon-yt':  `<svg viewBox="0 0 24 24" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  'icon-fb':  `<svg viewBox="0 0 24 24" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  'icon-tk':  `<svg viewBox="0 0 24 24" fill="#fff"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>`,
  'icon-wa':  `<svg viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
};
