function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

class QuoteBox extends React.Component {


  constructor(props) {
    super(props);_defineProperty(this, "randomQuote",



















    () => {
      const i = Math.floor(Math.random() * this.props.quotesArray.quotes.length);
      console.log(`quotesArray is ${JSON.stringify(this.props.quotesArray.quotes[i])}`);
      const quote = this.props.quotesArray.quotes[i].quote;
      const author = this.props.quotesArray.quotes[i].author;
      this.setState({
        quote: quote,
        author: author });

    });props.quotesArray = [];fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then(response => response.json()).then(data => {this.props.quotesArray = data;this.randomQuote();});this.state = { clicked: false, quote: "", author: "" };this.randomQuote = this.randomQuote.bind(this);this.handleClick = this.handleClick.bind(this);this.handleTweet = this.handleTweet.bind(this);}

  handleClick() {
    this.randomQuote();
  }

  handleTweet() {
    location.href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.quote}"${this.state.author}`;
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { className: "quote-text" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-quote-left" }), /*#__PURE__*/
      React.createElement("span", { id: "text" }, this.state.quote), /*#__PURE__*/
      React.createElement("i", { className: "fa fa-quote-right" })), /*#__PURE__*/

      React.createElement("div", { className: "quote-author" }, "-", /*#__PURE__*/

      React.createElement("span", { id: "author" }, this.state.author)), /*#__PURE__*/

      React.createElement("div", { className: "buttons" }, /*#__PURE__*/
      React.createElement("a", { className: "button", id: "tweet-quote", title: "Tweet this quote!", target: "_top", href: `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.quote}"${this.state.author}` }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-twitter" })), /*#__PURE__*/

      React.createElement("a", { className: "button", id: "tumblr-quote", title: "Post this quote on tumblr!", target: "_blank" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-tumblr" })), /*#__PURE__*/

      React.createElement("button", { className: this.state.clicked ? "clicked" : "", id: "new-quote", onClick: this.handleClick }, "New quote"))), /*#__PURE__*/




      React.createElement("div", { className: "footer" }, "by", /*#__PURE__*/

      React.createElement("a", { href: "https://codepen.io/noemie_brancourt/" }, "noemie"))));





  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(QuoteBox, null), document.getElementById("wrapper"));