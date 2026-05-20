const fs = require('fs');

// 1. Читаем большой файл
const rawData = fs.readFileSync('./src/data/vologodskaia-oblast.json', 'utf8');
const geojson = JSON.parse(rawData);

// 2. Оставляем столько объектов сколько хотим, чтобы не нагружать систему (features)
geojson.features = geojson.features.slice(0, 500);

// 3. Записываем результат в новый маленький файл data.json
fs.writeFileSync('./src/data/data.json', JSON.stringify(geojson, null, 2));

console.log('Маленький файл создан в src/data/data.json');