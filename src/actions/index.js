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
            },
            {
                title: 'Problem Solving',
                description: 'In this course you\'ll take a practical look at how to build a large number of software applications and features. By taking a systems analysis and design approach to development and leveraging UML, you\'ll be able to model systems and prepare to build the projects.'
            },
            {
                title: 'UML for Developers',
                description: 'This course teaches the foundational building blocks of utilizing UML in order to model software systems.'
            },
            {
                title: 'Algorithm Bootcamp',
                description: 'Algorithm Bootcamp - In this in depth course you will learn how to work with algorithms, including: how to measure their performance, understanding data structures, and implementing all of the algorithms in code.'
            },
            {
                title: 'Introduction to Programming with Python',
                description: 'This course teaches the fundamentals of programming and utilizes the Python programming language.'
            },
            {
                title: 'TypeScript Development',
                description: 'This course gives an introduction to the TypeScript programming language, including walking through the: syntax, best practices, and practical systems for building TypeScript programs.'
            },
            {
                title: 'Introduction to Javascript',
                description: 'This course gives an introduction to the JavaScript programming language, including the basic syntax, how to work with collections, and input/output.',
            },
            {
                title: 'Dissecting Rails 5',
                description: 'Learn how to build powerful applications using this comprehensive guide to the Ruby on Rails web framework.',
            }
        ]
    }
}