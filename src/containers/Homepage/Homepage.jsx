import { useState } from "react";

import Navbar from "../../features/Navbar";
import Welcome from "./Welcome";
import PageSelector from "./PageSelector/PageSelector";
import FilterBy from "../../components/FilterBy";
import Requests from "../../features/Requests";
import MVRequests from "../../features/MVRequests";

import requestData from "../../utils/constants/data";
import MVRequestData from "../../utils/constants/data";

import "./Homepage.style.css";
import { FaCheck } from "react-icons/fa";

const Homepage = () => {
  const [requestPage, setRequestPage] = useState(true);
  const [roadmapPage, setRoadmapPage] = useState(false);

  // console.log(requestData);

  function check() {
    if (requestPage) {
      requestData.requestData.map((request) => {
        request.requestPage = true;
      });
    } else {
      requestData.requestData.map((request) => {
        request.requestPage = false;
      });
    }
  }

  console.log(requestData.requestData);

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

      <div className="homepage-requests mx-5 rounded-2 p-3">
        <FilterBy />

        <div className="d-flex mt-3 requests-container flex-wrap">
          {check()}
          <Requests requests={requestData} />
          <MVRequests requests={MVRequestData} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
