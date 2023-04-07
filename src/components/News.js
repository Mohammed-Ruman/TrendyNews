import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  apikey = "2a537f4446894f4aa3bb535f4ea90264";
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    heading: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apikey}&pageSize=5`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      publishedAt: parsedData.publishedAt,
      author: parsedData.author,
    });
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.apikey}&page=${
      this.state.page + 1
    }&pageSize=5`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      publishedAt: parsedData.publishedAt,
      author: parsedData.author,
    });
  };

  render() {
    return (
      <div className="container my-3 ">
        <h1 style={{ textAlign: "center", color: "white", marginTop: "75px" }}>
          TrendyNews-Top {this.props.heading} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
              {this.state.articles
                .filter((e) => e !== null)
                .map((e) => {
                  return (
                    <div className="col my-3" key={e.url}>
                      <Newsitem
                        title={e.title}
                        description={e.description}
                        imageUrl={e.urlToImage}
                        url={e.url}
                        publishedAt={e.publishedAt}
                        author={e.author}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
