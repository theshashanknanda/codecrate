import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStage } from '../../../reducers/slices/courseSlice'

const TimeLineView = () => {
    const items = [
        "Course Information",
        "Course Builder",
        "Publish Course",
    ]

    const courseStage = useSelector((state) => {
        return state.course.currentStage
    })
    const dispatch = useDispatch()
  return (
    <div>
      <div className='text-2xl text-left font-semibold p-4'>Create Course</div>
      <div className='w-full overflow-x-auto pb-2'>
        <div className='flex flex-col sm:flex-row gap-4 min-w-max px-4'>
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 p-2 rounded-lg transition-colors cursor-pointer ${index === courseStage ? 'bg-richblack-700' : 'hover:bg-richblack-800'}`}
              onClick={() => dispatch(setCurrentStage(index))}
            >
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-semibold ${
                index === courseStage 
                  ? 'bg-[#FFD608] text-richblack-900' 
                  : 'bg-richblack-600 text-white'
              }`}>
                {index + 1}
              </div>
              <p className='text-base font-medium whitespace-nowrap'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeLineView
