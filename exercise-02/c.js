const api = async (value) => {
  console.log('result: ', value);
}

const api2 = async (value) => {
  console.log('result: ', value);
}

const api3 = async (value) => {
  console.log('result: ', value);
}

const main = async () => {
  await api(1);
  await api2(2);
  await api3(3);
}

main();