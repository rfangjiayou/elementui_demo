// POST 时 urlParam 的处理
// 如果 value 是数组 则 key要添加 '[]'
export const handlePostReducer = (last, [key, value]) => {
  const isArray = Array.isArray(value)
  const usedKey = isArray ? `${key.replace(/\[]$/, '')}[]` : key
  if (isArray) {
    last = value.length
      ? value.reduce((l, item) => {
        if (Object.prototype.toString.call(item) === '[object Object]') {
          l.append(usedKey, JSON.stringify(item))
        } else {
          l.append(usedKey, item)
        }
        return l
      }, last)
      : last.append(usedKey, '') || last
  } else {
    last.append(usedKey, value)
  }
  return last
}
