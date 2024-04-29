import React from "react";
import LangSlider from "../UI components/LangSlider";

function BrowsebyLanguage() {
  const newRelease = [
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/6669/1526669-a-76efd0c306cd",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/6668/1526668-a-ed367d61302a",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/6670/1526670-a-ec8fb58a5fb8"
  ];

  console.log("BrowseByLan.js")
  return (
    <div className="newReleaseContainer">
      <div className="newReleaseHeading d-flex justify-content-between align-items-center">
        <h3 className="">Browse by Language</h3>
      </div>
      <LangSlider movies={newRelease} />
    </div>
  );
}

export default React.memo(BrowsebyLanguage);
