export function deferFunction(onChangeFunction: () => void, timeout: number) {
  setTimeout(() => onChangeFunction(), timeout);
}
