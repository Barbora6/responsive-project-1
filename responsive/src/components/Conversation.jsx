import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";
import React from "react";

export const Conversation = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://media.istockphoto.com/id/1135944110/cs/fotografie/obchod-je-to-o-%C4%8Dem-jsem.jpg?s=2048x2048&w=is&k=20&c=Jtk1wB7cmyrDF39t5VVRzno9po0jgvuC_pwfVucSSYE="
          />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Travis Howard"
            src="https://media.istockphoto.com/id/1456582927/cs/fotografie/senior-podnikatel-pomoc%C3%AD-notebooku-v-kancel%C3%A1%C5%99i.jpg?s=2048x2048&w=is&k=20&c=d78gb-G_I-ynwnrdgC9f81ZNTrppat1D5PxvnMQLIkc="
          />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Cindy Baker"
            src="https://media.istockphoto.com/id/2042540731/cs/fotografie/successful-businesswoman-portrait.jpg?s=2048x2048&w=is&k=20&c=bOG3wa72wPzTPaM3ndjz7jX6BCJ6AVetIkxCLdJw1Ds="
          />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};
