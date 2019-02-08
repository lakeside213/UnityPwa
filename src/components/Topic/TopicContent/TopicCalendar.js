import React, { Component } from "react";

class TopicCalendar extends Component {
  render() {
    return (
      <div class="topics__calendar">
        <div class="calendar">
          <div class="calendar__top">
            <a href="#" class="calendar__btn calendar__btn--c-01">
              <i class="icon-Calender" />
            </a>
          </div>
          <div class="calendar__center">
            <div class="calendar__first">Jun 12</div>
            <div class="calendar__range">
              <div class="calendar__current">
                <p>31 / 75</p>
                <span>Jun 17</span>
              </div>
            </div>
            <div class="calendar__last">6h ago</div>
          </div>
          <div class="calendar__bottom">
            <a href="#" class="calendar__btn calendar__btn--c-01">
              <i class="icon-Track" />
            </a>
            <a href="#" class="calendar__btn calendar__btn--c-02">
              <i class="icon-Reply_Fill" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopicCalendar;
