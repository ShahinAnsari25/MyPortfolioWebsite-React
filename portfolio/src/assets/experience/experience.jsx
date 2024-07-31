import "./experience.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
const steps = [
  {
    label:
      "Developed front-end interfaces for three projects, utilizing JavaScript, React, Redux Toolkit, HTML, CSS, and Bootstrap to ensure intuitive user experiences, modern design aesthetics, and responsiveness across various devices and screen sizes.",
    description: `For each ad campaign that you create, you can control how much
               you're willing to spend on clicks and conversions, which networks
               and geographical locations you want your ads to show on, and more.`,
  },
  {
    label:
      "Integrated backend APIs into the front-end applications, enabling efficient data retrieval and manipulation, and ensuring smooth communication between the front-end and back-end systems.",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label:
      "Used Postman to test APIs, ensuring functionality, reliability, and performance of the endpoints.",
  },
  {
    label:
      " Implemented Docker to containerize projects, streamlining the deployment process and enhancing development efficiency.",
    description: `Try out different ad text to see what brings in the most customers,
               and learn how to enhance your ads using features like ad extensions.
               If you run into any problems with your ads, find out how to tell if
               they're running and how to resolve approval issues.`,
  },
];
const Experience = () => {
  const [activeStep, setActiveStep] = React.useState(4);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="outerConatinerExperience">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        style={{
          color: "#edf402",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Experience
      </motion.h1>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: "1",
          ease: "easeInOut",
        }}
        className="experienceOuterContainer"
      >
        <h5 className="companyName" style={{ color: "#059CE5" }}>
          9Envoy Technologies
        </h5>
        <h6 className="role" style={{ color: "white" }}>
          Software Developer
        </h6>
        <p style={{ color: "white" }}>January 2024 - July 2024</p>
        <Box style={{ width: "100%" }} className="progressBarContainer">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                //   optional={
                //     index === 2 ? (
                //       <Typography variant="caption">Last step</Typography>
                //     ) : null
                //   }
                >
                  <span style={{ color: "white", fontSize: "17px" }}>
                    {step.label}
                  </span>
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
        <div className="technologiesUsed">
          <p>Technologies Used</p>
          <div className="technologiesContainer">
            <img src="/html2.png" alt="" />
            <img src="/css.png" alt="" />
            <img src="/javascriptIcon.png" alt="" />
            <img src="/reactIcon.png" alt="" />
            <img src="/bootstap.png" alt="" />
            <img src="/dockerIcon.png" alt="" />
            <img src="/gitIcon.png" alt="" />
            <img src="/reduxIcon.png" alt="" />
            <img src="postmanApiIcon.png" alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Experience;
