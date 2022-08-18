/* eslint-disable react/jsx-key */
import React from 'react';

const experiences = [
  {
    name: 'Bitcamp',
    jobTitle: 'Logistics Organizer',
    startToEndDate: 'NOV 21 ~',
    bullets: [
      <span>
        Organizes{' '}
        <a
          href="https://bit.camp/"
          className="link-cultured"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bitcamp
        </a>
        , the University of Maryland&apos;s 36-hour hackathon that hosts 1,200+ campers annually
      </span>,
      'Communicates with local vendors to secure power equipment for the event',
      'Designs Xfinity Center floor plans to align with university social distancing measures',
      'Operates A/V equipment throughout the event to host speakers and make announcements to campers',
    ],
  },
  {
    name: 'PayPal',
    jobTitle: 'Software Engineer Intern',
    startToEndDate: 'MAY 22 - AUG 22',
    bullets: [
      'Worked on an Agile development team to deliver credit acquisition products',
      'Utilized React, Node, TypeScript, GraphQL, and Git extensively',
      'Collaborated frequently with other engineers to problem-solve, review and test code, showcase product demos, and reflect on every development cycle',
      'Networked with company execs through intern program-wide events to learn more about the company, its mission, and ongoing innovations',
      'Presented to the larger credit organization on my internship project, summer experience, and takeaways',
    ],
  },
  {
    name: 'Code Ninjas',
    jobTitle: 'Programming Tutor',
    startToEndDate: 'NOV 19 - AUG 21',
    bullets: [
      'Taught children ages 7 to 14 fundamental programming concepts in the context of game development',
      'Organized and ran annual hackathon',
      'Conducted machine learning workshops in which students gained exposure to sentiment analysis and supervised learning',
      'Directed 2-month summer camps on Web Development, Python, and JavaScript',
    ],
  },
  {
    name: 'X-STEM Club',
    jobTitle: 'Board Member / Educational Lead',
    startToEndDate: 'SEP 20 - JUN 21',
    bullets: [
      'Competed in STEM-related entrepreneurship competitions',
      'Planned and presented business material during club meetings',
      'Mentored club members as they created their own startups and applied to competitions',
      'Organized online event, LaunchSB, in which members pitched their startups to and received feedback from renowned entrepreneurs in the tech industry',
      <span>
        Placed Top 30 in 2020{' '}
        <a
          href="https://blueoceancompetition.org/"
          className="link-cultured"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blue Ocean High School Entrepreneurship Competition
        </a>{' '}
        for creating a shared parking application called{' '}
        <a
          href="https://youtu.be/rYuGI8eEXg0"
          className="link-cultured"
          target="_blank"
          rel="noopener noreferrer"
        >
          Haven
        </a>
      </span>,
    ],
  },
  {
    name: 'Peer Leadership Program',
    jobTitle: 'Peer Leader',
    startToEndDate: 'SEP 20 - JUN 21',
    bullets: [
      'Mentored incoming freshmen as they transitioned into high school',
      'Established positive long-term relationships through team-building activities and games',
      'Presented on mental health, social media addiction, HIB, and conflicts in relationships',
    ],
  },
];

export default experiences;
