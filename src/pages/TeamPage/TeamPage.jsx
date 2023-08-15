import React from 'react';
import TeamCard from 'components/TeamCard/TeamCard';
import teamMembersData from '../../data/team.json'
import { Col } from 'react-bootstrap';
import { ContainerWrap, RowContainer, Text } from './TeamPage.styled';

const TeamPage = () => {
  const teamMembers = teamMembersData || [];
  console.log(teamMembers);
  try {
    return (
      <ContainerWrap>
        <Text>WEB RENGERS</Text>
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