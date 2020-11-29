import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { getSmallImage } from "../util";

export const Game = ({ name, released, id, image }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler} layoutId={stringPathId}>
      <Link to={`/game/${id}`}>
        <motion.h3 layout={`title${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layout={`image${stringPathId}`}
          src={
            getSmallImage(image, 640) ||
            "https://fwtx.com/downloads/22719/download/coming-soon.png?cb=ef8dbfa3204e40cc01f6514a1781bb25"
          }
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
