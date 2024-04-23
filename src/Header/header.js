
import Card from "../designSystem/Card";
import Row from "../designSystem/Row";
import Grid from "../designSystem/Grid";
import Paragraph from "../designSystem/Paragraph";
import Container from "../designSystem/Container";
import Column from "../designSystem/Column";
import { Popover, Typography } from "antd";
import React, { useState } from "react";
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
import Job from "../Jobs";
import PostJobs from "../Post";
// import {
//   NotificationIcon,
//   ProfileIcon,
//   DiamondIcon,
// } from "@/assets/HeaderIcon";
//import Popover from "@/components/Popover";
// import { setDefaultEnvApi } from '@/utils/apiChangeHandler';

const Avatar = styled.img`
  width: 44px;
  height: 55px;
  border-radius: 22px;
  border: 2px solid;
  @media screen and (max-width: 952px) {
    width: 30px;
    height: 35px;
    margin-top: 6px;
  }
`;

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

const TextName = styled.div`
  margin-left: 5%;
  margin-top: 15px;
`;
const RightHeader = styled.div``;


const Header = ({ user, item }) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const firstName = localUser && localUser.firstName;
  const lastName = localUser && localUser.lastName;


  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleVisibleChange = () => {
    setVisible(!visible);
  };

  const handleNotificationChange = () => {
    setNotification(!notification);
  };

  return (
    <>
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
              <RightHeader style={{ marginLeft: "end" }}>

              </RightHeader>
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
      <Grid container numOfItemInRow={1} rowGap={30}>
        <Grid item>
          <Card width="80%" padding="20px 150px" backgroundColor="white" borderRadius={20}>
            <Row justifyContent="space-between">
              <Column>
                <Row>
                  <Paragraph
                    color="black"
                    padding="80px 0px 0px 0px"
                    fontSize="18px"
                    fontWeight={500}
                    lineHeight={26}
                  >
                    <IconImage src={ChecboxImage} />
                    Your Trusted Career Partner
                  </Paragraph>

                </Row>
                <Row>
                  <Paragraph
                    color="black"
                    padding="0px 0px 0px 0px"
                    fontSize="40px"
                    fontWeight={800}
                    lineHeight={60}
                  >
                    
                    Unlock Your Dream 
                    <Paragraph
                    color="#01A3E0"
                    padding="0px 0px 0px 0px"
                    fontSize="40px"
                    fontWeight={800}
                    lineHeight={60}
                  >
                    Career
                    </Paragraph>
                  </Paragraph>

                </Row>
                <Row>
                  <Paragraph
                    color="black"
                    padding="0px 0px 0px 0px"
                    fontSize="18px"
                    fontWeight={500}
                    lineHeight={26}
                  >
                    
                    Our platform is dedicated to empowering individuals, connecting talent with the right opportunities, and fostering professional growth.
               
                  </Paragraph>

                </Row>
             
                <Row padding="10px 0px">
                  <HoverableButton>Join As JobSeeker</HoverableButton>
                  <HoverableButton>Join As Employer</HoverableButton>
                </Row>
              </Column>

              <Column>
                <Paragraph
                  color="--headingColor"
                  fontWeight={500}
                  lineHeight={24}
                >
                  <IconImage src={WomenImage} />
                </Paragraph>
              </Column>
            </Row>

          </Card>
        </Grid>
      </Grid>
      {/* <IconImage src={BannerImage} padding="10px 10px" /> */}
      <SecondIndex />
      <PostJobs />
    </>
  );
};

export default Header;
