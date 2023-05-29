import { redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./Uploads.scss";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

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
        <h1 className="uploads__header">Upload Video</h1>
      </div>
      <div>
        <form className="uploads__form" onSubmit={handleSubmit}>
          <div>
            <label className="uploads__video-label" htmlFor="uploads__video">
              VIDEO THUMBNAIL
            </label>
            <div className="uploads__video-container">
              <input
                className="uploads__video"
                type="image"
                src={uploadImage}
                id="uploads__video"
                name="uploads__video"
              ></input>
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
          <div className="uploads__button-container">
            <img
              className="uploads__publish-icon"
              src={publishIcon}
              alt="User avatar"
            />
            <button className="uploads__button" type="submit">
              PUBLISH
            </button>
            <Link to="/">
              <button className="uploads__cancel-button" type="button">
                CANCEL
              </button>
            </Link>
          </div>
        </form>
        <p>{successMessage}</p>
      </div>
    </section>
  );
};

export default Uploads;
