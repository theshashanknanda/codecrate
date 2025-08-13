import React, { useEffect, useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { useDispatch, useSelector } from 'react-redux';
import { getEnrolledCourses } from '../../services/operations/coursesApi';
import Loader from '../Loader';
import { Link } from 'react-router-dom';

const EnrolledCourses = () => {
  const token = useSelector((state) => state.profile.token)
  const user = useSelector((state) => state.profile.user)
  const loading = useSelector((state) => state.auth.loading)
  const dispatch = useDispatch()

  const [courses, setCourses] = useState([])

  useEffect(() => {
    dispatch(getEnrolledCourses(token, setCourses))
  }, [])
  return (
    <div className='text-white w-[90%] h-[calc(100vh-80px)] mx-auto p-4 overflow-y-auto'>
      {
        loading ? (<Loader/>) : 
        (
          <div>
            <div className='text-2xl text-left font-semibold'>Enrolled Tutorials</div>

<div className='w-full mt-9 border rounded-lg border-[#858484] max-h-[calc(100vh-80px)] overflow-y-auto'>
  <div className='flex items-center justify-between bg-[#2B333F] p-4 rounded-t-lg'>
    <p className='w-[60%]'>Tutorial Name</p>
    <p className='w-[30%]'>Progress</p>
  </div>

  {
    courses.map((course, index) => {
      return (
      <Link key={index} to='/dashboard/view-course' state={{course}} className='block hover:bg-[#0f172a] transition-colors'>
        <div className='flex items-center justify-between p-4'>
          <div className='flex gap-4 items-center text-left w-[60%]'>
            <img src={course.thumbnail} alt={course.courseName} className='w-[70px] h-[50px] object-cover rounded-md'/>
            <div className='min-w-0'>
              <p className='text-lg font-medium'>{course.courseName}</p>
              <p className='opacity-60 text-sm line-clamp-2' title={course.courseDescription}>
                {course.courseDescription}
              </p>
            </div>
          </div>

          <div className='w-[30%]'>
            <p className='text-left pb-2 text-md font-semibold opacity-70'>Progress {course.completionPercentage}%</p>
            <ProgressBar 
              completed={course.completionPercentage} 
              height="10px" 
              isLabelVisible={false}
              bgColor="#FED50A"
              baseBgColor="#2B333F"
              className="rounded-full overflow-hidden"
            />
          </div>
        </div>
      </Link>
      )
    })
  }

</div>
          </div>
        )
      }
    </div>
  )
}

export default EnrolledCourses
