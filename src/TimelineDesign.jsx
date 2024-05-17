import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { BiLocationPlus } from "react-icons/bi";

export default function TimelineDesign() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem className="pt-10">
        <TimelineOppositeContent color="textSecondary">
          2020 - 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <span className="font-bold text-xl">BS.c in Computer Science</span>
          <br />
          <span className="text-lg text-[#62626c]">
            Asia Pacific University of Technology and Innovation
          </span>
          <br />
          <span className="text-lg text-[#62626c] flex items-center">
            <BiLocationPlus className="pr-1 text-2xl" /> Kuala Lumpur, Malaysia
          </span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2017 – 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <span className="font-bold text-xl">
            Higher Secondary Certificate (H.S.C)
          </span>
          <br />
          <span className="text-lg text-[#62626c]">Dhaka City College</span>
          <br />
        </TimelineContent>
      </TimelineItem>
      {/* Add one more TimelineItem */}
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2015 – 2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <span className="font-bold text-xl">
            Secondary School Certificate (S.S.C)
          </span>
          <br />
          <span className="text-lg text-[#62626c]">
            Motijheel Model High School and College
          </span>
          <br />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
