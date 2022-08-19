import { useState } from "react";

import Navbar from "../../features/Navbar";
import Welcome from "./Welcome";
import PageSelector from "./PageSelector/PageSelector";
import FilterBy from "../../components/FilterBy";
import Requests from "../../features/Requests";
import MVRequests from "../../features/MVRequests";

import requestData from "../../utils/constants/data";
import MVRequestData from "../../utils/constants/data";

import homeRequestCheck from "../../utils/assets/homeRequestCheck";

import "./Homepage.style.css";

const Homepage = () => {
  const [requestPage, setRequestPage] = useState(true);
  const [roadmapPage, setRoadmapPage] = useState(false);

  return (
    <div>
      <Navbar />
      <Welcome />

      <PageSelector
        requestPage={requestPage}
        setRequestPage={setRequestPage}
        roadmapPage={roadmapPage}
        setRoadmapPage={setRoadmapPage}
      />

      <div className="homepage-requests mx-sm-5 mx-0 rounded-2 p-3 w-sm-100">
        <FilterBy />

        <div className="d-flex mt-3 flex-wrap">
          {homeRequestCheck(requestPage, requestData)}
          <Requests requests={requestData} />
          <MVRequests requests={MVRequestData} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
