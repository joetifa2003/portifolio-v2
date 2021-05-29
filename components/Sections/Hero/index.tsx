import { css } from "@emotion/react";
import Col from "components/UI/Layout/Col";
import Container from "components/UI/Layout/Container";
import Grid from "components/UI/Layout/Grid";
import Section from "components/UI/Layout/Section";
import Text from "components/UI/Text";
import SideDiv from "./Elements/SideDiv";

function Hero() {
    return (
        <Section
            fullScreen
            position="relative"
            bgColor="gray"
            justifyContent="center"
        >
            <SideDiv />
            <img
                src="/hero/images/blob2.svg"
                css={css`
                    position: absolute;
                    bottom: 0;
                    right: 0;
                `}
            />
            <Container paddingTop="80px">
                <Grid
                    columns={{
                        xs: "1fr",
                        lg: "8fr 4fr",
                    }}
                    alignItems="center"
                >
                    <Col order={{ xs: 2, lg: 1 }}>
                        <Text
                            fontFamily="mono"
                            fontWeight="bold"
                            color="darkCyan"
                            fontSize={{ xs: "1.5rem", md: "2rem", xl: "3rem" }}
                            lineHeight={{
                                xs: "1.5rem",
                                md: "2rem",
                                xl: "3rem",
                            }}
                            letterSpaceing={{ xs: "0.2em" }}
                        >
                            Hi, my name is
                        </Text>
                        <Text
                            fontWeight="bold"
                            fontSize={{ xs: "2.5rem", md: "3rem", xl: "6rem" }}
                            lineHeight={{
                                xs: "2.5rem",
                                md: "3rem",
                                xl: "6rem",
                            }}
                            marginTop="1rem"
                        >
                            Youssef Ahmed
                        </Text>
                        <Text
                            fontWeight="bold"
                            fontSize={{
                                xs: "2.5rem",
                                md: "3rem",
                                xl: "4.5rem",
                            }}
                            lineHeight={{
                                xs: "2.5rem",
                                md: "3rem",
                                xl: "4.5rem",
                            }}
                            marginTop="1rem"
                        >
                            I build things for the web.
                        </Text>
                        <Text
                            fontWeight="bold"
                            fontSize={{ xs: "1.5rem", xl: "2rem" }}
                            lineHeight={{ xs: "2rem", xl: "2.5rem" }}
                            marginTop="1rem"
                        >
                            I’m a full stack web devolper from Egypt that loves
                            javascript.
                        </Text>
                    </Col>
                    <Col order={{ xs: 1, lg: 2 }}>
                        <img
                            src="/hero/images/hero.svg"
                            alt=""
                            width="100%"
                            height="100%"
                        />
                    </Col>
                </Grid>
            </Container>
        </Section>
    );
}

export default Hero;
