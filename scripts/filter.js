import { readFileSync, writeFileSync } from 'fs'
import _ from 'lodash'

let list = JSON.parse(readFileSync(process.cwd() + '/src/list.json').toString())

console.log(list.length)

const unique = _.uniqBy(list, (a) => {
  return a.symbol
})

writeFileSync('./list2.json', JSON.stringify(unique, null, 2))
