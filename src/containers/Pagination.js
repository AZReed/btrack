import { Component } from 'react';

class Pagination extends Component {

  state = {
    page: 1,
    warning: false
  }

  constructor(props){
    super(props)
    this.onDismiss = this.onDismiss.bind(this)
    this.previousPageButton = this.previousPageButton.bind(this)
    this.nextPageButton = this.nextPageButton.bind(this)
    this.goToPage = this.goToPage.bind(this)
  }

  onDismiss = () => {
    this.setState({warning: false})
  }

  componentDidUpdate = (prevProps, prevState) => {
    let page = this.state.page;
    let prev_page = page - 1;
    let diff = prevState.page - prev_page;
    if (this.props.items.length === 0 && page !== 1 && diff === 1) {
      this.setState({ page: prev_page, warning: true }, () => this.props.nextAction(prev_page))
    }
  }

  previousPageButton = () => {
    return this.state.page > 1 ? true : false
  }

  nextPageButton = () => {
    return this.props.items.length < this.props.itemsPerPage ? false : true
  }

  goToPage = (num) => {
    let page = this.state.page
    let result = num === 1 ? page + 1 : page - 1
    this.setState({ page: result }, () => this.props.nextAction(this.state.page))
  }

  render() {

    const { warning } = this.state;
    return this.props.children({
      onDismiss: this.onDismiss,
      goToPage: this.goToPage,
      previousPageButton: this.previousPageButton(),
      nextPageButton: this.nextPageButton(),
      warning
    })
  }
}

export default Pagination;