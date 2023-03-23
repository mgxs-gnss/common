import { Box, BoxProps } from "@mui/material";
import { useEffect, useRef } from "react";
import SpriteReader from "./spriteReader";
import spriteJson from "./sprite.json";
import SpriteImage from "./sprite.png";

interface ILoader extends BoxProps {
  scale?: number;
}

const Loader = ({ scale = 3, ...props }: ILoader) => {
  const ref = useRef<HTMLCanvasElement | undefined>(undefined);

  useEffect(() => {
    const spriteImg = new Image();

    spriteImg.onload = () => {
      const sprite = new SpriteReader(spriteImg, spriteJson, {
        fps: 24,
        retina: true,
        loop: true,
        canvasTarget: ref.current,
      });

      sprite.setSize(100 * scale, 133 * scale);
      sprite.play();
    };

    spriteImg.src = SpriteImage;
  }, []);

  return (
    <Box {...props}>
      <Box
        component="canvas"
        sx={{
          width: "100px",
          height: "113px",
        }}
        ref={ref}
      />
    </Box>
  );
};

export { Loader };
