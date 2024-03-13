import styled from 'styled-components';
import { PropsWithChildren } from 'react';

export interface PageProps {
  title: string;
  description?: string;
}

export default function InformationSection({ title, description, children }: PropsWithChildren<PageProps>) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>
        <span>Email:</span> support@myawesomesaas.com
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
