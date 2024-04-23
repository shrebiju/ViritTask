import React from 'react'
import Card from "../designSystem/Card";
import Row from "../designSystem/Row";
import Grid from "../designSystem/Grid";
import Paragraph from "../designSystem/Paragraph";
import Container from "../designSystem/Container";
import Column from "../designSystem/Column";
import { Popover, Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import HoverableButton from "../designSystem/Button";
import IconImage from '../designSystem/Avatar'
import BannerImage from '../Assest/bannerimage.svg'
import MainLogo from '../Assest/acficLogo.svg'
import SecondIndex from "../Body";
import WomenImage from '../Assest/women.svg'
import ChecboxImage from '../Assest/checkbox.svg'
import PostJobs from "../Post";


const UnlockPremium = styled.span`
  height: 21px;
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;
  color: #576874;
  display: inline-block;
  @media screen and (max-width: 952px) {
    font-size: 12px;
  }
`;

const Job = () => {
  return (
    <div>
      <Container>
        <Row columnGap={15} padding="20px 30px">
          <Column>

            {/* <Avatar /> */}
          </Column>
          <Column padding="5px 0px">
            <Paragraph
              fontSize="--fontSm"
              color="--headingColor"
              fontWeight={600}
              lineHeight={24}
            >
            </Paragraph>
            <Paragraph fontSize="--fontXxs" fontWeight={500} lineHeight={18}>
              <IconImage src={MainLogo} padding="10px 10px" />
            </Paragraph>
          </Column>
          <Column margin="10px 0px 0px auto">
            <Row>
              
              <Column rowGap="10px" >
                <Link to="/">
                  <UnlockPremium>Home</UnlockPremium>
                </Link>
              </Column>
              <Link to="/Jobs">
                <UnlockPremium>Jobs</UnlockPremium>
              </Link>
              <Link to="/">
                <UnlockPremium>Companies</UnlockPremium>
              </Link>
              <Link to="/">
                <UnlockPremium>About Us</UnlockPremium>
              </Link>
              <HoverableButton>Sign Up</HoverableButton>
              <HoverableButton>Post a Job</HoverableButton>
            </Row>
          </Column>
        </Row>
      </Container>
   <Row>
    <Paragraph padding="10px 80px"
     fontSize="22px" fontWeight={600} lineHeight={28}>
    Find your dream 
    job
    </Paragraph>

   
   </Row>
   <PostJobs/>

    </div>
  )
}

export default Job
