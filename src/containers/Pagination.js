import { Component } from 'react';

class Pagination extends Component {

  constructor(props){
    super(props)
    this.previousPageButton = this.previousPageButton.bind(this)
    this.nextPageButton = this.nextPageButton.bind(this)
    this.goToPage = this.goToPage.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props, nextProps)
    /* if (nextProps.page === this.props.page) {
      return false;
    } */
    return true;
  }

  previousPageButton = () => {
    return this.props.page > 1 ? true : false
  }

  nextPageButton = () => {
    return this.props.itemsLength < this.props.itemsPerPage ? false : true
  }

  goToPage = (num) => {
    let page = this.props.page
    let go = num === 1 ? page + 1 : page - 1
    // this.setState({ page: result }, () => this.props.nextAction(result))
    this.props.goToAction(go)
  }

  render() {
    return this.props.children({
      goToPage: this.goToPage,
      previousPageButton: this.previousPageButton(),
      nextPageButton: this.nextPageButton(),
    })
  }
}

export default Pagination;