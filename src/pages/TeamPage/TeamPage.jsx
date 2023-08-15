import React from 'react';
import TeamCard from 'components/TeamCard/TeamCard';
import teamMembers from '../../team.json';
import { Col } from 'react-bootstrap';
import { ContainerWrap, Text, RowContainer } from './TeamPage.styled';

const TeamPage = () => {
  return (
    <ContainerWrap>
      <Text>Our Dream Team</Text>
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
};

export default TeamPage;
