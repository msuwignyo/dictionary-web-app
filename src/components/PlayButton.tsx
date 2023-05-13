"use client";

import Image from "next/image";

interface PlayButtonProps {
  src?: string;
}

export default function PlayButton(props: PlayButtonProps) {
  function handleClick() {
    if (props.src) {
      let beat = new Audio(props.src);
      beat.play();
    }
  }

  return (
    <button onClick={handleClick}>
      <Image src="./icon-play.svg" alt="play-button" width={48} height={48} />
    </button>
  );
}
