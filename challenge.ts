// Desencripta la clave para conseguir la pista. Tenes que usar la funcion claveDesencripto.

const matriz = [
  [112, 108, 97, 110, 116, 97],
  [0, 1, 2, 3, 4, 2],
];

const claveDesencripto = (arr: number[], clave: number[]): string => {
  let palabraSecreta = "";
  for (let i = 0; i < clave.length; i++) {
    palabraSecreta += String.fromCharCode(arr[clave[i]]);
  }
  return palabraSecreta;
};

// Si estas desde el celu podes ir a este link a usar la funcion: https://www.typescriptlang.org/play
// https://www.typescriptlang.org/play
// https://www.typescriptlang.org/play
// https://www.typescriptlang.org/play
