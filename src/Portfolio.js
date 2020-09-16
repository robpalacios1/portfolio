import React, { Fragment } from "react";
import { Card, Image } from "semantic-ui-react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <Fragment>
      <div>
        <h2 className="portfolio">Portafolio/Portfolio</h2>
      </div>
      <div className="container">
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Roberto is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
        </Card>
      </div>
    </Fragment>
  );
}

export default Portfolio;
