import React, { Component } from "react";
import API from "../../utils/API";
import { Article } from "../../components/Article";
import Jumbotron from "../../components/Jumbotron";
import { H1, H3 } from "../../components/Headings";
import { Container, Row, Col } from "../../components/Grid";
import { Card, CardHeading, CardBody } from "../../components/Card";

export default class SavedArticles extends Component {
  state = {
    savedArticles: [] //stores saved articles in state for rendering
  };

  //initial loading of saved articles
  // componentWillMount() {
  //   this.loadArticles();
  // }

  componentDidMount() {
    this.loadArticles();
  }

  //function that queries the API server and retrieves saved articles
  loadArticles = () => {
    API.getArticles().then(results => {
      this.setState({ savedArticles: [...results.data] });
    });
  };

  //function that queries API server and deletes articles
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(results => {
        //once deleted, they are removed from the state and articles are rendered
        let savedArticles = this.state.savedArticles.filter(
          article => article._id !== id
        );
        this.setState({ savedArticles: savedArticles });
        this.loadArticles();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-10" offset="sm-1">
            <Jumbotron>
              <H1 style={{ fontFamily: "Arial Black" }} className="text-center">
                Saved New York Times Articles
              </H1>
              <hr style={{ width: "60%" }} />
            </Jumbotron>
            <Card>
              <CardHeading style={{ backgroundColor: "#888" }}>
                <H3 style={{ fontFamily: "Arial", color: "white" }}>
                  Saved Articles
                </H3>
              </CardHeading>
              <CardBody>
                {this.state.savedArticles.length > 0 ? (
                  this.state.savedArticles.map((article, i) => (
                    <Article
                      key={i}
                      title={article.title}
                      url={article.url}
                      summary={article.summary}
                      date={article.date}
                      type="Delete"
                      onClick={() => this.deleteArticle(article._id)}
                    />
                  ))
                ) : (
                  <H1>You have no saved articles.</H1>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
