// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

const mergeTwoLists = (
  l1: number[] | null,
  l2: number[] | null
): number[] | null => {
  const newList: number[] = [...(l1 || []), ...(l2 || [])];
  return newList.sort((a, b) => a - b);
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
