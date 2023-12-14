var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length);
  let i = 0,
    j = 0;
  while (i <= m - 1 && j <= n - 1) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      j++;
      m++;
    }
  }
  while (j <= n - 1) {
    nums1.push(nums2[j]);
    j++;
  }
  return nums1;
};
