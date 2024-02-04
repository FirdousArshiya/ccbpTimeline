// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="main-cont">
        <div className="course-title-and-duration-container">
          <h1 className="course-title">{courseTitle}</h1>
          <div className="duration-container">
            <AiFillClockCircle color="#171f46" />
            <p className="duration">{duration}</p>
          </div>
          <p className="course-description">{description}</p>
          <ul className="course-items-list">
            {tagsList.map(eachTag => (
              <li key={eachTag.id} className="list-item">
                <p className="course-name">{eachTag.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
export default CourseTimelineCard
