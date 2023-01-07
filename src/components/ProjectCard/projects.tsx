import React from 'react';

const projects = [
  {
    imageURL: 'images/projects/Convertify.png',
    imageAlt: 'Convertify',
    projectURL: 'https://convertify.onrender.com',
    title: 'Convertify',
    date: 'DEC 22 - JAN 23',
    text: (
      <span>
        A web application that enables Spotify users to quickly convert their playlists between
        explicit and clean.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/Convertify',
    technologies: (
      <span>
        React,{' '}
        <a
          href="https://developer.spotify.com/documentation/web-api/"
          className="link-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify Web API
        </a>
      </span>
    ),
  },
  {
    imageURL: 'images/projects/RocketLeagueGame.png',
    imageAlt: 'Rocket League Game',
    title: 'Rocket League',
    date: 'MAY 21',
    text: (
      <span>
        A &quot;soccar&quot; game using{' '}
        <a
          href="https://www.photonengine.com/pun"
          className="link-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Photon Unity Networking
        </a>{' '}
        to host online games in a room-based multiplayer server.
      </span>
    ),
    codeURL:
      'https://github.com/melvinrajendran/High-School-CS/tree/master/Virtual%20Reality%20and%20Game%20Design%202020-21/RocketLeagueGame',
    technologies: <span>Unity, C#, PUN</span>,
  },

  {
    imageURL: 'images/projects/GalagaGame.png',
    imageAlt: 'Galaga Game',
    title: 'Galaga',
    date: 'MAR 21 - APR 21',
    text: (
      <span>
        A space shooter in which AI enemies are trained using curriculum-based reinforcement
        learning.
      </span>
    ),
    codeURL:
      'https://github.com/melvinrajendran/High-School-CS/tree/master/Virtual%20Reality%20and%20Game%20Design%202020-21/GalagaGame',
    technologies: (
      <span>
        Unity, C#,{' '}
        <a
          href="https://unity.com/products/machine-learning-agents"
          className="link-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLAgents
        </a>
      </span>
    ),
  },
  {
    imageURL: 'images/projects/JuliaSetProgram.png',
    imageAlt: 'Julia Set Program',
    title: 'Julia Set Visualizer',
    date: 'JAN 21',
    text: (
      <span>
        An app that visualizes a{' '}
        <a
          href="https://en.wikipedia.org/wiki/Julia_set"
          className="link-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Julia set
        </a>{' '}
        and enables adjustment of both its values and appearance.
      </span>
    ),
    codeURL:
      'https://github.com/melvinrajendran/High-School-CS/tree/master/Data%20Structures%202020-21/GUI/Julia%20Set%20Activity',
    technologies: <span>Java, Swing</span>,
  },
];

export default projects;
