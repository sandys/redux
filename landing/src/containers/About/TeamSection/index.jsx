import Box from "common/components/Box";
import FeatureBlock from "common/components/FeatureBlock";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { team } from "common/data/about";
import TeamSectionWrapper from "./teamSection.style";

const TeamSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  memberName,
  designation,
  contentStyle,
}) => {
  const { title, description, members } = team;
  return (
    <TeamSectionWrapper id="teamSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content={team.heading} {...sectionSubTitle} />
          <Heading content={title} {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {members.map((member, index) => (
            <Box className="col" {...col} key={`team_key-${index}`}>
              <FeatureBlock
                id={`member-${member.id}`}
                className="team__member"
                icon={
                  <Image
                    src={member.image}
                    alt={`Team member photo ${member.id}`}
                    className="member__photo"
                    width={100}
                  />
                }
                contentStyle={contentStyle}
                title={<Heading content={member.name} {...memberName} />}
                description={
                  <Fragment>
                    <Text content={member.designation} {...designation} />
                    {/* <SocialLinks>
                      {member.social_links.map((social, index) => (
                        <a
                          href={social.url}
                          key={`profile_id-${index}`}
                          className={social.icon}
                          aria-label={social.icon}
                        ></a>
                      ))}
                    </SocialLinks> */}
                  </Fragment>
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </TeamSectionWrapper>
  );
};

// TeamSection style props
TeamSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  memberName: PropTypes.object,
  designation: PropTypes.object,
};

// TeamSection default style
TeamSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"],
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px",
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
  },
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
  // Team member content default style
  contentStyle: {
    textAlign: "center",
    mt: "25px",
  },
  // Team member memberName default style
  memberName: {
    fontSize: ["18px", "18px", "16px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: "8px",
    letterSpacing: "-0.020em",
  },
  // Team member description default style
  designation: {
    fontSize: ["15px", "16px", "14px", "17px"],
    lineHeight: "1",
    color: "rgba(15, 33, 55, 0.6)",
    mb: 0,
  },
};

export default TeamSection;
