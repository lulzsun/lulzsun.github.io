import Footer from "./Footer";
import Modal from 'react-modal';
import { useState } from "react";
import { Resume, ResumePDF } from "../components/Resume";
import { XLg, Download, Printer } from 'react-bootstrap-icons';
import { pdf } from '@react-pdf/renderer';
import fileSaver from 'file-saver';
const { saveAs } = fileSaver;

interface Props {
    children: React.ReactNode
}

export const PageShell: React.FC<Props> = ({children}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return (<>
    <div className="flex flex-col items-center h-screen pt-10">
{/*        */}
{/* MODAL  */}
{/*        */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={() => document.body.style.overflow = 'hidden'}
        onAfterClose={() => document.body.style.overflow = 'unset'}
        overlayClassName="fixed inset-0 z-50"
        className="focus:outline-none absolute top-0 bottom-0 right-0 left-0 md:top-20 md:bottom-20 md:right-20 md:left-20 p-6 md:rounded-lg"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            backgroundColor: 'rgb(32 32 32)'
          }
        }}
        contentLabel="Resume Modal"
      >
        <div className="flex flex-col h-full">
          <div className="w-full flex-initial">
            <div className="flex gap-3 md:absolute md:mt-0 -mt-2 mb-4 float-left left-0 -top-5 -left-5">
              <a onClick={async () => {
                let blob = await pdf(Resume()).toBlob();
                saveAs(blob, "Jimmy Quach's Resume.pdf");
              }} className="cursor-pointer group overflow-hidden bg-neutral-800 w-auto h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
                <div className="inline-flex items-center place-content-center px-4">
                  <Download/> <span className="pl-3.5 whitespace-nowrap">Download</span>
                </div>
              </a>
              <a onClick={async () => {
                let blob = await pdf(Resume()).toBlob();
                let pdfFile = URL.createObjectURL(blob);
                window.open(pdfFile, "PRINT");
              }} className="cursor-pointer group overflow-hidden bg-neutral-800 w-11 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
                <div className="inline-flex items-center place-content-center">
                  <Printer/>
                </div>
              </a>
            </div>

            <a onClick={closeModal} className="md:absolute md:mt-0 -mt-2 mb-4 float-right right-0 -top-5 -right-5 cursor-pointer group overflow-hidden bg-neutral-800 w-11 h-11 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-neutral-500 hover:drop-shadow-2xl duration-300">
              <div className="items-center place-content-center">
                <XLg/>
              </div>
            </a>
          </div>
          <div className="pt-0 md:pt-4 flex-auto">
            <ResumePDF/>
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
      <Footer openResume={openModal}/>
    </div>
  </>
  )
}

export default PageShell;