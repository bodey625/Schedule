import React, {Component} from 'react';
import Gradient from '../gradients';
import ScheduleCourse from './scheduleCoures';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
    render() {
        return (
            <div className="schedule">
                <h1 className="schedule__title">My Schedule</h1>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <ProgressTracker/>
                <Gradient/>
            </div>
        )
    }
}

export default Schedule;