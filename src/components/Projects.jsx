import { useState } from "react";
import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "60vw",
    width: "100%",
    padding: "0",
    borderRadius: "20px",
    background: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
  },
};

Modal.setAppElement("#root");

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-screen bg-bg_light_primary relative overflow-hidden snap-start" id="projects">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl">
          <img src={selectProject?.image} alt="..." className="w-full h-auto" />
          <div className="p-4 bg-white flex justify-between items-center">
            <h5 className="font-bold font-Poppins text-lg">{selectProject?.title}</h5>
            <button onClick={closeModal} className="btn py-1 px-4 text-sm">CLOSE</button>
          </div>
        </div>
      </Modal>

      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between relative z-10">
        <div>
          <h2 className="title">
            {Projects.title}
          </h2>
          <h4 className="subtitle">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            className="md:w-96 w-full h-auto object-contain animate-slide-in-left"
          />
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            className="rounded-3xl pb-16 max-w-md drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." className="rounded-2xl" />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button
                    className="font-bold text-gray self-end hover:text-dark_primary duration-200"
                    onClick={() => {
                      setSelectProject(content);
                      openModal();
                    }}
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
