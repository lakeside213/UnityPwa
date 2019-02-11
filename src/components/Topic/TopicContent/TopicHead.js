import React, { Component } from "react";
import axios from "axios";
import dateFns from "date-fns";
class TopicHead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    axios
      .post("http://localhost:8080/user", { id: this.props.userId })
      .then(res => {
        const user = res.data[0];
        this.setState({ user });
      });
  }

  render() {
    let { user } = this.state;
    console.log(user);
    if (!user) {
      return <div />;
    }
    return (
      <div class="topic__head">
        <div class="topic__avatar">
          <a href="#" class="avatar">
            <img
              src={`/assets/images/avatars/${
                !user.username ? "" : user.username.charAt(0).toUpperCase()
              }.svg`}
              alt="avatar"
            />
          </a>
        </div>
        <div class="topic__caption">
          <div class="topic__name">
            <a href="#">{user.username}</a>
          </div>
          <div class="topic__date">
            <i class="icon-Watch_Later" />
            {dateFns.distanceInWords(this.props.createdAt, new Date())}
          </div>
        </div>
      </div>
    );
  }
}

export default TopicHead;
