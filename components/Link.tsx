import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface LinkProps {
  href: string;
  target?: string;
}

export default function Link({ href, target, children }: PropsWithChildren<LinkProps>) {
  return (
    <NextLink href={href} passHref>
      <Anchor target={target}>{children}</Anchor>
    </NextLink>
  );
}
const Anchor = styled.a`
  display: inline;
  width: fit-content;
  text-decoration: none;

  background: linear-gradient(rgb(var(--ornament)), rgb(var(--ornament)));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% 0px;
  transition: 100ms;
  transition-property: background-size, text-decoration, color;
  color: rgb(var(--ornament));

  &:hover {
    background-size: 100% 100%;
    text-decoration: none;
    color: rgb(var(--background));
  }

  &:active {
    color: rgb(var(--background));
    background-size: 100% 100%;
  }
`;
