import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Heading, Text, Flex, CircularProgress } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Main() {
  const [hospitals, setHospitals] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [originalLocation, setOriginalLocation] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const extension = `https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf`;

  useEffect(() => {
    console.log(errorStatus);
  }, [errorStatus]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getLocation = async (latitude, longitude) => {
    const api = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;
    try {
      const response = await axios.get(api);
      if (response.data) {
        const { address } = response.data;
        const locationParts = [];
  
        if (address?.city) {
          locationParts.push(address.city);
        }
        if (address?.town) {
          locationParts.push(address.town);
        }
        if (address?.city_district) {
          locationParts.push(address.city_district);
        }
        if (address?.state_district) {
          locationParts.push(address.state_district);
        }
  
        if (address?.state) {
          locationParts.push(address.state);
        }
  
        const formattedLocation = locationParts.join(", ");
        setOriginalLocation(formattedLocation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    if (userLocation) {
      getLocation(userLocation.latitude, userLocation.longitude);
      findNearbyHospitals(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
      setLoading(false);
    }
  };

  const findNearbyHospitals = async (latitude, longitude) => {
    const API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
    const cacheKey = "cachedHospitalsData";

    // Check if cached data exists in local storage
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      const currentTime = new Date().getTime();
      const cacheDuration = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

      if (currentTime - timestamp <= cacheDuration) {
        // Use cached data if it's not expired
        setHospitals(data);
        console.log("Got data from local Storage.");
        setLoading(false);
        return;
      }
    }

    // Fetch data from the API
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;

        // Cache the data in local storage with a timestamp
        const currentTime = new Date().getTime();
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ data: results, timestamp: currentTime })
        );

        setHospitals(results);
        console.log("Fetched data from API");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        setErrorStatus(true);
      });
  };

  return (
    <div className="dnm-main" style={{ minHeight: "100vh", overflowX: "hidden", overflow:"hidden" }}>
      <div
        className="dnm-inner-content"
        style={{ width: "100%", maxWidth: "1300px", margin: "0 auto", padding: "60px 20px 0" }}
      >
        <div className="dnm-title">
          <h1
            style={{ textAlign: "center", fontSize: "35px", fontWeight: "500" }}
          >
            Find Health Professionals Near You
          </h1>
          {originalLocation && (
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Showing nearby hospitals for <b>{originalLocation}</b>
            </p>
          )}
        </div>

        {errorStatus && (
          <Flex align="center" justify="center" height="200px">
            <div className="dnm-status" style={{ textAlign: "center" }}>
              <p style={{ fontSize: "20px" }}>
                Please install{" "}
                <Link target="_blank" to={extension}>
                  <b style={{ color: "blue" }}>
                    <u>this</u>
                  </b>
                </Link>{" "}
                Chrome extension, to get nearby hospitals.
              </p>
              <br />
              <p>And turn it ON</p>
            </div>
          </Flex>
        )}

        {isLoading && !errorStatus ? (
          <Flex align="center" justify="center" height="200px">
            <CircularProgress isIndeterminate color="teal.500" />
          </Flex>
        ) : (
          <div
            className="dnm-hospitals"
            style={{ width: "90%", margin: "100px auto", height: "320px" }}
          >
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              style={{ height: "335px", display: "flex", alignItems: "center" }}
            >
              {hospitals.map((hospital, index) => (
                <SwiperSlide key={hospital.place_id}>
                  <Link
                    to={`https://www.google.com/maps/place/${hospital.name} ${hospital.vicinity}`}
                    target="_blank"
                  >
                    <div
                      className="dnmh-card"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.3)",
                        width: "100%",
                        height: "280px",
                        borderRadius: "10px",
                        padding: "25px 60px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 0px",
                        backdropFilter: "blur(20px)"
                      }}
                    >
                      <Heading as="h3" size="lg">
                        {hospital.name}
                      </Heading>
                      <Text style={{ marginTop: "10px" }}>
                        {hospital.vicinity? hospital.vicinity: "NA"}
                      </Text>

                      <div
                        className="rr"
                        style={{
                          display: "flex",
                          margin: "10px 0",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>
                          <b>Rating : </b>
                          {hospital.rating ? hospital.rating: "NA"}
                        </p>
                        <p>
                          <b>Total Reviews : </b>
                          {hospital.user_ratings_total ? hospital.user_ratings_total: "NA"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div className="dnm-subtitle">
          <h1 style={{ fontSize: "35px", textAlign: "center" }}>
            Your Health Matters, and We're Here to Help
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
