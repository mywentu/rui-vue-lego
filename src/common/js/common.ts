/** 千分符格式化金额, 例如1000 -> 1,000 */
export function formatMoney (value: number|string): string {
  return value && value.toString().replace(/(^|\s)\d+/g, m=> m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/** 筛选无用字段 */
export function pick (obj: object, uselessKeys: string[]): object {
  return Object.keys(obj).reduce((acc, key) => {
    return uselessKeys.indexOf(key) > -1 ? acc : {...acc, [key]: obj[key]}
  }, {})
}

/** Base64转Blob */
export function b64toBlob (b64Data: string, contentType: string, sliceSize?: number): Blob {
  contentType = contentType || ''
  sliceSize = sliceSize || 512

  let byteArrays = []
  const byteCharacters = atob(b64Data)

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)
    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }
    byteArrays.push(new Uint8Array(byteNumbers))
  }
  const blob = new Blob(byteArrays, {type: contentType})
  return blob
}


/** 判断两个时间是否有交集 */
export function isDateIntersection(start1, end1, start2, end2) {
  const startdate1 = new Date(start1.replace("-", "/").replace("-", "/"));
  const enddate1 = new Date(end1.replace("-", "/").replace("-", "/"));

  const startdate2 = new Date(start2.replace("-", "/").replace("-", "/"));
  const enddate2 = new Date(end2.replace("-", "/").replace("-", "/"));

  if (startdate1 > startdate2 && startdate1 < enddate2) {
    return true;
  } else if(startdate1 < startdate2 && enddate1 > enddate2) {
    return true
  } else if (enddate1 > startdate2 && enddate1 < enddate2) {
    return true;
  }
  return false;
}