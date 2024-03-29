import axios from "axios";
import { Button } from "components/UI/Button";
import Header from "components/UI/Header";
import {
    ErrorMessage,
    Field as FormikField,
    Form,
    Formik,
    FormikHelpers,
} from "formik";
import { useCallback, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import LazyLoad from "react-lazyload";
import { Timeline } from "react-twitter-widgets";
import Swal from "sweetalert2";
import * as yup from "yup";

const Field = ({
    name,
    component = "input",
    placeholder,
    label = placeholder,
    type = "text",
}: {
    name: string;
    component?: string;
    placeholder: string;
    label?: string;
    type?: string;
}) => (
    <div className="space-y-4">
        <label htmlFor={name} className="text-2xl">
            <span className="text-cyan">#</span> {label}
        </label>
        <FormikField
            name={name}
            component={component}
            placeholder={placeholder}
            className="w-full px-8 py-6 outline-none bg-lightGray"
            type={type}
        />
        <ErrorMessage name={name} component="div" />
    </div>
);

const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    message: yup.string().required("Message is required"),
    "g-recaptcha-response": yup.string(),
});

const Contact = () => {
    const [gResponse, setGResponse] = useState("");

    const handleSubmit = useCallback(
        async (values, action: FormikHelpers<any>) => {
            try {
                await axios.post("https://usebasin.com/f/ff58579495b0", {
                    ...values,
                    "g-recaptcha-response": gResponse,
                });

                await Swal.fire(
                    "Your message has been sent",
                    "I will contact you ASAP",
                    "success"
                );

                action.setSubmitting(false);
                action.resetForm();
            } catch (error) {
                await Swal.fire("Error", "Please try again later", "error");
            }
        },
        [gResponse]
    );

    return (
        <section className="container">
            <Header>Contact me</Header>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="flex flex-col">
                    <Formik
                        initialValues={{ name: "", email: "", message: "" }}
                        onSubmit={handleSubmit}
                        validationSchema={contactSchema}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-8">
                                <div className="grid gap-8 md:grid-cols-2">
                                    <Field name="name" placeholder="Name" />
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <Field
                                    name="message"
                                    placeholder="Your message"
                                    component="textarea"
                                />
                                <LazyLoad>
                                    <ReCAPTCHA
                                        sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"
                                        onChange={(value) =>
                                            setGResponse(value || "")
                                        }
                                    />
                                </LazyLoad>
                                <Button
                                    type="submit"
                                    className="w-full lg:w-auto"
                                    disabled={isSubmitting}
                                >
                                    Send message
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="flex flex-col justify-center lg:justify-end">
                    <Timeline
                        dataSource={{
                            sourceType: "profile",
                            screenName: "joetifa_dev",
                        }}
                        options={{
                            theme: "dark",
                            height: 600,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
