import { useEffect, useState } from 'react'

import ListColumns from './ListColumns'
import Box from '@mui/material/Box'

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

import { mapOrder } from '@/ultis/sorts'

function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([])

  //Áp dụng cách dưới đây nhưng vẫn cần bug
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 }
  // })

  //Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  })

  //Nhấn giữ 250ms và dung sai của cảm ứng 500px thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 }
  })

  // const sensors = useSensors(pointerSensor)
  //Ưu tiên sử dụng kết hợp 2 loại sensors là mouse và touch để có trải nghiệm trên mobile tốt nhất, không bị bug.
  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event

    //Kiểm tra nếu không tồn tại over (kéo ra ngoài thì return luôn tránh lỗi)
    if (!over) return

    //Nếu vị trí sau khi kéo khác với vị trí ban đầu
    if (active.id !== over.id) {
      //Lấy vị trí cũ từ active
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)

      //Lấy vị trí mới từ over
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)

      //Dùng arrayMove của dnd-kit để sắp xếp lại mảng Columns ban đầu.
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)

      //Logic dưới đây để xử lý gọi API
      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)

      //Cập nhật lại state columns sau khi kéo thả
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
