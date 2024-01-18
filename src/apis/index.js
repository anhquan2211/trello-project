import axios from 'axios'

import { API_ROOT } from '@/ultis/constants'

//Không đưa vào try...catch vì sau đó sẽ catch lỗi tập trung tại một nơi bằng cách tận dụng một thứ cực kỳ mạnh mẽ trong axios đó là Interceptors.
//Hiểu đơn giản Interceptors là cách mà chúng ta sẽ đánh chặn vào giữa request hoặc response để xử lý logic mà chúng ta muốn.
export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)

  //Lưu ý: axios sẽ trả về kết quả có thuộc tính data
  return response.data
}
