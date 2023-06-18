// export function stringToArrayBuffer(str: string) {
//   const b = new Blob([str]);
//   const f = new FileReader();
//   let u8: Uint8Array;
//   f.onload = function (e) {
//     u8 = new Uint8Array(e.target!.result);
//   };
//   f.readAsArrayBuffer(b);
//   return u8;
// }

export function stringToArrayBuffer2(text: string) {
  const code = encodeURIComponent(text);
  const byte = [];
  for (let i = 0; i < code.length; i++) {
    const c = code.charAt(i);
    if (c === '%') {
      const hex = code.charAt(i + 1) + code.charAt(i + 2);
      const hexval = parseInt(hex, 16);
      byte.push(hexval);
      i += 2;
    } else {
      byte.push(c.charCodeAt(0));
    }
  }
  return byte;
}

export function stringToArrayBuffer(text: string) {
  const byte = stringToArrayBuffer2(text);
  const buffer = new ArrayBuffer(byte.length);
  const dv = new DataView(buffer);
  for (let i = 0; i < byte.length; i++) {
    dv.setUint8(i, byte[i]);
  }
  return buffer;
}
