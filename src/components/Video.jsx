import classes from "../styles/Video.module.css";

const Video = ({ title, id, noq }) => {
  return (
    <div>
      <div className={classes.video}>
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
        />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} questions</p>
          <p>Total points: {noq * 5}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
