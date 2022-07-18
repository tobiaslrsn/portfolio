import "./About.scss";
export const About = () => {
  return (
    <>
      <div className="box-container">
        <div className="box-one">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus cumque est hic aperiam. Animi nihil molestiae
            deleniti alias possimus, beatae cumque ducimus voluptatibus a soluta
            necessitatibus repellendus numquam cum! Magni, reprehenderit
            voluptatum illum consequatur doloribus et tempore fugit aspernatur
            nisi, molestiae voluptatibus nulla consequuntur optio animi natus
            repellat corrupti alias.
          </span>
        </div>
        <div className="box-two">
          <img src={`${process.env.PUBLIC_URL}/CVPROFIL.png`} alt="" />
        </div>
      </div>
    </>
  );
};
