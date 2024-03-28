import React, { useEffect } from 'react';
import FullScreenTitle from '../../components/FullScreenTitle/FullScreenTitle';
import Section from '../../components/Section/Section';
import AboutMeList from '../../components/AboutMeList/AboutMeList';
import TechnologyList from '../../components/TechnologyList/TechnologyList';
import aboutMeItems from '../../components/AboutMeList/aboutMeItems';
import technologies from '../../components/TechnologyList/technologies';

const About = () => {
  useEffect(() => {
    document.title = 'Jaedon Munton | Technology and Venture Capital Professional | About';
  });

  return (
    <>
      <FullScreenTitle
        title="hello, i'm Jaedon"
        subtitle="a technology and venture capital professional with a passion for innovation and entrepreneurship."
        imageSrc="/images/profile/melvin-portrait.jpg"
        imageAlt="Portrait of Melvin Rajendran"
      />
      <Section title="about me">
        <AboutMeList items={aboutMeItems} />
      </Section>
      <Section title="technologies">
        <TechnologyList items={technologies} />
      </Section>
    </>
  );
};

export default About;
