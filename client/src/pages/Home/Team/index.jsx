import React, { useEffect } from "react";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { DeleteProduct, GetAllData } from "../../../store/team/api_actions";

const Team = () => {
  const dispatch = useDispatch();
  const { team, loading } = useSelector((state) => state.team);

  const getAll = async () => {
    dispatch(GetAllData());
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="team_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-90">
              <h3
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                }}
              >
                Our Creative Team
              </h3>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".6s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.6s",
                }}
              >
                Tour function information without cross-action media value
                quickly maximize timely deliverables.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Team Members */}
          {team.map((teamMember, index) => {
            const { title, name, photo, _id, about } = teamMember;
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="single_team wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.2s",
                  }}
                >
                  <div className="team_thumb">
                    <img src={photo} alt="" />
                  </div>
                  <div className="team_title text-center">
                    <h3>{name}</h3>
                    <p>{title}</p>
                  </div>
                  <div className="actions">
                    <button
                      onClick={() => {
                        dispatch(DeleteProduct(_id));
                        toast.success("Item deleted!");
                      }}
                    >
                      Delete
                    </button>
                    <Link to={`/detail/${_id}`} className="detail">
                      {" "}
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
