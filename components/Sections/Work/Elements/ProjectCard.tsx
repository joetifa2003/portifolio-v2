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
    imageUrl,
    link,
}: {
    title: string;
    descreption: string;
    technologies: string[];
    imageUrl: string;
    link: string;
}) {
    return (
        <Card>
            <Grid columns={{ xs: "1fr", lg: "1fr 1fr" }} gap="0">
                <Col>
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt=""
                            width="100%"
                            height="100%"
                            css={css`
                                object-fit: cover;
                            `}
                        />
                    ) : (
                        <div
                            css={css`
                                width: 100%;
                                height: 100%;
                                background-color: #a1a1a1;
                            `}
                        ></div>
                    )}
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
                        fontSize={{ xs: "1rem", xl: "1.5rem" }}
                        lineHeight={{ xs: "1.5rem", xl: "2rem" }}
                        marginTop="2rem"
                    >
                        {descreption}
                    </Text>
                    <Text
                        marginTop="2rem"
                        fontSize={{ xs: "1rem" }}
                        lineHeight={{ xs: "1.5rem" }}
                    >
                        Technologies I used
                    </Text>
                    <div>
                        {technologies.map((item) => (
                            <Text
                                key={item}
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
                        <Button
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link}
                        >
                            Go to website
                        </Button>
                    </div>
                </CardBody>
            </Grid>
        </Card>
    );
}

export default ProjectCard;
