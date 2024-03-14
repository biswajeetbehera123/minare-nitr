import React from "react";
import { Box, Typography } from "@mui/material";
import { Phone } from "@mui/icons-material";

function Sponsorship() {
  return (
    <Box sx={{ mt: "6rem", padding: {xs:'2rem', lg: '6rem'} }}>
      <Box
        sx={{
          textAlign: "center",
          mb: "2rem",
        }}
      >
        <Typography
          variant="inherit"
          sx={{ fontWeight: "semi-bold", fontSize: { xs: "48px", lg: "72px" } }}
        >
          Why Sponsor Minare!
        </Typography>
        <Typography variant="caption" sx={{ fontSize: { xs: "14px", md: "18px" } }}>
          MINARE provides a unique platform to the young minds studying mining
          engineering and allied courses in leading technical institutes of the
          country to showcase their talent and skills. Your sponsorship of
          MINARE 2024 will ensure widespread publicity across a variety of
          platforms, including banners, posters, flyers, event kits,
          Monday Morning - The NITRKL Newsletter, and social media platforms. As
          a proud sponsor, your brand will create awareness, along with
          increasing visibility and credibility. Necessary publicity material
          provided by you will be circulated among the participants and
          participating institutes. The campus ambassadors, integral to the
          organization of Minare, shall spread your ideas. The souvenir will also be published, highlighting the details of the events.
        </Typography>
      </Box>
      <Box sx={{ my: "2rem" }}>
        <img
          src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1710264432/minare/qrynoulone2j54wa60vr.png"
          alt="WhySponsortable"
        />
      </Box>
      <Box sx={{ my: "2rem" }}>
        <img
          src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1710264427/minare/zyo2mufuexo0khg089at.png"
          alt="Past sponsors"
        />
      </Box>
      <Box display={{ xs: 'block', lg: 'flex' }} flexDirection={{ xs: 'column', lg: 'row' }} alignItems={'center'} justifyContent={'space-around'}>
        <Box sx={{ display:'flex', flexDirection:'column',  mr: { xs: 0, lg: "2rem" }, mb: { xs: "2rem", lg: 0 } }}>
          <Typography variant='h3' sx={{ mb: "1rem" }}>
            <u>Bank Details</u>
          </Typography>
          <Typography>
            <b>A/c. Name:</b> MS MINING ENGG SOCIETY
          </Typography>
          <Typography>
            <b>A/c. Number:</b> 10138951149
          </Typography>
          <Typography>
            <b>IFSC Code:</b> SBIN0002109
          </Typography>
        </Box>
        <Box sx={{}}>
          <Typography variant="h4" sx={{ mb: "1rem" }}>
            <u>Contact Details</u>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box>
              <Typography>
                <b>Satyabrata Biswal</b>
              </Typography>
              <Typography>
                <i>Secretary</i>
              </Typography>
              <Typography>Email: minare@nitrkl.ac.in</Typography>
              <Typography>
                <Phone />: +91 87632 20285
              </Typography>
            </Box>
            <Box>
              <Typography>
                <b>Prof. H.B.Sahu</b>
              </Typography>
              <Typography>
                <i>Advisor</i>
              </Typography>
              <Typography>Email: hbsahu@nitrkl.ac.in</Typography>
              <Typography>
                <Phone />: +91 94372 45625
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sponsorship;
