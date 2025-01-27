import React from "react";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo
            nome="Joel Bleichuvehl"
            image="https://avatars.githubusercontent.com/u/12449008?v=4"
            percentual={65}
          />
          <UserInfo
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/45184516?v="
            percentual={25}
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
