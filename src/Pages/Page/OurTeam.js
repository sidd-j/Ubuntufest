import React from "react";
import "../Styles/OurTeam.css";
import Layout from "../../layout"; // Assuming Layout is your header/footer wrapper

const teamData = [
  { src: require("../../images/p1.jpg"), name: "Sarvambh Churmure" },
  { src: require("../../images/Vaishnavi.jpeg"), name: "Vaishnavi  Gawade" },
  { src: require("../../images/p3.jpg"), name: "Leader 3" },
  { src: require("../../images/AjayPrajapati.jpeg"), name: "Ajay Prajapati" },
  {
    src: require("../../images/SharvariManjrekar.jpeg"),
    name: "Sharvar Manjrekar",
  },
  { src: require("../../images/HariOm.jpeg"), name: "Hari Om " },
  { src: require("../../images/p3.jpg"), name: "Member 4" },
  { src: require("../../images/KshitijShirke.jpeg"), name: "Kshitij Shirke " },
  { src: require("../../images/p11.jpeg"), name: "Member 6" },
  { src: require("../../images/AshikaShukla.jpeg"), name: "Ashika Shukla " },
  { src: require("../../images/p1.jpg"), name: "Member 8" },
  { src: require("../../images/p2.jpg"), name: "Member 9" },
];

const OurTeam = () => {
  return (
    <Layout>
      <div className="ourTeam-container">
        {/* Top Section */}
        <div className="ourTeam-topRow">
          <h3 className="ourTeam-groupHeading">Group 1</h3>
          <div className="top_row">
            {teamData.slice(0, 2).map((member, index) => (
              <div key={index} className="ourTeam-member">
                <img
                  src={member.src}
                  alt={member.name}
                  className="ourTeam-image-top"
                />
                <p className="ourTeam-name">{member.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="ourTeam-bottomSection">
          {/* Group 1 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">Registration Team</h3>
            <div className="ourTeam-pair">
              {teamData.slice(3, 5).map((member, index) => (
                <div key={index} className="ourTeam-member">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="ourTeam-image"
                  />
                  <p className="ourTeam-name">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Group 1 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">Registration Team</h3>
            <div className="ourTeam-pair">
              {teamData.slice(3, 5).map((member, index) => (
                <div key={index} className="ourTeam-member">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="ourTeam-image"
                  />
                  <p className="ourTeam-name">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Group 1 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">Registration Team</h3>
            <div className="ourTeam-pair">
              {teamData.slice(3, 5).map((member, index) => (
                <div key={index} className="ourTeam-member">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="ourTeam-image"
                  />
                  <p className="ourTeam-name">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">Group 2</h3>
            <div className="ourTeam-pair">
              {teamData.slice(5, 7).map((member, index) => (
                <div key={index} className="ourTeam-member">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="ourTeam-image"
                  />
                  <p className="ourTeam-name">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
