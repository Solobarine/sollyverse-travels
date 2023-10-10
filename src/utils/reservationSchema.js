import * as Yup from 'yup'

const dateValidation = (minDays, maxDays) => {
    return Yup.date().test('date-range', `Date must be between ${minDays} and ${maxDays} days from today.`, function(value) {
      const minDate = new Date();
      minDate.setDate(minDate.getDate() + minDays);
  
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + maxDays);
  
      return value >= minDate && value <= maxDate;
    }).required('Start Date is Required')
  }

export const reservationInputs = [
    {
        id: 0,
        name: 'startDate',
        type: 'date',
        label: 'Start Date',
        placeholder: 'Enter Start Date'
    },
    {
        id: 1,
        type: 'date',
        name: 'endDate',
        label: 'End Date',
        placeholder: 'Enter End Date'
    }
]

export const reservationSchema = Yup.object().shape({
    startDate: dateValidation(7, 90),
    endDate: Yup.date()
    .required('End Date is Required')
    .min(
      Yup.ref('startDate'),
      'End Date should not be before or less than a week after Start Date'
    )
    .test('is-one-month', 'End Date should not be longer than 1 month', function (
      endDate
    ) {
      const startDate = this.resolve(Yup.ref('startDate'));
      const oneMonthLater = new Date(startDate);
      console.log(oneMonthLater);
      console.log(endDate);
      oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
      return endDate <= oneMonthLater;
    })
})