import React, { useState } from "react";
import "./ProjectGallery.css";

const ProjectGallery = ({ projects }) => {
  const [modalData, setModalData] = useState(null);

  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    return <p>No Community Service projects yet.</p>;
  }

  return (
    <>
      <div className="gallery-container">
        {projects.map((project, index) => {
          const {
            title = "Untitled Project",
            description = "",
            image,
          } = project;

          const truncatedDesc =
            description.length > 100
              ? description.slice(0, 100) + "..."
              : description;

          return (
            <div
              key={index}
              className="card"
              onClick={() => setModalData(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setModalData(project);
              }}
            >
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="card__image"
                />
              )}

              <div className="card__content">
                <p className="card__title">{title}</p>
                {description && (
                  <p className="card__description">{truncatedDesc}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h2>{modalData.title}</h2>

            {modalData.image && (
              <img
                src={modalData.image}
                alt={modalData.title}
                className="modal-image"
              />
            )}

            {modalData.description && (
              <p>{modalData.description}</p>
            )}

            <button
              className="modal-close-btn"
              onClick={() => setModalData(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
