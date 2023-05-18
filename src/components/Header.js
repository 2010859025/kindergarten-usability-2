import { useState } from "react";
import { HelpOutline, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="header-menu">
        <IconButton
          onClick={openModal}
          color="secondary"
          sx={{ marginLeft: "14px" }}
        >
          <HelpOutline />
        </IconButton>
        <h3>
          <Link to="/home"></Link>
          {title}
        </h3>
        <div className="header-spacer">&nbsp;</div>
      </div>
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal">
            <IconButton
              className="close-button"
              onClick={closeModal}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            >
              <Close />
            </IconButton>
            <h3 className="modal-title">Kurzhilfe</h3>
            <div className="modal-paragraph">
              <h4 className="modal-headline">Betreuungszeiten</h4>
              <p>H - Stundenweise</p>
              <p>VM - Vormittags</p>
              <p>NM - Nachmittags</p>
              <p>GT - Ganztags</p>
            </div>
            <div className="modal-paragraph">
              <h4 className="modal-headline">Gruppengröße</h4>
              <p>S - weniger als 5 Kinder</p>
              <p>M - bis zu 10 Kinder</p>
              <p>L - bis zu 15 Kinder</p>
              <p>XL - mehr als 15 Kinder</p>
            </div>
            <div className="modal-paragraph">
              <h4 className="modal-headline">Altersgruppen</h4>
              <p>0-2 Jahre</p>
              <p>3-4 Jahre</p>
              <p>5 Jahre</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
