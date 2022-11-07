// calc button counts and returns buttons array
const buttonCounts = (arr, pageCardCounts) => {
  const arrLen = arr.length;

  const buttons = Math.floor(arrLen / pageCardCounts);
  let buttonArr = [];

  if (arrLen % pageCardCounts) {
    //for remainder not '0'
    for (let i = 1; i < buttons + 1; i++) {
      buttonArr = [...buttonArr, i, i + 1];
    }
  } else {
    //for remainder '0'
    for (let i = 1; i < buttons + 1; i++) {
      buttonArr = [...buttonArr, i];
    }
  }
  return { buttonArr };
};

// page calc
const getPageCards = (pageIndex, pageCardCount) => {
  // page index 1
  // page slice
  const sliceNum = {
    first: pageIndex * pageCardCount - pageCardCount,
    last: pageIndex * pageCardCount,
  };
  return sliceNum;
};

export { buttonCounts, getPageCards };
