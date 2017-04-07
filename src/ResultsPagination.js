import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router'

// const styles = {
//
// };

function getPath(query, page) {
  const {city, language, gender} = query;
  return  `/doctors?city=${city}&language=${language}` +
          `&gender=${gender}&page=${page}`;
}

// let path = `?city=${city}&language=${language}&gender=${gender}&page=${0}`;
// browserHistory.push(`/doctors${path}`);

export default class ResultsPagination extends Component {
  constructor (props) {
    super (props);

    this.state = {
      pageCount: this.props.pageCount,
      query: this.props.query
    }
    // this.someMethod = this.someMethod.bind(this);
  }

  render () {
    let paginationReturn;
    const pageIems = [];
    const lastPage = this.props.pageCount - 1;
    const currentPage = parseInt(this.props.query.page);
    const query = this.props.query;

    if(currentPage === 0) {
      pageIems.push(
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
      );
    }
    else {
      pageIems.push(
        <PaginationItem>
          <PaginationLink previous href={getPath(query, currentPage-1)} />
        </PaginationItem>
      );
    }

    for(let page = 0; page < lastPage+1; page++) {
      if(page === currentPage) {
        pageIems.push(
          <PaginationItem active>
            <PaginationLink href={getPath(query, page)}>
              {`${page+1}`}
            </PaginationLink>
          </PaginationItem>
        );
      }
      else {
        pageIems.push(
          <PaginationItem >
            <PaginationLink href={getPath(query, page)}>
              {`${page+1}`}
            </PaginationLink>
          </PaginationItem>
        );
      }


    }

    if(currentPage === lastPage) {
      pageIems.push(
        <PaginationItem disabled>
          <PaginationLink next href="#" />
        </PaginationItem>
      );
    }
    else {
      pageIems.push(
        <PaginationItem >
          <PaginationLink next href={getPath(query, currentPage+1)} />
        </PaginationItem>
      );
    }

    if(this.props.size === 'sm') {
      paginationReturn = <Pagination size='sm' >{pageIems}</Pagination>;
    }
    else if(this.props.size === 'lg') {
      paginationReturn = <Pagination size='lg' >{pageIems}</Pagination>;
    }
    else {
      paginationReturn = <Pagination >{pageIems}</Pagination>;
    }

    return (
      paginationReturn
      );
  }

}
