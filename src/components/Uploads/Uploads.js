import { redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./Uploads.scss";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";

const Uploads = () => {
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSuccessMessage("Video successfully uploaded!");

    setTimeout(function () {
      window.location.href = "/upload";
    }, 1500);
  }
  return (
    <section className="uploads">
      <div>
        <h1 className="uploads__header">Uploads</h1>
      </div>
      <div>
        <form className="uploads__form" onSubmit={handleSubmit}>
          <div>
            <div className="uploads__video-container">
              <img
                className="uploads__video"
                src={uploadImage}
                alt="Video thumbnail"
              />
            </div>

            <label className="uploads__title-label" htmlFor="uploads__title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="uploads__title-input"
              type="text"
              id="uploads__title"
              name="uploads__title"
              placeholder="Add a title to your video"
              required
            ></input>
            <label
              className="uploads__description-label"
              htmlFor="uploads__description"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="uploads__description-input"
              type="text"
              id="uploads__description"
              name="uploads__description"
              placeholder="Add a description of your video"
              required
            ></textarea>
          </div>
          <div>
            <Link to="/">
              <button className="uploads__cancel-button" type="button">
                CANCEL
              </button>
            </Link>
            <button className="uploads__button" type="submit">
              PUBLISH
            </button>
          </div>
        </form>
        <p>{successMessage}</p>
      </div>
    </section>
  );
};

export default Uploads;
