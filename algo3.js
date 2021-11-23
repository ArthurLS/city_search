/* Une poule est sur un échiquier E de hauteur H et de largeur L. Elle est placée sur la
case en haut à gauche d'indice (0,0). Sur chaque case d'indice (i,j) il y a un certain
nombre de graines Eij. Elle peut faire seulement deux mouvements, aller sur la case
en dessous, ou sur celle à droite. Écrire un algorithme qui permet de savoir quel est
le nombre maximal M de graines que la poule peut manger en rejoignant la case en
base à droite d'indice (H-1, L-1). */

const E1 = [[1, 2, 3],
[4, 5, 6],
[7, 0, 9]];
const H1 = 3;
const L1 = 3;

const picore = (e, height, width) => {
  // Nombre de déplacement max sur l'échiquier
  const maxMoves = height - 1 + width - 1;

  for (let h = 0; h < height; h++) {
    for (let l = 0; l < width; l++) {
      const square = e[h][l];
      console.log('Square: ', square);
    }
  }
}

picore(E1, H1, L1);

