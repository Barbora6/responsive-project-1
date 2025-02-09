import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography
} from "@mui/material";
import { Conversation } from "./Conversation";

export const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block"
        }
      }}
    >
      <Box position="fixed" width={300} mt={2} mb={2}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2024/04/16/23/02/young-8700872_640.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cdn.pixabay.com/photo/2020/12/29/15/33/musica-5870849_640.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://media.istockphoto.com/id/1276778124/cs/fotografie/kr%C3%A1sn%C3%A1-seniorka-venku-ve-m%C4%9Bst%C4%9B.jpg?s=2048x2048&w=is&k=20&c=htJ-sot9GxyzVzCfD3LKQSag4uNOf6GcwMhnffDYuGg="
          />
          <Avatar
            alt="Agnes Walker"
            src="https://media.istockphoto.com/id/1333500910/cs/fotografie/vesel%C3%A1-%C5%BEena-v-br%C3%BDl%C3%ADch-kter%C3%A1-odpo%C4%8D%C3%ADv%C3%A1-venku.jpg?s=2048x2048&w=is&k=20&c=NUawvGUJFhVHJXUjj3OMza0JcYJsj3myyMfe6ntApgw="
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/id/1420793186/cs/fotografie/pomal%C3%BD-%C5%BEivot-u%C5%BE%C3%ADv%C3%A1n%C3%AD-si-mali%C4%8Dkost%C3%AD-tr%C3%A1v%C3%AD-%C4%8Das-v-p%C5%99%C3%ADrod%C4%9B-v-l%C3%A9t%C4%9B-%C5%A1%C5%A5astn%C3%A1-%C5%BEena-st%C5%99edn%C3%ADho.jpg?s=2048x2048&w=is&k=20&c=RX6Qd0gwXWJbPxMmlvXqtEet6Akjr2zGzDrdm3Ku2T8=g"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="breakfast"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt="burger"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="camera"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt="coffee"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              alt="hats"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt="honey"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
              alt="basketball"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
              alt="fern"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
              alt="mushrooms"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Conversations:
        </Typography>
        <Conversation />
      </Box>
    </Box>
  );
};
