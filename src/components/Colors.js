
const createArray = () => {
    const colorsArray = [];
    let i;
    for (i=0; i < 24; i++) {
      const randomNum = Math.floor(Math.random() * 9)
      switch (randomNum) {
        case 1: 
          colorsArray.push("is-light");
          break;
        case 2: 
          colorsArray.push("is-dark");
          break;
        case 3: 
          colorsArray.push("is-primary");
          break;
        case 4: 
          colorsArray.push("is-info");
          break;
        case 5: 
          colorsArray.push("is-link");
          break;
        case 6: 
          colorsArray.push("is-success");
          break;
        case 7: 
          colorsArray.push("is-warning");
          break;
        case 8: 
          colorsArray.push("is-danger");
          break;
        default: 
          colorsArray.push("is-grey");
          break;
      };
    }
    return colorsArray;
  };
  let Colors = createArray();

  export default Colors;