import { useContext, useState } from "react";
import css from "./Editor.module.css";
import Header from "./ui/header/Header";
import { ResumeContext } from "../../context/ResumeContext";
import { renderSectionFields } from "./ui/section/Section";
import { Modal } from "../modal/Modal";
import { SectionEditForm } from "./ui/section/SectionEditForm";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";

const Editor = () => {
  const context = useContext(ResumeContext);
  const [editingSectionKey, setEditingSectionKey] = useState<string | null>(
    null
  );

  if (!context) {
    throw new Error("ResumeContext is not provided");
  }

  const { resume, setResume } = context;

  const sectionKeys = Object.keys(resume);

  const handleDelete = (sectionKey: string) => {
    const newResume = { ...resume };
    delete newResume[sectionKey];
    setResume(newResume);
  };

  const closeModal = () => setEditingSectionKey(null);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedKeys = Array.from(sectionKeys);
    const [removed] = reorderedKeys.splice(result.source.index, 1);
    reorderedKeys.splice(result.destination.index, 0, removed);

    const newResume: typeof resume = {};
    reorderedKeys.forEach((key) => {
      newResume[key] = resume[key];
    });

    setResume(newResume);
  };

  return (
    <>
      <div className={css.wrapper}>
        <Header />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ overflowY: "auto" }}
              >
                {sectionKeys.map((sectionKey, index) => (
                  <Draggable
                    key={sectionKey}
                    draggableId={sectionKey}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          borderTop: "1px solid #ccc",
                          margin: "10px",
                          padding: "10px",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <h2>{sectionKey}</h2>
                        {renderSectionFields(sectionKey, resume[sectionKey])}
                        <button
                          onClick={() => setEditingSectionKey(sectionKey)}
                        >
                          Изменить
                        </button>
                        <button
                          onClick={() => handleDelete(sectionKey)}
                          style={{ marginLeft: "10px" }}
                        >
                          Удалить
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {editingSectionKey && (
        <Modal onClose={closeModal}>
          <SectionEditForm
            sectionKey={editingSectionKey}
            initialData={resume[editingSectionKey]}
            onClose={closeModal}
            onSave={(updatedData) => {
              setResume((prev) => ({
                ...prev,
                [editingSectionKey]: updatedData,
              }));
              closeModal();
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default Editor;
