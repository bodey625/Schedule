import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/*icon component*/}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et feugiat libero, at cursus augue. Nulla laoreet lobortis leo, ut tincidunt risus ornare vel. Nunc ac erat ac elit aliquet elementum pulvinar ac felis. Sed at dui est. Integer sit amet rhoncus ipsum. Proin a nulla consequat, tempor augue eget, consectetur nibh. Vestibulum vel augue et enim condimentum aliquam. Pellentesque est urna, fermentum vitae dapibus nec, congue in purus. Curabitur enim leo, dapibus eget neque eu, feugiat accumsan ligula. Sed dui diam, dictum a faucibus ac, posuere ut est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc tempus a dui at ultricies. Donec accumsan tortor in nisi elementum, hendrerit ultricies augue pulvinar. Cras consequat condimentum ante sed viverra.
                    </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;