import React from "react";
import { Box, Typography } from "@mui/material";
import { Skills } from "./Skills";
import { Phone } from "@mui/icons-material";

function Sponsorship() {
  return (
    <Box sx={{ mt: "4rem", padding: "8rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="inherit"
          sx={{ fontWeight: "semi-bold", fontSize: "72px" }}
        >
          Why Sponsor Minare !
        </Typography>
        <Typography variant="caption" fontFamily={"revert"} fontSize={"18px"}>
          MINARE provides a unique platform to the young minds studying mining
          engineering and allied courses in leading technical institutes of the
          country to showcase their talent and skills. Your sponsorship of
          MINARE 2024 will ensure widespread publicity across a variety of
          platforms, including banners, posters, flyers, event kits, ID cards,
          Monday Morning - The NITRKL Newsletter, and social media platforms. As
          a proud sponsor, your brand will create awareness, along with
          increasing visibility and credibility. Necessary publicity material
          provided by you will be circulated among the participants and
          participating institutse. The campus ambassadors, integral to
          organization of Minare, shall spread your ideas. Your contribution
          shall also be publicized through departmental reports and website.{" "}
        </Typography>
      </Box>
      <Box sx={{ my: "2rem" }}>
        <img
          src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1710257145/minare/j1dkwo72dbz5u6t3axqn.jpg"
          alt="WhySponsortable"
        />
      </Box>
      <Box sx={{ my: "2rem" }}>
        <img
          src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1710257121/minare/wghrjpt6kopzflre3pfs.jpg"
          alt="Past sponsors"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h2>
            <u>Bank Details</u>
          </h2>
          <Typography>
            <b>A/c. Name : </b> MS MINING ENGG SOCIETY
          </Typography>
          <Typography>
            <b>A/c. Number : </b> 10138951149
          </Typography>
          <Typography>
            <b>IFSC Code : </b> SBIN0002109
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" , justifyContent: 'center'}}>
          <h3>
            <u>Contact Details</u>
          </h3>
          <Box sx={{display:'flex',flexDirection:'column', gap:'2rem'}}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>
                <b>Satyabrata Biswal</b>
              </Typography>
              <Typography>
                <i>Secretary</i>
              </Typography>
              <Typography>Email : minare@nitrkl.ac.in</Typography>
              <Typography>
                <Phone /> : +91 87632 20285
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>
                <b>Prof. H.B.Sahu</b>
              </Typography>
              <Typography>
                <i>Advisor</i>
              </Typography>
              <Typography>Email : hbsahu@nitrkl.ac.in</Typography>
              <Typography>
                <Phone /> : +91 94372 45625
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sponsorship;
