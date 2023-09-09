import React, { useState } from "react";
import axios from "axios";
import formImg from "../../assets/formImg.png";
import { Input, Select } from "@chakra-ui/react";
// import styled from "@emotion/styled";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useToast, Spinner, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const gender = [
  { value: 0, label: "Female" },
  { value: 1, label: "Male" },
];

const family_history = [
  { value: 0, label: "No" },
  { value: 1, label: "Yes" },
];

const additional_benefits = [
  { value: 0, label: "No" },
  { value: 2, label: "Yes" },
  { value: 1, label: "Dont know" },
];

const care_options = [
  { value: 0, label: "No" },
  { value: 2, label: "Yes" },
  { value: 1, label: "Probably" },
];

const leaves = [
  { value: 0, label: "Very Difficult" },
  { value: 1, label: "Not so difficult" },
  { value: 2, label: "Normal" },
  { value: 3, label: "Easy" },
  { value: 4, label: "Very Easy" },
];

const work_interfere = [
  { value: 0, label: "No" },
  { value: 1, label: "Yes" },
];

function Main() {
  const toast = useToast();
  const navigate = useNavigate();
  const [firstInputDisplay, setFirstInputDisplay] = useState("flex");
  const [secondInputDisplay, setSecondInputDisplay] = useState("none");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    family_history: "",
    benefits: "",
    care_options: "",
    anonymity: "",
    leave: "",
    work_interfere: "",
  });

  const next = (e) => {
    e.preventDefault();
    setFirstInputDisplay("none");
    setSecondInputDisplay("flex");
  };
  const previous = (e) => {
    e.preventDefault();
    setFirstInputDisplay("flex");
    setSecondInputDisplay("none");
  };
  const gotocards = () => {
    navigate("/recommendation");
  };

  const [predictionResult, setPredictionResult] = useState(null); // To store the prediction result

  const handleInputChange = (field, value) => {
    console.log("Setting", field, "to", value);
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    console.log(formData);
    if(!formData.age || !formData.gender || !formData.work_interfere || !formData.leave || !formData.family_history || !formData.benefits || !formData.care_options || !formData.anonymity){
      toast({
        title: "Please fill all the data",
        status: "error",
        duration: 3000, 
        isClosable: true,
      });
      return;
    }
    event.preventDefault();
    setIsLoading(true);
    const formattedString = [
      [
        formData.age / 10,
        formData.gender,
        formData.family_history,
        formData.benefits,
        formData.care_options,
        formData.anonymity,
        formData.leave,
        formData.work_interfere,
      ],
    ];
    const payload = {
      features: formattedString,
    };
    try {
      console.log("payload", payload);
      // Make the POST request to your Flask API
      const response = await axios.post(
        process.env.REACT_APP_PREDICTION_MODEL_URL,
        payload
      );
      console.log("Prediction:", response.data.prediction);

      const prediction = response.data.prediction;

      setPredictionResult(prediction);
      setIsLoading(false);
      setFormData({
        age: "",
        gender: "",
        family_history: "",
        benefits: "",
        care_options: "",
        anonymity: "",
        leave: "",
        work_interfere: "",
      });
      if (prediction == 1) {
        toast({
          title: "Potential Mental Health Issue Detected: You might need further assistance",
          status: "error",
          duration: 5000, // Time in milliseconds (5 seconds)
          isClosable: true,
        });
      } else {
        toast({
          title: "You are safe",
          status: "success",
          duration: 5000, // Time in milliseconds (5 seconds)
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className="mhf-main"
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      <div
        className="mhf-inner-content"
        style={{ width: "1300px", margin: "0 auto", padding: "60px 0" }}
      >
        <div className="mhf-title">
          <h1
            style={{ textAlign: "center", fontSize: "30px", fontWeight: "500" }}
          >
            Assess, Understand, and Nurture Your Mental Well-Being with Our
            Evaluation Form
          </h1>
          <p
            style={{ textAlign: "center", marginTop: "10px", fontSize: "20px" }}
          >
            Your Journey to Mental Wellness Begins Here
          </p>
        </div>

        <div
          className="form-section"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <div className="form-img">
            <img
              src={formImg}
              alt="form-img"
              style={{ width: "280px", height: "90%" }}
            />
          </div>

          <div
            className="form"
            style={{
              width: "900px",
              height: "600px",
              backgroundColor: "rgba(255,255,255,0.5)",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 20px 6px",
            }}
          >
            <form style={{ width: "100%", padding: "20px 80px" }}>
              <div
                className="mhff-title"
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Evaluate your Mental Health with us -{" "}
              </div>

              <hr
                style={{
                  borderColor: "rgb(229 70 70)",
                  margin: "30px 0",
                  width: "100%",
                }}
              />

              <div
                className="f-first-layer"
                style={{
                  display: `${firstInputDisplay}`,
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: ".1s linear",
                }}
              >
                <div
                  className="age"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <label
                    style={{
                      marginRight: "20px",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Age
                  </label>
                  <Input
                    placeholder="Enter your Age"
                    borderColor="rgb(229 70 70)"
                    color="#000"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                  />
                </div>

                <div
                  className="gender"
                  style={{
                    marginLeft: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      margin: "0 20px",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                    htmlFor="age"
                  >
                    Gender
                  </label>
                  <Select
                    borderColor="rgb(229 70 70)"
                    value={formData.priority}
                    onChange={(e) =>
                      handleInputChange("gender", e.target.value)
                    }
                  >
                    <option value="">Select your Gender</option>
                    {gender.map((theme) => (
                      <option key={theme.value} value={theme.value}>
                        {theme.label}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div
                className="f-fifth-layer"
                style={{
                  display: `${secondInputDisplay}`,
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: ".1s linear",
                }}
              >
                <label style={{ fontWeight: "600", fontSize: "20px" }}>
                  Anonymity
                </label>
                <Select
                  borderColor="rgb(229 70 70)"
                  width={260}
                  value={formData.anonymity}
                  onChange={(e) =>
                    handleInputChange("anonymity", e.target.value)
                  }
                >
                  <option value="">Anonymity</option>
                  {additional_benefits.map((theme) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </Select>
              </div>

              <hr
                style={{
                  borderColor: "rgb(229 70 70)",
                  margin: "30px 0",
                  width: "100%",
                }}
              />

              <div
                className="f-second-layer"
                style={{
                  display: `${firstInputDisplay}`,
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: ".1s linear",
                }}
              >
                <label style={{ fontWeight: "600", fontSize: "20px" }}>
                  Do you have a record of Family history?
                </label>

                <Select
                  borderColor="rgb(229 70 70)"
                  value={formData.priority}
                  width={260}
                  onChange={(e) =>
                    handleInputChange("family_history", e.target.value)
                  }
                >
                  <option value="">Select Family History</option>
                  {family_history.map((theme) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </Select>
              </div>

              <div
                className="f-sixth-layer"
                style={{
                  display: `${secondInputDisplay}`,
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: ".1s linear",
                }}
              >
                <label style={{ fontWeight: "600", fontSize: "20px" }}>
                  Leave
                </label>
                <Select
                  borderColor="rgb(229 70 70)"
                  width={260}
                  value={formData.leave}
                  onChange={(e) => handleInputChange("leave", e.target.value)}
                >
                  <option value="">Ease of taking leaves</option>
                  {leaves.map((theme) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </Select>
              </div>

              <hr
                style={{
                  borderColor: "rgb(229 70 70)",
                  margin: "30px 0",
                  width: "100%",
                }}
              />

              <div
                className="f-third-layer"
                style={{
                  display: `${firstInputDisplay}`,
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: ".1s linear",
                }}
              >
                <label style={{ fontWeight: "600", fontSize: "20px" }}>
                  Do you have some additional benefits?
                </label>

                <Select
                  borderColor="rgb(229 70 70)"
                  width={260}
                  value={formData.benefits}
                  onChange={(e) =>
                    handleInputChange("benefits", e.target.value)
                  }
                >
                  <option value="">Having additional benefits?</option>
                  {additional_benefits.map((theme) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </Select>
              </div>

              <div
                className="f-seventh-layer"
                style={{
                  display: `${secondInputDisplay}`,
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: ".1s linear",
                }}
              >
                <label style={{ fontWeight: "600", fontSize: "20px" }}>
                  Does someone else have greater interference in your work?
                </label>
                <Select
                  borderColor="rgb(229 70 70)"
                  width={260}
                  value={formData.work_interfere}
                  onChange={(e) =>
                    handleInputChange("work_interfere", e.target.value)
                  }
                >
                  <option value="">Having work interference?</option>
                  {work_interfere.map((theme) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </Select>
              </div>

              <hr
                style={{
                  borderColor: "rgb(229 70 70)",
                  margin: "30px 0",
                  width: "100%",
                }}
              />

              <div
                className="f-fourth-layer"
                style={{
                  display: `${firstInputDisplay}`,
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: ".1s linear",
                }}
              >
                <label style={{ fontWeight: "600", fontSize: "20px" }}>
                  Do you have care options?
                </label>

                <Select
                  borderColor="rgb(229 70 70)"
                  width={260}
                  value={formData.care_options}
                  onChange={(e) =>
                    handleInputChange("care_options", e.target.value)
                  }
                >
                  <option value="">Having care options?</option>
                  {care_options.map((theme) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </Select>
              </div>

              <hr
                style={{
                  borderColor: "rgb(229 70 70)",
                  margin: "30px 0",
                  width: "100%",
                  display: `${firstInputDisplay}`,
                }}
              />

              <div
                className="form-btns"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{
                    width: "200px",
                    padding: "14px",
                    background:
                      "linear-gradient(90deg, rgba(245,209,76,0.5) 42%, rgba(245,183,76,0.5) 74%)",
                    borderRadius: "50px",
                    fontSize: "20px",
                    color: "rgb(229 70 70)",
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 15px",
                    fontWeight: "600",
                    display: `${firstInputDisplay}`,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={next}
                >
                  Next <BsArrowRight style={{ marginLeft: "10px" }} />
                </button>

                <button
                  style={{
                    width: "200px",
                    padding: "14px",
                    background:
                      "linear-gradient(90deg, rgba(245,209,76,0.5) 42%, rgba(245,183,76,0.5) 74%)",
                    borderRadius: "50px",
                    fontSize: "20px",
                    color: "rgb(229 70 70)",
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 15px",
                    fontWeight: "600",
                    display: `${secondInputDisplay}`,
                    margin: "0 20px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={previous}
                >
                  <BsArrowLeft style={{ marginRight: "10px" }} /> Previous
                </button>

                <Button
                  style={{
                    width: "200px",
                    height:"58px",
                    padding: "14px",
                    background:
                      "linear-gradient(90deg, rgba(245,209,76,0.5) 42%, rgba(245,183,76,0.5) 74%)",
                    borderRadius: "50px",
                    fontSize: "20px",
                    color: "rgb(229 70 70)",
                    margin: "0 20px",
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 15px",
                    fontWeight: "600",
                    display: `${secondInputDisplay}`,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={handleSubmit}
                  isLoading={isLoading} // Set isLoading prop to show the loader
                  loadingText="Submitting..." // Optional loading text
                >
                  Submit
                </Button>

                <button
                  style={{
                    width: "200px",
                    padding: "14px",
                    background:
                      "linear-gradient(90deg, rgba(245,209,76,0.5) 42%, rgba(245,183,76,0.5) 74%)",
                    borderRadius: "50px",
                    fontSize: "20px",
                    color: "rgb(229 70 70)",
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 15px",
                    fontWeight:  "600",
                    display:
                      predictionResult == 1 ? secondInputDisplay : "none", // Show when both conditions are met
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={gotocards}
                >
                  Next <BsArrowRight style={{ marginLeft: "10px" }} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
