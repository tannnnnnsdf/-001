const SHEET_URL =
"https://docs.google.com/spreadsheets/d/1x_Gb2U5vgI2aI6Bl78KrLZKOi23eX9fcJiZIPOBnTwA/gviz/tq?tqx=out:json";

async function loadSermons(){
  const r=await fetch(SHEET_URL);
  const t=await r.text();
  const j=JSON.parse(t.substring(47).slice(0,-2));
  return j.table.rows.map(r=>({
    date:r.c[0]?.v||"",
    title:r.c[1]?.v||"",
    preacher:r.c[2]?.v||"",
    youtube:r.c[3]?.v||"",
    doc:r.c[5]?.v||""
  })).reverse();
}
