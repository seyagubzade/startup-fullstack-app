import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./styles.scss";
import { GetById } from "../../store/team/api_actions";
import { Helmet } from "react-helmet";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentTeamMember, loading } = useSelector((state) => state.team);
  const getElementById = async () => {
    dispatch(GetById(id));
  };
  useEffect(() => {
    getElementById();
  }, [id]);
  return (
    <>
      <Helmet>
        <title>Detail</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="detail_area">
        {loading ? (
          <p>Loading...</p>
        ) : currentTeamMember ? (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="card">
                  <div className="card-header">
                    <img src={currentTeamMember.photo} alt="" />
                    <h2 className="card-title">{currentTeamMember?.name}</h2>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{currentTeamMember.title}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        About: {currentTeamMember.about}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Detail;
