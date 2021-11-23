/* À partir d'un nombre entier positif N, donner la longueur L de la séquence la plus
longue de 0 qui compose sa forme binaire. Par exemple pour 296, sa forme binaire
est 100101000, et le résultat attendu est 3. */

const N1 = 123456;
const N2 = 65535;
const N3 = 9;
const N4 = 1564;
const N5 = 0;
const N6 = 1;
const N7 = 2;

// Très fortement inspirée de la solution simple et élégante https://stackoverflow.com/a/40390975 pour ne pas utiliser Number.toString(base)
const numToBit = (N) => {
  let number = N
  let result = []
  while(number >= 1){
    // Si le chiffre est pair, 0. Sinon 1
    const restant = Math.floor(number % 2);
    // Ajouter le restant au début du tableau
    result.unshift(restant);
    // Continuer le calcul avec le quotient
    number = number / 2;
  }
  return result
}

const longuest0Suite = (N) => {
  const binary = numToBit(N);
  let finalCount = 0;
  let tempCount = 0; 
  for (let i = 0; i < binary.length; i++) {
    tempCount = binary[i] ? 0 : tempCount + 1;
    if (tempCount > finalCount) finalCount = tempCount;
  }
  console.log('Binary: ', binary.toString().replace(/,/g, ''));
  console.log('L:', finalCount);
}

longuest0Suite(N1);
longuest0Suite(N2);
longuest0Suite(N3);
longuest0Suite(N4);
longuest0Suite(N5);
longuest0Suite(N6);
longuest0Suite(N7);