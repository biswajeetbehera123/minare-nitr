import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

function Oursponsors() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: "8rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          p: "2rem",
        }}
      >
        <img
          src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1713451762/minare/jj02zbd3cq00vqxvnnz3.png"
          alt="MinareLogo"
          style={{ width: "400px" }}
        />
        <Typography
          variant="inherit"
          sx={{
            fontWeight: "semi-bold",
            fontSize: { xs: "48px", lg: "72px" },
          }}
        >
          Our Sponsors
        </Typography>
        <Typography
          variant="inherit"
          color={"GrayText"}
          sx={{ fontSize: { xs: "14px", md: "18px" } }}
        >
          We are grateful to our sponsors for their support and encouragement.
          We are proud to have them as our partners in this journey.
        </Typography>
        <br />
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>
            <u>PLATINUM SPONSORS</u>
          </h2>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              m: "2rem",
            }}
          >
            <img
              src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1713448932/minare/ecrveqdezag00leowqfz.jpg"
              alt="NMDC"
              style={{ width: "400px" }}
            />
            <Typography sx={{ mx: "2rem" }} variant="h5">
              National Mineral Development Corporation
            </Typography>
          </Box>
          <img
            style={{ width: "80vw" }}
            src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1713448927/minare/oabvlyrhykpa9uoe739a.jpg"
            alt="nmdc-banner"
          />
        </Box>
        <hr
          style={{
            border: "2px solid white",
            borderRadius: "10px",
            opacity: "50%",
            width: "90vw",
            margin: "2rem 0",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            my: "2rem",
          }}
        >
          <h2>
            <u>CO-SPONSORS</u>
          </h2>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              m: "2rem",
            }}
          >
            <Box sx={{ bgcolor: "white", p: "6px" }}>
              <img
                src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1713454341/minare/jtryrydfuahl8vlezlky.png"
                alt="AMNS"
                style={{ width: "250px" }}
              />
            </Box>
            <Typography sx={{ mx: "2rem" }} variant="h5">
              AM/NS ( ArcelorMittal and Nippon Steel )
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <img
              style={{ width: "20vw" }}
              src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1713448942/minare/h5ldetdhsfvhrnakwb5t.jpg"
              alt="amns-banner"
            />
            <Box sx={{ bgcolor: "white", p: "6px", borderRadius: "3px" }}>
              <iframe
                width="600"
                height="100%"
                src="https://www.youtube.com/embed/xuBmu3XwA5o?si=m5uxJjGFUn6UMcHF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Oursponsors;
