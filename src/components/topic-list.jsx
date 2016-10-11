var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function() {
    return <div className="list-group">
      Topic List
      <ul>
        {this.renderTopics()}
      </ul>
    </div>
  },
  renderTopics: function() {
    return this.state.topics.map(function(topic, index) {
      console.log(topic)
      return <li key={index}>
        {topic.name}
      </li>
    });
  },
  onChange: function(event, topics) {
    this.setState({topics: topics})
  }
});
