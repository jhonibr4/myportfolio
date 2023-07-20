import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContentScreen = styled.section`
  height: 100%;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme['black-800']};
`

export const WrapperCardsProject = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 85%;
  height: 100%;
  margin-top: 2rem;
  gap: 2rem;
  @media ${({ theme }) => theme.device.tabletL} {
    justify-content: left;
    width: 60%;

    overflow-x: hidden;
    flex-wrap: nowrap;
  }
`
