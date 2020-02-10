var SERVER = 'https://www.ximalaya.com'

var classifyNames = [
  '蛋解创业',
  '蛋解趋势',
  '项目精选',
  '答老板问',
  '答蛋友问',
  '每月一蛋'
]

var res = []
classifyNames.forEach(classifyName => {
  var articles = [...$$('.sound-list a')]
    .filter(item => !item.classList.contains('page-link'))
    .filter(item => item.textContent.includes(`【${classifyName}】`))
    .map(item => `* [${item.textContent.replace(`【${classifyName}】`, '')}](${SERVER}${item.getAttribute('href')})`)
    .join('\n')
  res.push(`
## ${classifyName}
${articles}`)
})

console.log(res.join('\n'))


// 更早节目的提取
var SERVER = 'https://www.ximalaya.com'

var res = []
var articles = [...$$('.sound-list a')]
  .filter(item => !item.classList.contains('page-link'))
  .filter(item => /第(\d+)期/.test(item.textContent))
  .map(item => `* [${item.textContent}](${SERVER}${item.getAttribute('href')})`)
  .join('\n')
res.push(`
${articles}`)

console.log(res.join('\n'))