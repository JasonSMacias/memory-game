
  const iconArray = ['fas fa-pepper-hot', 'fas fa-candy-cane', 'fab fa-node', 'fas fa-ghost', 'fas fa-swimmer', 'fas fa-hat-wizard', 'fas fa-snowman', 'fas fa-chess', 'far fa-kiss-wink-heart', 'fas fa-robot', 'fas fa-book', 'fas fa-cloud-showers-heavy', 'fab fa-html5', 'far fa-paper-plane', 'fas fa-skull-crossbones', 'fas fa-toilet-paper', 'fas fa-cat', 'fas fa-frog', 'fas fa-helicopter', 'fas fa-mountain', 'fas fa-peace', 'fas fa-seedling', 'far fa-surprise', 'fas fa-toilet', 'fas fa-teeth', 'fas fa-shoe-prints', 'fas fa-paperclip', 'fas fa-horse', 'fas fa-horse', 'fas fa-dharmachakra', 'fas fa-dog', 'fas fa-football-ball', 'fas fa-bomb', 'fas fa-baby-carriage', 'fas fa-terminal', 'fas fa-database', 'fab fa-js-square', 'fas fa-air-freshener', 'fab fa-empire', 'fas fa-bed', 'fab fa-react', 'fab fa-rebel', 'fas fa-microscope', 'fas fa-guitar', 'fas fa-dragon', 'fas fa-dumbbell', 'fab fa-github', 'fas fa-rocket', 'fas fa-music', 'fas fa-couch', 'fas fa-crow', 'fas fa-tooth', 'fas fa-truck-monster', 'fas fa-tshirt', 'fas fa-umbrella-beach', 'fas fa-user-astronaut', 'fas fa-user-ninja', 'fas fa-user-secret', 'fas fa-walking', 'fas fa-wine-glass-alt', 'fas fa-yin-yang', 'fas fa-ankh'];

let array22 = [];

let i;
for (i=0; i < 24; i++) {
  let x;
  let randomNum = Math.floor(Math.random() * iconArray.length);
  x = iconArray.splice(randomNum, 1);
  array22.push(...x);
}

console.log(array22);

export default array22;