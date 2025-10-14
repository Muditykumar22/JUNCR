

import React from 'react';

const Card = () => {
    const applicants = [
    {
        name: 'Joe', work: 'freelance-developer',
        blogs: '54', websites: '32',
        hackathons: '6', location: 'morocco', id: '0',
    },
    {
        name: 'janet', work: 'fullstack-developer',
        blogs: '34', websites: '12',
        hackathons: '8', location: 'Mozambique', id: '1',
    },
    {
        name:"bandna", work:"frontend engineer",
        blogs:"10",websites:"13",
        hackathons:"5",location:"mohali punjab"
    }

    ]


    return (
        <div>
            <h1>Oh! Hello World</h1>

            <ShowcaseApplicants applicants={applicants} />

        </div>
    )

    function ShowcaseApplicants(props) {
        const applicants = props.applicants

        return (
            <div>
            {applicants.map((applicant) => (
                <ApplicantCard key={applicant.id || applicant.name} applicant={applicant} />
            ))}
            </div>
        );
        }

        function ApplicantCard({ applicant }) {
        return (
            <div style={{ border: '1px solid #f54a4aff', borderRadius: '8px', margin: '16px 0', padding: '16px' }}>
            <h2>{applicant.name}</h2>
            <p>
                <strong>Role:</strong> {applicant.work}
            </p>
            <p>
                <strong>Websites built:</strong> {applicant.websites}
            </p>
            <p>
                <strong>Blogs written:</strong> {applicant.blogs}
            </p>
            <p>
                <strong>Hackathons attended:</strong> {applicant.hackathons}
            </p>
            <p>
                <strong>Location:</strong> {applicant.location}
            </p>
            </div>
        );
    }
}



export default Card;