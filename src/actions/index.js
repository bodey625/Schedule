import { FETCH_COURSES } from './types';

function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Up and Runing with Reddis",
                description: "In this course, you will learn how to..."
            },
            {
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML5 and CSS3 from scratch, starting with..."
            },
            {
                title: "UX for Developers",
                description: "This user experience (UX)course examines how to..."
            }
        ]
    }
}