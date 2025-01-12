/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from "react";
import { useState, useEffect, createRef } from "react";
import { findGreatestsImages } from "../../lib/utils";
import GalleryCarousel from "./GalleryCarousel";
import { GalleryInfo } from "../../types";

const Gallery = ({
  images,
  columns,
  maxheight = 0,
  postMode,
  mediaMode,
  mediaRef,
  isXPost = false,
  fillHeight = false,
  checkCardHeight,
  containerDims = [0, 0],
}: {
  images?: GalleryInfo[];
  columns?: number;
  maxheight?: number;
  postMode?: boolean;
  mediaMode?: boolean;
  isXPost?: boolean;
  fillHeight?: boolean;
  mediaRef?: React.RefObject<HTMLDivElement>;
  checkCardHeight?: () => void;
  containerDims?: [number, number];
}) => {
  const [imgRatio, setImgRatio] = useState<{
    src: string;
    height: number;
    width: number;
  }>();
  const [imagesRender, setImagesRender] =
    useState<
      { src: string; height: number; width: number; caption?: string }[]
    >();

  useEffect(() => {
    if (images && images?.length > 0) {
      if (maxheight > 0) {
        const { ratio, fImages } = findGreatestsImages(images, maxheight);
        setImagesRender(fImages);

        setImgRatio(ratio);
      } else {
        setImagesRender(
          images.map((i) => ({
            src: i.media?.[0]?.src,
            height: i.media?.[0]?.height,
            width: i.media?.[0]?.width,
            caption: i.caption,
          })),
        );
      }
    }
    return () => {};
  }, [images, maxheight]);

  const galleryCarouselHeight = useMemo(() => {
    if (containerDims && containerDims[1]) {
      return containerDims[1];
    }

    if (mediaMode) {
      return undefined;
    }

    if (fillHeight && mediaRef?.current?.clientWidth) {
      return (mediaRef?.current?.clientWidth / 9) * 16;
    }

    if (imgRatio?.height && mediaRef?.current) {
      return Math.min(
        maxheight,
        imgRatio?.height * (mediaRef?.current?.clientWidth / imgRatio.width),
      );
    }

    if (imgRatio?.height) {
      return imgRatio.height;
    }

    return 0;
  }, [
    containerDims,
    imgRatio?.height,
    imgRatio?.width,
    fillHeight,
    maxheight,
    mediaMode,
    mediaRef,
  ]);

  if (!imagesRender) {
    return <></>;
  }

  return (
    <div
      className={
        containerDims
          ? "relative"
          : (fillHeight ? "min-h-full " : "") +
            (mediaMode && postMode ? " h-screen min-h-full " : " ")
      }
      style={
        containerDims?.[1]
          ? {
              width: `${containerDims?.[0]}px`,
              height: `${containerDims?.[1]}px`,
            }
          : {}
      }
    >
      <GalleryCarousel
        media={imagesRender}
        mediaMode={mediaMode}
        objectFit={postMode || columns === 1 ? "contain" : "cover"}
        layout={isXPost ? "intrinsic" : "fill"}
        checkCardHeight={checkCardHeight}
        height={galleryCarouselHeight}
      />
    </div>
  );
};

export default Gallery;
