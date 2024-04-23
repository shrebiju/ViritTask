import React from 'react'
import Grid from '../designSystem/Grid'
import Row from '../designSystem/Row'
import Column from '../designSystem/Column'
import Paragraph from '../designSystem/Paragraph'
import Card from '../designSystem/Card'
import HoverableButton from '../designSystem/Button'
import IconImage from '../designSystem/Avatar'
import TenantImage from '../Assest/tenant.svg'
import BatImage from '../Assest/bat.svg'
import GoogleImage from '../Assest/google.svg'
import SavedImage from '../Assest/saved.svg'
import UnSavedImage from '../Assest/unsaved.svg'
import CompanyImage from '../Assest/companyLogo.svg'
import ArrowImage from '../Assest/arrow.svg'
import SlackImage from '../Assest/slack.svg'
import AppleImage from '../Assest/apple.svg'
import TwiterImage from '../Assest/twiter.svg'
import FacebookImage from '../Assest/facebook.svg'
import SkypeImage from '../Assest/skype.svg'
import LeftArrowImage from '../Assest/leftArrow.svg'
import RightArrowImage from '../Assest/rightArrow.svg'
import FirstComment from '../Assest/firstComment.svg'
import SecondComment from '../Assest/secondComment.svg'
import ThirdComment from '../Assest/thirdComment.svg'
import PersonImage from '../Assest/person.svg'




const PostJobs = () => {
    return (
        <div>
            <Grid container numOfItemInRow={1} rowGap={30}>
                <Grid item>
                    <Row justifyContent="center">
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={TenantImage} />
                                <HoverableButton>
                                    50 Jobs Available Now
                                </HoverableButton>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={UnSavedImage} />
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={BatImage} />
                                <Column>
                                    <HoverableButton>
                                        Apply Now
                                    </HoverableButton>
                                </Column>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={UnSavedImage} />
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={GoogleImage} />
                                <Column>
                                    <HoverableButton>
                                        Apply Now
                                    </HoverableButton>
                                </Column>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={SavedImage} />
                            </Row>
                        </Card>
                    </Row>
                </Grid>
            </Grid>
            <Grid container numOfItemInRow={1} rowGap={30}>
                <Grid item>
                    <Row justifyContent="center" padding="20px 0px">
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={BatImage} />
                                <HoverableButton>
                                    Apply Now
                                </HoverableButton>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={SavedImage} />
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={GoogleImage} />
                                <Column>
                                    <HoverableButton>
                                        Apply Now
                                    </HoverableButton>
                                </Column>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={UnSavedImage} />
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={TenantImage} />
                                <Column>
                                    <HoverableButton>
                                        Apply Now
                                    </HoverableButton>
                                </Column>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={UnSavedImage} />
                            </Row>
                        </Card>
                    </Row>
                </Grid>
            </Grid>
            <IconImage src={CompanyImage} />

            <Row columnGap={15} padding="20px 110px">
                <Column margin="10px 0px 0px auto">
                    <Card>
                        <Paragraph color="#01A3E0">
                            <Row padding="10px 10px">
                                See More <IconImage src={ArrowImage} />
                            </Row>
                        </Paragraph>
                    </Card>
                </Column>
            </Row>


            <Grid container numOfItemInRow={1} rowGap={30}>
                <Grid item>
                    <Row justifyContent="center" padding="20px 0px">
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={GoogleImage} />
                                <HoverableButton borderRadius="30px">
                                    50 Jobs Available
                                </HoverableButton>
                            </Row>
                            <Row padding="20px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Google
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Perth Austrlai
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Card borderRadius="30">
                                    <Row padding="10px 10px">
                                        Information Technology
                                    </Row>
                                </Card>
                                <Card borderRadius="30">
                                    <Row padding="10px 10px">
                                        Fintech
                                    </Row>
                                </Card>
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={SlackImage} />
                                <Column>
                                    <HoverableButton borderRadius="30px">
                                        220 Jobs Available
                                    </HoverableButton>
                                </Column>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={UnSavedImage} />
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={SkypeImage} />
                                <Column>
                                    <HoverableButton borderRadius="30px">
                                        500 Jobs Available
                                    </HoverableButton>
                                </Column>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={UnSavedImage} />
                            </Row>
                        </Card>
                    </Row>
                </Grid>
            </Grid>

            <Grid container numOfItemInRow={1} rowGap={30}>
                <Grid item>
                    <Row justifyContent="center" padding="20px 0px">
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={FacebookImage} />
                                <HoverableButton borderRadius="30px">
                                    350 Jobs Available
                                </HoverableButton>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={SavedImage} />
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={AppleImage} />
                                <Column>
                                    <HoverableButton borderRadius="30px">
                                        150 Jobs Available
                                    </HoverableButton>
                                </Column>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={UnSavedImage} />
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row justifyContent="space-between">
                                <IconImage src={TwiterImage} />
                                <Column>
                                    <HoverableButton borderRadius="30px">
                                        506 Jobs Available
                                    </HoverableButton>
                                </Column>
                            </Row>
                            <Row padding="10px 0px">
                                <Paragraph fontWeight={600} lineHeight={24} fontSize="18px">
                                    Deep Learning Engineer
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={20} fontSize="14px">
                                    Sydney Austrlai

                                    Expire in 25 Days
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    - Remote
                                    - Entry Level
                                    - Full Time
                                </Paragraph>
                            </Row>
                            <Row>
                                <Paragraph color="#6B6D6F" fontWeight={400} lineHeight={24} fontSize="16px">
                                    Salary:50k - 80k AUD (Yearly)
                                </Paragraph>
                            </Row>
                            <Row justifyContent="space-between">
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    Tesla Inc
                                </Paragraph>
                                <IconImage src={UnSavedImage} />
                            </Row>
                        </Card>
                    </Row>
                </Grid>
            </Grid>
            <Row columnGap={15} padding="20px 110px">
                <Column padding="5px 0px">
                    <Row>
                        <Paragraph fontSize="24px" fontWeight={600} lineHeight={32}>
                            What our Client Say about
                        </Paragraph>
                        <Paragraph color="#01A3E0" fontSize="24px" fontWeight={600} lineHeight={32}>Pacific Hunt </Paragraph>
                    </Row>
                </Column>
                <Column margin="10px 0px 0px auto">
                    <Row>
                        <Row padding="0px 10px">
                            <IconImage src={LeftArrowImage} />
                            <Paragraph color="#01A3E0" padding="10px 0px">2</Paragraph>  <Paragraph padding="10px 0px">/14</Paragraph> <IconImage src={RightArrowImage} />
                        </Row>

                    </Row>
                </Column>
            </Row>
            <Row>
                <IconImage src={FirstComment} />
                <IconImage src={FirstComment} />
                <IconImage src={ThirdComment} />
            </Row>
            <Grid container numOfItemInRow={1} rowGap={30}>
                <Grid item>
                    <Card width="80%" padding="20px 150px" backgroundColor="#04334D" borderRadius={20}>
                        <Row justifyContent="space-between">
                            <Column>
                                <Row>
                                    <Paragraph
                                        color="White"
                                        padding="80px 0px 0px 0px"
                                        fontSize="18px"
                                        fontWeight={500}
                                        lineHeight={26}
                                    >
                                        Join
                                    </Paragraph>
                                    <Paragraph

                                        color="#01A3E0"
                                        padding="80px 0px 0px 0px"
                                        fontSize="18px"
                                        fontWeight={500}
                                        lineHeight={26}
                                    >
                                        Pacific Hunt
                                    </Paragraph>
                                    <Paragraph

                                        color="White"
                                        padding="80px 0px 0px 0px"
                                        fontSize="18px"
                                        fontWeight={500}
                                        lineHeight={26}
                                    >
                                        today. Connect, Grow, Succeed.
                                    </Paragraph>
                                </Row>
                                <Row>
                                <Paragraph

                                    padding="10px 0px 0px 0px"
                                    color="White"
                                    fontSize="18px"
                                    fontWeight={500}
                                    lineHeight={26}
                                >
                                    Whether you're seeking your next career move or searching for top talent, our platform offers the perfect avenue to connect and thrive.
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
                                    <IconImage src={PersonImage} />
                                </Paragraph>
                            </Column>
                        </Row>
                    
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default PostJobs
