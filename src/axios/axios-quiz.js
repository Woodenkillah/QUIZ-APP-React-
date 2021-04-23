import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-2021-default-rtdb.firebaseio.com/'
})