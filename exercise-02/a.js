const api = (value) => {
  value(1);
}

const api2 = (value) => {
  value(2);
}

const api3 = (value) => {
  value(3);
}

api(function(result) {
  console.log('result: ', result);
    api2(function(result2){
      console.log('result2: ', result2);
        api3(function(result3){
          console.log('result3: ', result3);
        });
    });
});