import Container from '@mui/material/Container'

import AppBar from '@/components/AppBar/AppBar'
import BoardBar from './components/BoardBar'
import BoardContent from './components/BoardContent'
import { mockData } from '@/apis/mock-data'

function BoardDetail() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />

      <BoardBar board={mockData?.board} />

      <BoardContent board={mockData?.board} />
    </Container>
  )
}

export default BoardDetail
