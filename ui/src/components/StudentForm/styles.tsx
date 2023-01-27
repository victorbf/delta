import styled from 'styled-components';

export const StudentFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StudentFormContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const StudentFormInput = styled.input`
  padding: 12px;
  border-radius: 6px;
  font-size: 12px;
  border: 1px solid #eee;
  width: 100%;
  margin: 12px;
  box-sizing: border-box;
`;

export const StudentFormImageContainer = styled.label`
  width: fit-content;
  margin-bottom: 18px;
  cursor: pointer;
  position: relative;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: #313131;
    color: white;
    width: 24px;
    height: 24px;
    padding: 4px;
    border-radius: 50%;
    top: 4px;
    right: -8px;
  }

  input {
    display: none;
  }
`;

export const StudentFormImage = styled.img`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  border: 4px solid #22ac83;
  object-fit: cover;
`;
