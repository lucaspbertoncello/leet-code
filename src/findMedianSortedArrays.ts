const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  const mergeArr: number[] = [...nums1, ...nums2];

  const sum: number = mergeArr.reduce(
    (acc: number, item: number) => acc + item,
    0
  );

  return sum / mergeArr.length;
};

console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 2, 4, 4]));
