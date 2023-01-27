import styled from 'styled-components';

import { Link } from 'src/components/Link/styles';

export const StudentCardContainer = styled(Link)`
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  color: white;
  box-shadow: 10px 10px 18px -6px rgba(0, 0, 0, 0.29);
  position: relative;
  text-decoration: none;
  cursor: pointer;

  &:nth-child(5n + 1) {
    background: #f1a660;
    border: 1px solid #f4ad66;
  }

  &:nth-child(5n + 2) {
    background: #7ca4f3;
    border: 1px solid #eff5fb;
  }

  &:nth-child(5n + 3) {
    background: #ea5976;
    border: 1px solid #d7c7fb;
  }

  &:nth-child(5n + 4) {
    background: #a07df4;
    border: 1px solid #fefcff;
  }

  &:nth-child(5n + 5) {
    background: #68e2bd;
    border: 1px solid #69e6ca;
  }
`;

export const StudentCardValue = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  p {
    margin: 0;
  }
`;

export const StudentCardName = styled.h3`
  margin-top: 0;
`;

export const StudentCardContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const StudentCardFirstLetter = styled.div`
  font-weight: bold;
  opacity: 0.2;
  position: absolute;
  right: 16px;
  bottom: 0;
  font-size: 3rem;
`;

export const StudentCardImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  margin-right: 12px;
  object-fit: cover;
`;
