import React from 'react';
import styled from 'styled-components';
import useSiteMetadata from '../hooks/use-site-config';
import useSiteImages from '../hooks/use-site-images';

import firebase from "gatsby-plugin-firebase";
// import { useObjectVal } from "react-firebase-hooks/database"

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 50px;
  color: var(--color-white);
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const HeroSubTitle = styled.h2`
  margin: 10px 50px;
  color: var(--color-white);
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = props.heroImg || fluid.src

  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    firebase
      .database()
      .ref('/data')
      .once('value')
      .then(snapshot => {
        setUser(snapshot.val())
      })
  }, [])

  return (
    <HeroContainer style={{ backgroundImage: `url("${heroImg}")`, width: '100%' }}>
      <TitleContainer>
      <HeroTitle>{props.title}</HeroTitle>
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
        {user && <HeroSubTitle>{user.name}</HeroSubTitle>}
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero