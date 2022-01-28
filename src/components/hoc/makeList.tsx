import React from "react";

import { Movie } from "../../interfaces";
import BallLoader from "../loader/bar";
import Overflow from "../loader/overflow";
import classes from "./makeList.module.css";

interface NewComponentProps {
  onSelectItem: (movieId: number) => void;
  onLoadData:(page:number)=>any;
}

interface NewComponentState {
  data: Movie[];
  currentPage: number;
  lastPage: number;
  isLoading: boolean;
  loadingMore: boolean;
}

function makeList(OriginalComponent: React.ComponentType<any | string>) {
  return class NewComponent extends React.Component<
    NewComponentProps,
    NewComponentState
  > {
    constructor(props: NewComponentProps) {
      super(props);
      this.state = {
        data: [],
        currentPage: 1,
        lastPage: 0,
        isLoading: true,
        loadingMore: false,
      };
    }

    componentDidMount() {
      const initialCall = async () => {
        // let movies = await apiProvider.getPopularMovies(currentPage)
        let movies = await this.props.onLoadData(1);
        this.setState({
          data: movies.results,
          isLoading: false,
          currentPage: 1,
          lastPage: movies.total_pages,
        });
      };
      initialCall();
    }

    loadMoreData = () => {
      this.setState({
        loadingMore: true,
      });
      this.props.onLoadData(this.state.currentPage+1).then((res:any) => {
        this.setState({
          loadingMore: false,
          data: [...this.state.data, ...res.results],
          currentPage: res.page,
        });
      });
    };

    render() {
      if (this.state.isLoading) {
        return <Overflow />;
      }

      return (
        <>
          <OriginalComponent {...this.props} data={this.state.data} />

          {!this.state.loadingMore &&
            this.state.currentPage !== this.state.lastPage && (
              <div className={classes.actions}>
                <button className={classes.button} onClick={this.loadMoreData}>
                  Load More
                </button>
              </div>
            )}
          {this.state.loadingMore && (
            <div className={classes.actions}>
              <BallLoader />
            </div>
          )}
        </>
      );
    }
  };
}

export default makeList;
