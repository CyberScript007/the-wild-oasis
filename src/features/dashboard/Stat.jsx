import styled from "styled-components";

const StyleStat = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.5rem;
  row-gap: 0.5rem;
  align-items: center;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 1.5rem 1.8rem;
  line-height: 1;
`;

const SvgContainer = styled.div`
  grid-row: 1/ -1;
  width: 6rem;
  height: 6rem;
  background-color: var(--color-${(props) => props.colorType});
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 3rem;
    height: 3rem;
    stroke: var(--color-${(props) => props.colorFill});
  }
`;

const StatLabel = styled.h5`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: var(--color-grey-500);
  font-weight: 600;
  align-self: end;
  line-height: 1.2;
`;

const StatValue = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--color-grey-800);
`;

function Stat({ icon, colorType, colorFill, label, value }) {
  return (
    <StyleStat>
      <SvgContainer colorType={colorType} colorFill={colorFill}>
        {icon}
      </SvgContainer>
      <StatLabel>{label}</StatLabel>
      <StatValue>{value}</StatValue>
    </StyleStat>
  );
}

export default Stat;
