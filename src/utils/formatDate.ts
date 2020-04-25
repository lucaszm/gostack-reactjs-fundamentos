const formatDate = (value: Date): string => {
  // console.log(value);
  // return 'opa';
  // if (value && !isNaN(value.getTime()))
  // try {
  return Intl.DateTimeFormat('pt-BR').format(value);
  // } catch {
  //    console.log(value.constructor.name);
  //    return '';
  //  }

  // return '';
};

export default formatDate;
