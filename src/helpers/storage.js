const storageName = 'products';

// // irasyti i storage
// localStorage.setItem('key', 'value');

// // pasiimam is storage
// const value = localStorage.getItem('key');

// if (value) {
//   //we have value in storage
// }

export function store(arrToBeStored) {
  const stringFromArr = JSON.stringify(arrToBeStored);
  localStorage.setItem(storageName, stringFromArr);
}

export function isThereValueStored() {
  return !!localStorage.getItem(storageName);
}

export function getFromStore() {
  const jsonStoreValue = localStorage.getItem(storageName);
  return JSON.parse(jsonStoreValue);
}
