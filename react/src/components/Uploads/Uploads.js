import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import "./Uploads.scss";

const Uploads = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const uploadVideo = (e) => {
    e.preventDefault();
    const videoTitle = e.target.uploads__title.value;
    const videoDescription = e.target.uploads__description.value;

    axios
      .post("http://localhost:8080/videos", {
        title: videoTitle,
        description: videoDescription,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleSubmit(e) {
    uploadVideo(e);
    setSuccessMessage("Video successfully uploaded!");

    setTimeout(function () {
      window.location.href = "/";
    }, 1500);
  }
  return (
    <section className="uploads">
      <div>
        <h1 className="uploads__header">Upload Video</h1>
      </div>
      <div>
        <form className="uploads__form" onSubmit={handleSubmit}>
          <div className="uploads__form-container">
            <label className="uploads__video-label" htmlFor="uploads__video">
              VIDEO THUMBNAIL
            </label>
            <div className="uploads__video-container">
              <input
                className="uploads__video"
                type="image"
                src={uploadImage}
                alt="Upload video"
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
