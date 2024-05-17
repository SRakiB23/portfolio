import { RxDividerHorizontal } from "react-icons/rx";
import TimelineDesign from "./TimelineDesign";

function Timeline() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xl text-[#898A9B] flex items-center">
        <RxDividerHorizontal className="text-6xl pr-4" />
        TIMELINE
      </h2>
      <h2 className="text-5xl font-bold">Timeline Period</h2>
      <TimelineDesign></TimelineDesign>
    </div>
  );
}

export default Timeline;
