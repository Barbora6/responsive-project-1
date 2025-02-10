import {
  Box,
  Modal,
  Fab,
  styled,
  Tooltip,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button
} from "@mui/material";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import image from "../img/stažený soubor.jpg";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BsEmojiFrownFill } from "react-icons/bs";
import { BsEmojiNeutralFill } from "react-icons/bs";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa";
import { FaRegFileVideo } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
});

export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "calc(50% - 25px)", md: 30 }
        }}
      >
        <Fab color="primary" aria-label="add">
          <IoMdAddCircle fontSize={28} />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">
            Pošli zprávu:
          </Typography>
          <UserBox>
            <Avatar src={image} sx={{ width: 40, height: 40 }} />
            <Typography fontWeight={500} variant="span">
              Barbora Smetanová
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Co se ti honí hlavou?"
            variant="standard"
          />
          <Stack direction="row" gap={2} mt={2} mb={3} fontSize="28px">
            <BsEmojiSmileFill />
            <BsEmojiFrownFill />
            <BsEmojiNeutralFill />
            <BsFillEmojiHeartEyesFill />
            <BsFillEmojiWinkFill />
            <FaRegImage />
            <FaRegFileVideo />
            <IoMdPersonAdd />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <MdDateRange fontSize={28} />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
