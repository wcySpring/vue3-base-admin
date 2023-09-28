/**
 * @name registryIconifyIcons
 * @description 注册 从 @iconify-icons 自动导入的svg
 */

function toCamelCase(str: string) {
  return str.replace(/-([a-z0-9])/g, function (_, letter) {
    return letter.toUpperCase()
  })
}

export function registryIconifyIcons(customCollections: string, icons: string[]) {
  const fromPrefix = `@iconify-icons/${customCollections}`

  return icons.reduce(
    (acc, icon) => {
      const fromKey = `${fromPrefix}/${icon}`
      acc[fromKey] = [['default', toCamelCase(icon)]]
      return acc
    },
    {} as { [key: string]: [[string, string]] }
  )
}
