import { pdf } from "@react-pdf/renderer";
import Modal from "react-modal";
import saveAs from "file-saver";
import { useState } from "react";
import Footer from "../components/Footer";
import { Resume, ResumePDF } from "../components/Resume";
import "./Layout.css";
import "./tailwind.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex flex-col items-center pt-10 font-ptsans">
        {/*        */}
        {/* MODAL  */}
        {/*        */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          onAfterOpen={() => (document.body.style.overflow = "hidden")}
          onAfterClose={() => (document.body.style.overflow = "unset")}
          overlayClassName="fixed inset-0 z-50"
          className="focus:outline-none absolute top-0 bottom-0 right-0 left-0 md:top-20 md:bottom-20 md:right-20 md:left-20 p-6 md:rounded-lg"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              backgroundColor: "rgb(32 32 32)",
            },
          }}
          contentLabel="Resume Modal"
        >
          <div className="flex flex-col h-full">
            <div className="w-full flex-initial">
              <div className="flex gap-3 md:absolute md:mt-0 -mt-2 mb-4 float-left left-0 -top-5 -left-5">
                <a
                  onClick={async () => {
                    let blob = await pdf(Resume()).toBlob();
                    saveAs(blob, "Jimmy Quach's Resume.pdf");
                  }}
                  className="cursor-pointer group overflow-hidden bg-neutral-800 w-auto h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300"
                >
                  <div className="inline-flex items-center place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </svg>
                    <span className="pl-3.5 whitespace-nowrap">Download</span>
                  </div>
                </a>
                <a
                  onClick={async () => {
                    let blob = await pdf(Resume()).toBlob();
                    let pdfFile = URL.createObjectURL(blob);
                    window.open(pdfFile, "PRINT");
                  }}
                  className="cursor-pointer group overflow-hidden bg-neutral-800 w-11 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300"
                >
                  <div className="inline-flex items-center place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                      <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                    </svg>
                  </div>
                </a>
              </div>

              <a
                onClick={closeModal}
                className="md:absolute md:mt-0 -mt-2 mb-4 float-right right-0 -top-5 -right-5 cursor-pointer group overflow-hidden bg-neutral-800 w-11 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300"
              >
                <div className="items-center place-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="pt-0 md:pt-4 flex-auto">
              <ResumePDF />
            </div>
          </div>
        </Modal>
        {/*        */}
        {/*CHILDREN*/}
        {/*        */}
        {children}
        {/*        */}
        {/* FOOTER */}
        {/*        */}
        <Footer openResume={openModal} />
      </div>
    </>
  );
}
