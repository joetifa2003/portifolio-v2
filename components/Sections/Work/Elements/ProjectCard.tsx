import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "components/UI/Button";
import Col from "components/UI/Layout/Col";
import Grid from "components/UI/Layout/Grid";
import Text from "components/UI/Text";
import { mq } from "utils/Responsive";

const Card = styled.div``;

const CardBody = styled(Col)`
    padding: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;

    ${mq.xl} {
        padding: 3rem;
    }
`;

function ProjectCard({
    title,
    descreption,
    technologies,
}: {
    title: string;
    descreption: string;
    technologies: string[];
}) {
    return (
        <Card>
            <Grid columns={{ xs: "1fr", lg: "1fr 1fr" }} gap="0">
                <Col>
                    <img
                        src="/work/images/project1.png"
                        alt=""
                        width="100%"
                        height="100%"
                        css={css`
                            object-fit: cover;
                        `}
                    />
                </Col>
                <CardBody bgColor="lightGray">
                    <Text
                        fontWeight="bold"
                        fontSize={{ xs: "2rem", xl: "4rem" }}
                        lineHeight={{ xs: "2rem", xl: "4rem" }}
                    >
                        <span
                            css={(theme) => css`
                                color: ${theme.color.darkCyan};
                            `}
                        >
                            {"<"}
                        </span>
                        {title}
                        <span
                            css={(theme) => css`
                                color: ${theme.color.darkCyan};
                            `}
                        >
                            {">"}
                        </span>
                    </Text>
                    <Text
                        as="p"
                        fontWeight="bold"
                        fontSize={{ xs: "1rem", xl: "1.5rem" }}
                        lineHeight={{ xs: "1.5rem", xl: "2rem" }}
                        marginTop="2rem"
                    >
                        {descreption}
                    </Text>
                    <Text
                        fontWeight="bold"
                        marginTop="2rem"
                        fontSize={{ xs: "1rem" }}
                        lineHeight={{ xs: "1.5rem" }}
                    >
                        Technologies I used
                    </Text>
                    <div>
                        {technologies.map((item) => (
                            <Text
                                fontWeight="bold"
                                fontSize={{ xs: "1rem" }}
                                lineHeight={{ xs: "1.5rem" }}
                            >
                                - {item}
                            </Text>
                        ))}
                    </div>
                    <div
                        css={css`
                            margin-top: auto;
                            padding-top: 2rem;
                        `}
                    >
                        <Button>Go to website</Button>
                    </div>
                </CardBody>
            </Grid>
        </Card>
    );
}

export default ProjectCard;
