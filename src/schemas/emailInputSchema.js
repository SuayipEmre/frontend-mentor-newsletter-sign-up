

import * as yup from 'yup'

export default yup.object().shape({
    usermail: yup
    .string()
    .email('Valid email required!')
    .required('the email field is required!'),
})

