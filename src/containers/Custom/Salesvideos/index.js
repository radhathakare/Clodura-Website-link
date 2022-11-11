import React from "react";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import iconday from "images/Group 198.jpg";
import Card from "common/components/Card";
import PropTypes from "prop-types";
import VideosWrapper from "./videos.style";
import Fallback from "common/assets/image/Blog/fallback.jpg";

const VideosLanding = ({ salesvideos }) => {
  return (
    <div>
      <VideosWrapper>
        {salesvideos.slice(0, 3).map((svideo) => (
          <div className="video-container">
            <Image
              className="objectWrapper"
              src={
                svideo.media ? svideo?.media[0]?.localFile?.publicURL : Fallback
              }
              alt="salesvideos"
            />
            <a
              href={`/salesstreetvideos/${svideo.slug}/`}
              target="_blank"
              rel="noreferrer"
            >
              <Heading content={svideo.title} rel="noreferrer" />
            </a>
            <Text
              className="metaDescription"
              content={svideo.metaDescription}
            />
          </div>
        ))}
      </VideosWrapper>

      <VideosWrapper>
        {salesvideos.slice(3, 6).map((svideo) => (
          <div className="video-container">
            <Image
              className="objectWrapper"
              src={
                svideo.media ? svideo?.media[0]?.localFile?.publicURL : Fallback
              }
              alt="salesvideos"
            />
            <a
              href={`/salesstreetvideos/${svideo.slug}/`}
              target="_blank"
              rel="noreferrer"
            >
              <Heading content={svideo.title} rel="noreferrer" />
            </a>
            <Text
              className="metaDescription"
              content={svideo.metaDescription}
            />
          </div>
        ))}
      </VideosWrapper>
      <VideosWrapper>
        {salesvideos.slice(6, 9).map((svideo) => (
          <div className="video-container">
            <Image
              className="objectWrapper"
              src={
                svideo.media ? svideo?.media[0]?.localFile?.publicURL : Fallback
              }
              alt="salesvideos"
            />
            <a
              href={`/salesstreetvideos/${svideo.slug}/`}
              target="_blank"
              rel="noreferrer"
            >
              <Heading content={svideo.title} rel="noreferrer" />
            </a>
            <Text
              className="metaDescription"
              content={svideo.metaDescription}
            />
          </div>
        ))}
      </VideosWrapper>
      <VideosWrapper>
        {salesvideos.slice(9, 12).map((svideo) => (
          <div className="video-container">
            <Image
              className="objectWrapper"
              src={
                svideo.media ? svideo?.media[0]?.localFile?.publicURL : Fallback
              }
              alt="salesvideos"
            />
            <a
              href={`/salesstreetvideos/${svideo.slug}/`}
              target="_blank"
              rel="noreferrer"
            >
              <Heading content={svideo.title} rel="noreferrer" />
            </a>
            <Text
              className="metaDescription"
              content={svideo.metaDescription}
            />
          </div>
        ))}
      </VideosWrapper>
      <VideosWrapper>
        {salesvideos.slice(12, 15).map((svideo) => (
          <div className="video-container">
            <Image
              className="objectWrapper"
              src={
                svideo.media ? svideo?.media[0]?.localFile?.publicURL : Fallback
              }
              alt="salesvideos"
            />
            <a
              href={`/salesstreetvideos/${svideo.slug}/`}
              target="_blank"
              rel="noreferrer"
            >
              <Heading content={svideo.title} rel="noreferrer" />
            </a>
            <Text
              className="metaDescription"
              content={svideo.metaDescription}
            />
          </div>
        ))}
      </VideosWrapper>
      <VideosWrapper>
        {salesvideos.slice(15, 18).map((svideo) => (
          <div className="video-container">
            <Image
              className="objectWrapper"
              src={
                svideo.media ? svideo?.media[0]?.localFile?.publicURL : Fallback
              }
              alt="salesvideos"
            />
            <a
              href={`/salesstreetvideos/${svideo.slug}/`}
              target="_blank"
              rel="noreferrer"
            >
              <Heading content={svideo.title} rel="noreferrer" />
            </a>
            <Text
              className="metaDescription"
              content={svideo.metaDescription}
            />
          </div>
        ))}
      </VideosWrapper>
    </div>
  );
};

VideosLanding.propTypes = {
  button: PropTypes.object,
};

VideosLanding.defaultProps = {
  button: {
    type: "button",
    fontSize: "13px",
    fontWeight: "700",
    borderRadius: "4px",
    pl: "15px",
    pr: "15px",
    colors: "tertiaryWithBg",
    minHeight: "auto",
    height: "40px",
  },
};

export default VideosLanding;
