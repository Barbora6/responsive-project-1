import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from "@mui/material";
import { FaHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

export const Post = () => {
  return (
    <Card sx={{ margin: 4 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <IoMdMore />
          </IconButton>
        }
        title="Barbora Smetanová"
        subheader="February 8, 2025"
      />
      <CardMedia
        component="img"
        height="15%"
        image="https://jz.img0.cz/media/07/91/07913bf0-a78f-4384-8aca-2663ce6c998f.jpg.570x570_q85_crop.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox size="28" icon={<CiHeart />} checkedIcon={<FaHeart />} />
        </IconButton>
        <IconButton aria-label="share">
          <CiShare2 />
        </IconButton>
      </CardActions>
    </Card>
  );
};
