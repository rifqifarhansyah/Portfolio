import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Rifqi Farhansyah </span>
            from <span className="purple"> Magelang, Indonesia.</span>
            <br />I am a junior pursuing Bachelor Degree in Informatics Engineering in Institut Teknologi Bandung.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Read a scientific paper
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Lakon Menang Keri"{" "}
          </p>
          <footer className="blockquote-footer">Javanese Proverb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
