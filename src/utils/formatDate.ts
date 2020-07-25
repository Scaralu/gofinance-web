const formatDate = (data: Date) => {
  const nData = new Date(data);

  return `${nData.getDate()}/${nData.getMonth() + 1}/${nData.getFullYear()}`
}

export default formatDate;
