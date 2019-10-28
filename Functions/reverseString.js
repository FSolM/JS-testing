export default (string) => {
  let reversed = '';
  for (let i = string.length-1; i >= 0; i-= 1) {
    reversed += string.charAt(i);
  }
  return reversed
}