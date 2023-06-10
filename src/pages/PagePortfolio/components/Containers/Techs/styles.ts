import styled from 'styled-components'

export const ContentScreen = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme['purple-600']};
  font-size: 1.3rem;
  @media ${({ theme }) => theme.device.laptopS} {
    padding-block: 1rem;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    height: 100%;
  }
`

export const ContentHardSkills = styled.div`
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem 4.6rem;
  @media ${({ theme }) => theme.device.laptopM} {
    gap: 1rem 1rem;
  }
`
export const WrapperHardSkills = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${({ theme }) => theme.device.laptopM} {
    width: 70%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 90%;
  }
`

export const TitleHardSkills = styled.h1`
  margin-bottom: 3rem;
  align-self: center;
  span {
    color: ${({ theme }) => theme['black-800']};
  }
`
