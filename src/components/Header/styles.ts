import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${p => p.theme.colors.primary};
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;
