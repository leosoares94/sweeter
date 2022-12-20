export abstract class StringUtils {
  public static isNullOrEmpty (value: string): boolean {
    return value == null || value.length === 0
  }

  public static onlyNumber (event: any): boolean {
    return event.charCode >= 48 && event.charCode <= 57
  }

  public static fixedLength (event: any, length: number): void {
    event.target.value = Math.max(0, parseInt(event.target.value))
      .toString()
      .slice(0, length)
  }
}

export function toTitleCase (str: string) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    }
  )
}
