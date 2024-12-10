import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Paper,
  Avatar,
  Box,
  IconButton,
  Divider,
  Typography,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  Twitter,
} from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

const App = () => {
  return (
    <>
      <div
        className="min-vh-100 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#D8D6CF" }}
      >
        <Paper
          elevation={6}
          sx={{
            borderRadius: 6,
            overflow: "hidden",
            width: 320,
            backgroundColor: "#1e1e1e",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)",
            color: "#ffffff",
          }}
        >
          <Box
            sx={{
              position: "relative",
              background: "linear-gradient(135deg, #101010, #101010)",
              height: 120,
            }}
          >
            <svg
              className="MuiBox-root"
              fill="none"
              viewBox="0 0 144 62"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", height: "auto" }}
            >
              <path
                d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <Avatar
              alt="Saurabh Thakur"
              src="https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg"
              sx={{
                width: 100,
                height: 100,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: "4px solid #1e1e1e",
              }}
            />
          </Box>
          <Box sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#ffffff" }}>
             John Doe
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginBottom: 1, color: "#a9a9a9" }}
            >
              Software Developer
            </Typography>
            <Card
              variant="outlined"
              sx={{
                padding: 1,
                textAlign: "center",
                marginBottom: 2,
                backgroundColor: "#2e2e2e",
                borderColor: "transparent",
              }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ color: "#cccccc" }}
              >
                9 years of experience in developing fields, dedicated to bridging.
              </Typography>
            </Card>
          </Box>

          <Divider sx={{ backgroundColor: "#eaede6" }} />

          <Stack
            direction="row"
            spacing={2}
            sx={{
              paddingBottom: 1,
              justifyContent: "center",
              padding: "10px 0",
            }}
          >
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButton sx={{ color: "#4267B2" }}>
                <Facebook />
              </IconButton>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButton sx={{ color: "#1DA1F2" }}>
                <Twitter />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButton sx={{ color: "#E4405F" }}>
                <Instagram />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButton sx={{ color: "#0077B5" }}>
                <LinkedIn />
              </IconButton>
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButton sx={{ color: "#25D366" }}>
                <WhatsApp />
              </IconButton>
            </a>
          </Stack>

          <Divider sx={{ backgroundColor: "#eaede6" }} />

          <Box sx={{ padding: 2 }}>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon sx={{ color: "#1976D2" }} />
                <a
                  href="mailto:saurabh79345@gmail.com"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <Typography variant="body1">admin@gmail.com</Typography>
                </a>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon sx={{ color: "#43A047" }} />
                <a
                  href="tel:9876567898"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <Typography variant="body1">9876567898</Typography>
                </a>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LanguageIcon sx={{ color: "#FF8F00" }} />
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <Typography variant="body1">
                    https://www.google.com/
                  </Typography>
                </a>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ padding: 2 }}>
            <Button
              onClick={() => {
                const vCardData = `BEGIN:VCARD  VERSION:3.0 N:Thakur;Saurabh;;;  FN:Saurabh Thakur  EMAIL:saurabh@gmail.com
                                   TEL:9876567898 URL:https://www.google.com/ END:VCARD `;
                const blob = new Blob([vCardData], { type: "text/vcard" });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "Saurabh_Thakur.vcf";
                link.click();
              }}
              style={{backgroundColor : "#2228574f"}}
            >
              Save To Contacts
            </Button>

            <Button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/saurabh-thakur",
                  "_blank"
                );
              }}
              className="mt-3"
            >
              Connect With Me
            </Button>
          </Box>

          <Box sx={{ padding: 2 }}>
            <Typography sx={{ textAlign: "center" }}>Book a Call</Typography>
          </Box>
        </Paper>
      </div>
    </>
  );
};

export default App;
