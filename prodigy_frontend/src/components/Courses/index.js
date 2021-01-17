import React from 'react'
import courses from './courseObject.json'

const Course = () => {
        return (
            <>
                {courses.courses.map((item, i) => (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.subject}</td>
                        <td>{item.teacher}</td>
                        <td>{item.desc}</td>
                        <td>{item.cost}</td>
                        <td>{item.avr_rating}</td>
                    </tr>
                ))}
            </>
        );
}

export default Course;
