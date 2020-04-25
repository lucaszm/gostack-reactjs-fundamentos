const formatSize = (value: number): string => {
  let u = 0;
  let b = value;
  const s = 1024;
  while (b >= s || -b >= s) {
    b /= s;
    u += 1;
  }
  return `${(u ? `${b.toFixed(1)} ` : b) + ' KMGTPEZY'[u]}B`;
};

export default formatSize;
