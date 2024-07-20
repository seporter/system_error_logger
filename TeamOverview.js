import React from 'react';
import styled from 'styled-components';

const OverviewContainer = styled.div\`
  padding: 2rem;
  background: \${(props) => props.theme.colors.secondary};
  color: white;
  border-radius: 8px;
\`;

const TeamOverview = () => (
  <OverviewContainer>
    <h2>Team Overview</h2>
    <p>
      Our team at StubHub is dedicated to providing the best customer service and
      innovative solutions. We handle all aspects of the client purchase process,
      ensuring accuracy and quality in every transaction.
    </p>
  </OverviewContainer>
);

export default TeamOverview;