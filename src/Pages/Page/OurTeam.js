import React from "react";
import "../Styles/OurTeam.css";
import Layout from "../../layout"; // Assuming Layout is your header/footer wrapper

const teamData = [
  { src: require("../../images/SarvambhChurmure.jpeg"), name: "Sarvambh Churmure" },
  { src: require("../../images/Vaishnavi.jpeg"), name: "Vaishnavi  Gawade" },
  { src: require("../../images/AshikaShukla1.jpeg"), name: "Ashika Shukla" },
  { src: require("../../images/SachinTiwari.jpeg"), name: "Sachin Tiwari" },
  { src: require("../../images/SharvariManjrekar.jpeg"), name: "Sharvar Manjrekar" },
  { src: require("../../images/AjayPrajapati.jpeg"), name: "Ajay Prajapati" },
  { src: require("../../images/p3.jpg"), name: "Tejas Kandalkar" },
  { src: require("../../images/KshitijShirke.jpeg"), name: "Vedika " },
  { src: require("../../images/p11.jpeg"), name: "Zoha Shaik" },
  { src: require("../../images/AshikaShukla.jpeg"), name: "Pradnesh Kalsekar " },
  { src: require("../../images/p1.jpg"), name: "Kshity Shirke" },
  { src: require("../../images/p2.jpg"), name: "Pallavi" },
  { src: require("../../images/p2.jpg"), name: "Yash Kate" },
  { src: require("../../images/p2.jpg"), name: "Sujal Sawant" },
  { src: require("../../images/p2.jpg"), name: "Hariom" },
  { src: require("../../images/p2.jpg"), name: "Chinmay" },
  { src: require("../../images/p2.jpg"), name: "Dhanashree" },
  { src: require("../../images/p2.jpg"), name: "Kasim Ansari" },
  { src: require("../../images/p2.jpg"), name: "Tanmay Anavkar" },
  { src: require("../../images/p2.jpg"), name: "Shree Pillay" },
  { src: require("../../images/p2.jpg"), name: "Sahil" },
  { src: require("../../images/p2.jpg"), name: "Pratham Shinde" },
];

const OurTeam = () => {
  return (
    <Layout>
      <div className="ourTeam-container">
        {/* Top Section */}
        <div className="ourTeam-topRow">
          <h3 className="ourTeam-groupHeading">CL</h3>
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
            <h3 className="ourTeam-groupHeading">ACL`s</h3>
            <div className="ourTeam-pair">
              {teamData.slice(2, 4).map((member, index) => (
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
            <h3 className="ourTeam-groupHeading">Registration Team</h3>
            <div className="ourTeam-pair">
              {teamData.slice(4, 6).map((member, index) => (
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

          {/* Group 3 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">Creative Team</h3>
            <div className="ourTeam-pair">
              {teamData.slice(6, 8).map((member, index) => (
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

          {/* Group 4 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">Event Team</h3>
            <div className="ourTeam-pair">
              {teamData.slice(8, 11).map((member, index) => (
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
          {/* Group 5 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">Cultural Team</h3>
            <div className="ourTeam-pair">
              {teamData.slice(11, 13).map((member, index) => (
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
          {/* Group 6 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">OHL</h3>
            <div className="ourTeam-pair">
              {teamData.slice(13, 17).map((member, index) => (
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
          {/* Group 7 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">Social Media Team</h3>
            <div className="ourTeam-pair">
              {teamData.slice(17, 19).map((member, index) => (
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
          {/* Group 8 */}
          <div className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">Marketing Team</h3>
            <div className="ourTeam-pair">
              {teamData.slice(19, 22).map((member, index) => (
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