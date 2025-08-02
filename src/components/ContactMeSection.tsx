import useSubmit from "@/hooks/useSubmit";
import type { ContactFormDataType } from "@/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Button,
  Heading,
  VStack,
  Fieldset,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "@chakra-ui/react/field";
import { NativeSelect } from "@chakra-ui/react/native-select";
import { useAlertContext } from "@/context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik<ContactFormDataType>({
    initialValues: {
      firstName: "",
      email: "",
      typeOfInquiry: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await submit("", values);
      resetForm();
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      typeOfInquiry: Yup.string().required("Please select an enquiry type"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
  });

  // Handle response from submit hook
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response, onOpen]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={{ base: 8, md: 16 }}
      id="contact-me"
    >
      <VStack
        gap={8}
        alignItems="flex-start"
        w={{ base: "300px", md: "600px" }}
      >
        <Heading as="h1" size={{ base: "2xl", md: "3xl" }} color="white">
          Contact me
        </Heading>

        <Box p={{ base: 4, md: 6 }} rounded="md" w="full" mx="auto">
          <form onSubmit={formik.handleSubmit} noValidate>
            <Fieldset.Root size={{ base: "md", md: "lg" }} w="full">
              <Fieldset.Content>
                <VStack gap={{ base: 4, md: 6 }} w="full">
                  <Field.Root
                    invalid={
                      !!(formik.touched.firstName && formik.errors.firstName)
                    }
                    w="full"
                  >
                    <Field.Label htmlFor="firstName">Name</Field.Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your name"
                      size={{ base: "md", md: "lg" }}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <Field.ErrorText>
                        {formik.errors.firstName}
                      </Field.ErrorText>
                    )}
                  </Field.Root>

                  <Field.Root
                    invalid={!!(formik.touched.email && formik.errors.email)}
                    w="full"
                  >
                    <Field.Label htmlFor="email">Email Address</Field.Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your email"
                      size={{ base: "md", md: "lg" }}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <Field.ErrorText>{formik.errors.email}</Field.ErrorText>
                    )}
                  </Field.Root>

                  <Field.Root
                    invalid={
                      !!(
                        formik.touched.typeOfInquiry &&
                        formik.errors.typeOfInquiry
                      )
                    }
                    w="full"
                  >
                    <Field.Label htmlFor="typeOfInquiry">
                      Type of enquiry
                    </Field.Label>
                    <NativeSelect.Root size={{ base: "md", md: "lg" }}>
                      <NativeSelect.Field
                        id="typeOfInquiry"
                        name="typeOfInquiry"
                        value={formik.values.typeOfInquiry}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="hireMe">
                          Freelance project proposal
                        </option>
                        <option value="openSource">
                          Open source consultancy session
                        </option>
                        <option value="other">Other</option>
                      </NativeSelect.Field>
                      <NativeSelect.Indicator />
                    </NativeSelect.Root>
                    {formik.touched.typeOfInquiry &&
                      formik.errors.typeOfInquiry && (
                        <Field.ErrorText>
                          {formik.errors.typeOfInquiry}
                        </Field.ErrorText>
                      )}
                  </Field.Root>

                  <Field.Root
                    invalid={
                      !!(formik.touched.message && formik.errors.message)
                    }
                    w="full"
                  >
                    <Field.Label htmlFor="message">Your message</Field.Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter your message"
                      height={{ base: 200, md: 250 }}
                      resize="vertical"
                      size={{ base: "md", md: "lg" }}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <Field.ErrorText>{formik.errors.message}</Field.ErrorText>
                    )}
                  </Field.Root>

                  <Button
                    type="submit"
                    colorScheme="purple"
                    width="full"
                    loading={isLoading}
                    loadingText="Submitting..."
                    disabled={!formik.isValid || formik.isSubmitting}
                    size={{ base: "lg", md: "xl" }}
                    mt={{ base: 2, md: 4 }}
                  >
                    Submit
                  </Button>
                </VStack>
              </Fieldset.Content>
            </Fieldset.Root>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
