/*

https://raw.githubusercontent.com/congcong0806/surge-list/master/Script/ipcheck.js

*/
let url = "http://ip-api.com/json/?lang=zh-CN"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    let org =jsonData.org
  body = {
    title: "节点信息",
    content: `IP信息: ${ip}\n运营商家: ${isp}\n数据中心: ${org}\n地理位置: ${emoji}${country} - ${city}`,
    icon: "network",
    'icon-color': "#FFD700"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}