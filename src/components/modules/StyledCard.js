import styled from 'styled-components';

export const StyledTemp = styled.p`
  color: #3e8797;
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const StyledWeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const StyledWeatherDescription = styled.p`
  color: rgb(36, 40, 91);
  font-size: 1.2rem;
`;

export const StyledDateRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const StyledDayRow = styled(StyledDateRow)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`;

export const Hour = styled.p`
  color: #ffd200;
  font-size: 2.75rem;
  font-weight: bold;
  display: flex;
`;

export const StyledMinutes = styled.span`
  font-size: 2rem;
`;

export const StyledDesc = styled.p`
  color: rgb(36, 40, 91);
`;
export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PercentSpan = styled.span`
  color: #3e8797;
  font-size: 1.2rem;
  padding-left: 0.25rem;
`;
