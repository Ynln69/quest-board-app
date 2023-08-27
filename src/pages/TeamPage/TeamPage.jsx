import React from 'react';
import { Col } from 'react-bootstrap';

import teamMembersData from '../../data/team.json';
import TeamCard from 'components/TeamCard/TeamCard';

import { ContainerWrap, RowContainer, Text } from './TeamPage.styled';

const TeamPage = () => {
  const teamMembers = teamMembersData || [];
  try {
    return (
      <ContainerWrap>
        <Text>WEB RANGERS</Text>
        <RowContainer>
          {teamMembers.map((member, index) => (
            <Col key={index} sm={4}>
              <TeamCard
                name={member.name}
                role={member.role}
                avatar={member.avatar}
                telegram={member.telegram}
                github={member.github}
                linkedin={member.linkedin}
              />
            </Col>
          ))}
        </RowContainer>
      </ContainerWrap>
    );
  } catch (error) {
    console.error('Error rendering team members:', error);
    return null;
  }
};

export default TeamPage;
