import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import { MdAdd } from "react-icons/md"

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
        <NoteCard
          title="Meeting on 7th April"
          date="3rd Apr 2024"
          content="Meeting on 7th AprilMeeting on 7th AprilMeeting on 7th AprilMeeting on 7th AprilMeeting on 7th AprilMeeting on 7th AprilMeeting on 7th AprilMeeting on 7th AprilMeeting on 7th AprilMeeting on 7th April"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
        </div>
      </div>

      <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-primary-600 absolute right-10 bottom-10" onClick={() => {}}>
        <MdAdd className="text-[32px] text-white"/>
      </button>
    </>
  );
};

export default Home;
