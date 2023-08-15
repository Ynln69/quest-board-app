import styled from '@emotion/styled';

export const ContainerDashboard = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 20px;
  background-color: transparent;
  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 26px 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1180px;
    padding: 10px 24px;
  }
`;

const getBackgroundStyles = ({ photo }) => {
  let styles = `background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 68px);
  `;

  if (photo === 'bg1') {
    styles += `background: var(--board_bgc);`;
  } else {
    styles += `
    @media screen and (max-width: 767px) {
    // height: 812px;

    background-image: url(${photo.m});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${photo.m2x});
    }
  }

  @media screen and (min-width: 768px) {
    // height: 956px;

    background-image: url(${photo.t});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${photo.t2x});
    }
  }

  @media screen and (min-width: 1440px) {
    // height: 770px;

    background-image: url(${photo.d});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${photo.d2x});
    }
  }
`;
  }

  return styles;
};

export const DynamicContainer = styled.div`
  ${getBackgroundStyles}
`;
