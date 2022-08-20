const api = (value) => {
  console.log('result: ', value);
}

const api2 = (value) => {
  console.log('result: ', value);
}

const api3 = (value) => {
  console.log('result: ', value);
}
 
new Promise((resolve, _reject) => {
  api(1);
  resolve('Success');
}).then(() => {
  api2(2);
}).then(() => {
  api3(3);
});