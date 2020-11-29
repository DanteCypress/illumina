import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSmallImage } from "../util";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layout={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}> {data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Media>
              <img
                src={
                  getSmallImage(game.background_image, 1280) ||
                  "https://house.utah.gov/wp-content/uploads/2019/01/Image-Coming-Soon.jpg"
                }
                alt={game.name}
              />
            </Media>
            <div className="gallery">
              {screen.results.map((screen) => (
                <motion.img
                  layout={`image${pathId}`}
                  src={
                    getSmallImage(screen.image, 1280) ||
                    "https://house.utah.gov/wp-content/uploads/2019/01/Image-Coming-Soon.jpg"
                  }
                  key={screen.id}
                  alt={game.name}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &:: -webkit-scrollbar {
    width: 0.5rem;
  }
  &:: -webkit-scrollbar-thumb {
    background-color: grey;
  }
  &:: -webkit-scrollbar-track {
    background-color: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
