// Löscht alle Ranglisten-Einträge ohne Avatar. Voraussetzung: die Firestore-Regeln aus firestore.rules sind veröffentlicht
// (sie erlauben das Löschen nur für Einträge ohne Avatar). Aufruf: node tools/cleanup-no-avatar.js [--dry]
const PROJECT='mallorca-ralley', KEY=process.env.FIREBASE_KEY||'AIzaSyDb3q49oXxxdjVmSW2xGnsuUQYkZbJj-t4', SEASON='s2';
const base=`https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;
const dry=process.argv.includes('--dry');
(async()=>{ let total=0;
  for(const st of ['arta','luzern','space']){ const col='scores_'+st+'_'+SEASON;
    const r=await fetch(`${base}:runQuery?key=${KEY}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({structuredQuery:{from:[{collectionId:col}],limit:1000}})});
    const rows=(await r.json()).filter(x=>x.document).map(x=>x.document);
    const old=rows.filter(d=>!(d.fields.avatar&&d.fields.avatar.stringValue));
    console.log(col+': '+rows.length+' Einträge, '+old.length+' ohne Avatar');
    for(const d of old){ const f=d.fields; const label=(f.name&&f.name.stringValue)+' '+(f.score&&f.score.integerValue);
      if(dry){ console.log('  würde löschen: '+label); continue; }
      const del=await fetch(`${base}/${col}/${d.name.split('/').pop()}?key=${KEY}`,{method:'DELETE'});
      console.log('  '+(del.ok?'gelöscht':'FEHLER HTTP '+del.status)+': '+label); if(del.ok) total++; } }
  console.log(dry?'Probelauf beendet':'Gelöscht: '+total);
})();
