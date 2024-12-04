import React from "react";
import "../Styles/OurTeam.css"; // Import the updated CSS
import Layout from "../../layout";

const teamData = {
  "CL": [
    { src: require("../../images/SarvambhChurmure.jpeg"), name: "Sarvambh Churmure" },
    { src: require("../../images/Vaishnavi.jpeg"), name: "Vaishnavi Gawade" },
  ],
  "ACLs": [
    { src: require("../../images/AshikaShukla1.jpeg"), name: "Ashika Shukla" },
    { src: require("../../images/SachinTiwari.jpeg"), name: "Sachin Tiwari" },
  ],
  "O&LD": [
    { src: require("../../images/SujalSawant.jpg"), name: "Sujal Sawant" },
    { src: require("../../images/Hariom.jpg"), name: "Hariom" },
    { src: require("../../images/Chinmay.jpg"), name: "Chinmay" },
    { src: require("../../images/Dhanashree.jpg"), name: "Dhanashree" },
  ],
  "Registration Team": [
    { src: require("../../images/SharvariManjrekar.jpeg"), name: "Sharvari Manjrekar" },
    { src: require("../../images/AjayPrajapati.jpeg"), name: "Ajay Prajapati" },
  ],
  "Creative Team": [
    { src: require("../../images/TejasKandalkar.jpg"), name: "Tejas Kandalkar" },
    { src: require("../../images/AjayPrajapati.jpeg"), name: "Vedika" },
  ],
  "Marketing Team": [
    { src: require("../../images/ShreePillay.jpg"), name: "Shree Pillay" },
    { src: require("../../images/Sahil.jpg"), name: "Sahil" },
    { src: require("../../images/PrathamShinde.jpg"), name: "Pratham Shinde" },
  ],
  "Event Team": [
    { src: require("../../images/ZohaShaik.jpg"), name: "Zoha Shaik" },
    { src: require("../../images/PradneshKalsekar.jpg"), name: "Pradnesh Kalsekar" },
    { src: require("../../images/KshitijShirke.jpeg"), name: "Kshitij Shirke" },
  ],
  "Social Media Team": [
    { src: require("../../images/KasimAnsari.jpg"), name: "Kasim Ansari" },
    { src: require("../../images/TanmayAnavkar.jpg"), name: "Tanmay Anavkar" },
  ],
  "Cultural Team": [
    { src: require("../../images/Pallavi.jpg"), name: "Pallavi" },
    { src: require("../../images/YashKate.jpg"), name: "Yash Kate" },
  ],
};

const OurTeam = () => {
  return (
    <Layout>
      <div className="ourTeam-container">
        {Object.entries(teamData).map(([teamName, members], idx) => (
          <div key={idx} className="ourTeam-group">
            <h3 className="ourTeam-groupHeading">{teamName}</h3>
            <div
              className={`ourTeam-grid ${members.length === 2 ? "centered-two" : ""}`}
            >


              {members.map((member, index) => (
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
        ))}
      </div>
    </Layout>
  );
};

export default OurTeam;
