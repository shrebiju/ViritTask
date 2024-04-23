import React from 'react'
import Row from '../designSystem/Row'
import Paragraph from '../designSystem/Paragraph'
import Column from '../designSystem/Column'
import HoverableButton from '../designSystem/Button'
import Card from '../designSystem/Card'
import Grid from '../designSystem/Grid'
import IconImage from '../designSystem/Avatar'
import PinImage from '../Assest/ping.svg'
import SliderImage from '../Assest/slider.svg'
import PanImage from '../Assest/panCake.svg'
import MedicalImage from '../Assest/medical.svg'
import BarImage from '../Assest/bar.svg'
import MegaImage from '../Assest/mega.svg'
import ArrowImage from '../Assest/arrow.svg'



const SecondIndex = () => {
    return (
        <div>
            <Row columnGap={15} padding="20px 110px">
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
                        Popular Catgories
                    </Paragraph>
                </Column>
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
                    <Row justifyContent="center">
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row>
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    <IconImage src={PinImage} padding="10px 10px" />
                                </Paragraph>
                                <Column>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="--textColor"
                                        fontSize="18px"
                                        fontWeight={500}
                                        lineHeight={24}
                                    >
                                        Graphics and Design
                                    </Paragraph>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="#6B6D6F"
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight={20}
                                    >
                                        418 Open Position
                                    </Paragraph>
                                </Column>
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row>
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    <IconImage src={SliderImage} padding="10px 10px" />
                                </Paragraph>
                                <Column>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="--textColor"
                                        fontSize="18px"
                                        fontWeight={500}
                                        lineHeight={24}
                                    >
                                        Coding and Programming
                                    </Paragraph>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="#6B6D6F"
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight={20}
                                    >
                                        214 Open Position
                                    </Paragraph>
                                </Column>
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row>
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    <IconImage src={PanImage} padding="10px 10px" />
                                </Paragraph>
                                <Column>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="#01A3E0"
                                        fontSize="18px"
                                        fontWeight={500}
                                        lineHeight={24}
                                    >
                                        Data Science
                                    </Paragraph>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="#6B6D6F"
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight={20}
                                    >
                                        314 Open Position
                                    </Paragraph>
                                </Column>
                            </Row>
                        </Card>
                    </Row>
                </Grid>
            </Grid>
            <Grid container numOfItemInRow={1} rowGap={30} padding="40px 10px">
                <Grid item>
                    <Row justifyContent="center">
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row>
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    <IconImage src={MedicalImage} padding="10px 10px" />
                                </Paragraph>
                                <Column>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="--textColor"
                                        fontSize="18px"
                                        fontWeight={500}
                                        lineHeight={24}
                                    >
                                        Health Care
                                    </Paragraph>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="#6B6D6F"
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight={20}
                                    >
                                        514 Open Position
                                    </Paragraph>
                                </Column>
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row>
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    <IconImage src={MegaImage} padding="10px 10px" />
                                </Paragraph>
                                <Column>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="--textColor"
                                        fontSize="18px"
                                        fontWeight={500}
                                        lineHeight={24}
                                    >
                                        Digital Marketing
                                    </Paragraph>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="#6B6D6F"
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight={20}
                                    >
                                        24 Open Position
                                    </Paragraph>
                                </Column>
                            </Row>
                        </Card>
                        <Card padding="20px 30px" borderRadius={20} width="350px">
                            <Row>
                                <Paragraph
                                    fontSize="--fontSm"
                                    color="--headingColor"
                                    fontWeight={500}
                                    lineHeight={24}
                                >
                                    <IconImage src={BarImage} padding="10px 10px" />
                                </Paragraph>
                                <Column>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="--textColor"
                                        fontSize="18px"
                                        fontWeight={500}
                                        lineHeight={24}
                                    >
                                        Account and Finance
                                    </Paragraph>
                                    <Paragraph
                                        font="Be Vietnam Pro"
                                        color="#6B6D6F"
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight={20}
                                    >
                                        214 Open Position
                                    </Paragraph>
                                </Column>
                            </Row>
                        </Card>
                    </Row>
                </Grid>
            </Grid>
            <Row columnGap={15} padding="20px 110px">
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
                        Popular Catgories
                    </Paragraph>
                </Column>
                <Column margin="10px 0px 0px auto">
                    <Row>
                    <Card>
                        <Paragraph color="#01A3E0">
                            <Row padding="10px 10px">
                                See More <IconImage src={ArrowImage} />
                            </Row>
                        </Paragraph>
                    </Card>
                    </Row>
                </Column>
            </Row>
        </div>
    )
}

export default SecondIndex
