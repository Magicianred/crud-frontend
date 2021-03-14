import moment from 'moment';

const formatDate = (date: Date | undefined) => {
  return moment(date).format("DD/MM/YYYY")
}

export default formatDate;