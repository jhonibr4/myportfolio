import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContainerItemHardSkill = styled.div`
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 15px;
  width: 25%;
  svg {
    color: ${({ theme }) => theme.white};
    font-size: 4.5rem;
    margin-bottom: 0.5rem;
    @media ${({ theme }) => theme.device.laptopM} {
      font-size: 4rem;
    }
    @media ${({ theme }) => theme.device.mobileL} {
      font-size: 2rem;
    }
    @media ${({ theme }) => theme.device.mobileL} {
      font-size: 2.5rem;
    }
  }
  @media ${({ theme }) => theme.device.laptopM} {
    width: 25%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 35%;
    padding-block: 0.5rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    gap: 0.5rem;
    width: 34%;
    padding-block: 1rem;
  }
`
export const ImageHardSkill = styled.img`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
`

interface IIconLevel {
  value: boolean
}
export const RowIconLevel = styled.div`
  display: flex;
  gap: 0rem 0.1rem;
  .iconLevel {
    color: ${({ theme }) => theme.white};
    font-size: 1rem;
  }
`
export const WrapperIcon = styled.div<IIconLevel>`
  display: flex;
`
export const TitleTechs = styled.h1`
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;
  span {
    color: ${({ theme }) => theme['black-800']};
    font-size: 2rem;
    @media ${({ theme }) => theme.device.laptopM} {
      font-size: 1.5rem;
    }
  }
  p {
    margin-bottom: 0.5rem;

    font-size: 1.5rem;
    @media ${({ theme }) => theme.device.laptopM} {
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    margin-top: 8rem;
  }
`
export const RowTechs = styled(motion.div)`
  display: flex;
  align-self: center;
  justify-content: center;

  flex-wrap: wrap;
  width: 70%;

  svg {
    color: ${({ theme }) => theme.white};
    font-size: 10rem;
    @media ${({ theme }) => theme.device.laptopL} {
      font-size: 10rem;
    }
    @media ${({ theme }) => theme.device.mobileS} {
      font-size: 7rem;
    }
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
  }
`
