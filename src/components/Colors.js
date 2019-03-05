
// const createArray = () => {
    const Colors = [];
    let i;
    for (i=0; i < 24; i++) {
      const randomNum = Math.floor(Math.random() * 9)
      switch (randomNum) {
        case 1: 
          Colors.push("is-light");
          break;
        case 2: 
          Colors.push("is-dark");
          break;
        case 3: 
          Colors.push("is-primary");
          break;
        case 4: 
          Colors.push("is-info");
          break;
        case 5: 
          Colors.push("is-link");
          break;
        case 6: 
          Colors.push("is-success");
          break;
        case 7: 
          Colors.push("is-warning");
          break;
        case 8: 
          Colors.push("is-danger");
          break;
        default: 
          Colors.push("is-grey");
          break;
      };
    }
    // return colorsArray;
  // };
  // let Colors = createArray();
  // let test = createArray();
  console.log(Colors);

  export default Colors;