import Link from 'next/link';

import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }

  &:hover .logo-text {
    transform: scale(1.2);
  }

  .logo-text {
    transition: transform 0.2s ease-in-out;
  }
`;

const Logo = () => {

  return (
    <Link href="/">
      <LogoBox>

        <Text
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          ml={3}
          fontSize="2xl"
          fontFamily="Poppins"
          className="logo-text"
        >
          leoomg
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
