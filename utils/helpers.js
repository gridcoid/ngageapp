export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) {
    return arr
  }

  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}

export const generateItems = (count, creator) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }
  return result
}

export const stripFields = (obj, disallowed = []) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => stripFields(item, disallowed))
  } else if (obj && typeof obj === 'object') {
    const cleaned = {}
    for (const key in obj) {
      if (!disallowed.includes(key)) {
        cleaned[key] = stripFields(obj[key], disallowed)
      }
    }
    return cleaned
  }
  return obj
}
