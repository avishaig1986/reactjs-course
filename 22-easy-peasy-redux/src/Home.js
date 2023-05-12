import React from "react";
import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className="Home">
      <div className="container p-2 mt-3">
        {isLoading && (
          <div className="row justify-content-center">
            <div className="col-10">
              <p className="statusMsg">Loading ...</p>
            </div>
          </div>
        )}
        {fetchError && (
          <div className="row justify-content-center">
            <div className="col-10">
              <p className="statusMsg" style={{ color: "red" }}>
                {fetchError}
              </p>
            </div>
          </div>
        )}
        {!isLoading &&
          !fetchError &&
          (searchResults.length ? (
            <Feed posts={searchResults} />
          ) : (
            <p className="statusMsg">no posts to display</p>
          ))}
      </div>
    </main>
  );
};

export default Home;
