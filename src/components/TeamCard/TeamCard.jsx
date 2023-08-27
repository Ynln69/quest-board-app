import React from 'react';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';

import {
  StyledCard,
  StyledCardBody,
  StyledCardImg,
  StyledCardTitle,
  StyledCardText,
  SocialLinks,
  SocialIcon,
} from './TeamCard.styled';

const TeamCard = ({ name, role, avatar, telegram, github, linkedin }) => {
  return (
    <div>
      <StyledCard>
        <StyledCardBody>
          <StyledCardImg variant="top" src={avatar} width="100" />
          <StyledCardTitle>{name}</StyledCardTitle>
          <StyledCardText>{role}</StyledCardText>
          <SocialLinks>
            {telegram && (
              <SocialIcon href={telegram}>
                <FaTelegram />
              </SocialIcon>
            )}
            {github && (
              <SocialIcon href={github}>
                <FaGithub />
              </SocialIcon>
            )}
            {linkedin && (
              <SocialIcon href={linkedin}>
                <FaLinkedin />
              </SocialIcon>
            )}
          </SocialLinks>
        </StyledCardBody>
      </StyledCard>
    </div>
  );
};

export default TeamCard;
