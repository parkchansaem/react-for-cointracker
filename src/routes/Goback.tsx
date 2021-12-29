import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Gobackbtn = styled.button`
  position: absolute;
  left: 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.textColor};
  border: none;
  width: 45px;
  height: 30px;

  transition: color 0.2s ease-in;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

function Goback() {
  const navigate = useNavigate();
  return <Gobackbtn onClick={() => navigate(-1)}>back</Gobackbtn>;
}
export default Goback;
