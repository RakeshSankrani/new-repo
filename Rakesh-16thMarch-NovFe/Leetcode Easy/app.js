const merge = (arr1, arr2) => {
    let sorted = [];

    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]){
        sorted.push(arr1.shift());
      } 
      else {
          sorted.push(arr2.shift());
        }
    };

    let array = sorted.concat(arr1.slice().concat(arr2.slice()));

    const finalarray = array.filter(value => {
        return value !== 0;
    })

    console.log(finalarray);
  };

  merge([1, 2, 3, 0, 0, 0], [2, 5, 6]);


  function mergeTwo(arr1, arr2) {
    let result = [...arr1, ...arr2];
    let fn = result.sort((a,b) => a-b);
    let final = fn.filter(value => {
        return value !== 0;
    })
    console.log(final)
  }

  mergeTwo([1, 2, 3, 0, 0, 0], [2, 5, 6])