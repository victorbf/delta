import styled from 'styled-components';

import { Link } from 'src/components/Link/styles';

export const Button = styled.button`
  border: 1px solid #22ac83;
  background: #68e2bd;
  color: white;
  font-size: 1rem;
  padding: 12px;
  border-radius: 8px;
  text-transform: Uppercase;
  margin-bottom: 12px;
  cursor: pointer;

  &[aria-details='danger'] {
    background: #ea5976;
    border: 1px solid #d7c7fb;
  }
`;

export const FloatButton = styled(Link)`
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 14px;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 50%;
  background: #68e2bd;
  box-shadow: 10px 10px 18px -6px rgba(0, 0, 0, 0.29);
`;
