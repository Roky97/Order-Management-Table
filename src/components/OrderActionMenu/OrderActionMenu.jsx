import { IconButton, Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const OrderActionMenu = ({ onAction, data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action) => () => {
    onAction && onAction(action, data);
    handleClose();
  };
  
  return (
    <>
      <IconButton
        disableRipple={true}
        size="small"
        id="action-IconButton"
        aria-label="order actions"
        aria-controls={open ? "action-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ minWidth: 0 }}
        ref={(ref) => {
          if (!ref) return;
          ref.onclick = (e) => {
            e.stopPropagation();
            handleClick(e);
          };
        }}
      >
        <MoreVertIcon fontSize="10px" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "action-button",
          },
        }}
      >
        <MenuItem onClick={handleAction("replace")}>
          Replace order
        </MenuItem>
        <MenuItem onClick={handleAction("cancel")}>
          Cancel order
        </MenuItem>
        <MenuItem onClick={handleAction("force-cancel")}>
          Force cancel order
        </MenuItem>
        <MenuItem onClick={handleAction("download-csv")}>
          Download CSV
        </MenuItem>
        <MenuItem onClick={handleAction("download-json")}>
          Download JSON
        </MenuItem>
      </Menu>
    </>
  );
};

export default OrderActionMenu;
