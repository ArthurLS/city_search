/* Soit une liste L de nombre décroissants représentant les valeurs des billets et pièces
disponibles dans un pays (ex: 500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, ....). Ecrire un
algorithme qui à partir d'un montant donné M, donne le nombre le plus petit P de
billets et de pièces dont la somme vaut ce montant, ou -1 si ce n'est pas possible
d'atteindre ce montant avec ces billets et pièces. */
console.log("Rends l'argent !");

const L1 = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2];
const L2 = [500, 200, 100, 50, 20, 10, 5]
const L3 = [500, 200, 100, 50, 20, 10, 5, 0.01]

const M1 = 300;
const M2 = 626.5;

// https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript?page=2&tab=votes#tab-top
function round(value, precision) {
  const power = Math.pow(10, precision)
  return Math.round((value*power)+(Number.EPSILON*power)) / power
}

const rendsLaMonnaieSTP = (listMonnaieDispo, montant) => {
  console.log('L: ', listMonnaieDispo.toString());
  console.log('M: ', montant);
  let restant = montant;
  const res = [];
  while (restant > 0 && restant >= listMonnaieDispo[listMonnaieDispo.length - 1]) {
    for (let m of listMonnaieDispo) {
      if (m <= restant) {
        res.push(m);
        // Used round to prevent "1.38 - 0.01 = 1.3699999999999999"
        restant = round(restant - m, 2);
        break;
      }
    };
  }
  if (restant > 0) {
    console.log('P: ', -1);
    console.log('Monnaie non rendue: ', restant);
    console.log('Liste des billets: ', res);
  } else {
    console.log('P: ' + res.length);
    console.log('Liste des billets: ', res);
  }
}

// rendsLaMonnaieSTP(L1, M1);
// console.log('');
rendsLaMonnaieSTP(L1, M2);
// console.log('');
// rendsLaMonnaieSTP(L2, M1);
// console.log('');
// rendsLaMonnaieSTP(L2, M2);
// console.log('');
// rendsLaMonnaieSTP(L3, M2);