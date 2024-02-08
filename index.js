var storyStep = -1
const aStory = [
  {
    img: 'history0.png',
    text: 'В горах бывает внезапно натыкаешся на небольшие поселения людей, проживающих всю жизнь так и не узнав шум и амбиции городов, грязь и обман, которые свойственны крупным скоплениям людей.',
  },
  {
    img: 'history1.png',
    text: 'Маленький мальчик жил в ветхом доме тихого поселения. Линг не помнил своего отца, его семьей были сестра и мать, которым он отдавал свою любовь.',
  },
  {
    img: 'history2.png',
    text: 'Еды было не много, но иногда удавалось набить живот.',
  },
  {
    img: 'history3.png',
    text: 'Мать Линга ткала ткань из добываемых в лесу материалов, что являлось основным источником дохода в семье.',
  },{
    img: 'history4.png',
    text: 'Добыча материалов для ткани в лесу была не простой... Заросшие тропы замедляли перемещения по лесу, густая ростительность скрывала сокровища от Линга.',
  },
]

// рисует определенный шаг
function drawStory(sindx) {
  var mainBody = document.getElementById('mainbody')
  // clicks only to last img
  if (sindx <= storyStep) {
    return
  }
  storyStep = sindx
  // insert step
  var elStory = aStory[sindx]
  var storydiv = document.createElement('div')
  storydiv.innerHTML = `<br><table><tr><td style="width:350px";><img src="../assets/${elStory.img}" alt="${elStory.img}" style="width:330px;"></td><td style="width:350px";><h3>${elStory.text}</h3></td></tr></table>`
  storydiv.onclick = () => {
    drawStory(sindx + 1)
  }
  mainBody.insertBefore(storydiv, mainBody.firstChild)
}
// рисуем первый шаг
drawStory(0)
