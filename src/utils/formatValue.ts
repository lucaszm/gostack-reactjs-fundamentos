const formatValue = (value: number): string => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  // return Intl.NumberFormat('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL',
  // })
  //   .formatToParts(value)
  //   .map(({ type, value: val }) => {
  //     switch (type) {
  //       case 'minusSign':
  //         return '- ';
  //       default:
  //         return val;
  //     }
  //   })
  //   .reduce((string, part) => string + part);
};

export default formatValue;
