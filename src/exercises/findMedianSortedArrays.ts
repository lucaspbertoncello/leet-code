const isOdd = (num: number): boolean => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  const mergeArr: number[] = [...nums1, ...nums2];
  const sortedArr = mergeArr.sort((a, b) => a - b);

  if (isOdd(sortedArr.length)) {
    return sortedArr[Math.floor(sortedArr.length / 2)];
  }

  const firstMid = sortedArr[Math.floor(sortedArr.length / 2)];
  const secMid = sortedArr[Math.floor(sortedArr.length / 2 - 1)];

  return (firstMid + secMid) / 2;
};

console.log(findMedianSortedArrays([4, 2], [3, 1, 4, 5, 6, 7, 8]));
