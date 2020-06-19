import React, { Component } from "react";

class Add extends Component {

  render() {
    const { addInc, viewAll } = this.props;

    return (
      <>
        <div className="edit-box">
          <div id="edit-header">
            <i className="fa fa-pen"></i>
            <span className="hero-txt"> Add New Income</span>
          </div>

          <a href="/incomes" id="view-bttn" onClick={() => viewAll()}>
            <i className="fa fa-eye"></i> View all
          </a>

          <h3 id="prompt">
            <i className="fa fa-check-double"></i> Income added successfully !
          </h3>

          <div className="edit-frame add-frame">
            <div className="row-1">
              <div id="title">
                <label className="label">
                  <span>*</span> Title
                </label>
                <input type="text" size="60" id="new-title" />
              </div>

              <div id="category">
                <label>
                  <span>*</span> Category
                </label>

                <select className="select new-cat">
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                  <option>Four</option>
                </select>
              </div>
            </div>

            <div className="row-2">
              <div id="uniform">
                <label>School uniform</label>
                <input type="text" size="35" id="new-uniform" />
              </div>

              <div id="invc">
                <label>Invoice Number</label>
                <input type="text" size="35" id="new-invc"/>
              </div>

              <div id="date">
                <label>
                  <span>*</span> Income date
                </label>
                <input type="date" id="new-date" />
              </div>
            </div>

            <div>
              <label>Note:</label>
              <textarea
                className="notes new-notes"
                cols="120"
                rows="5"
                placeholder="Type Here..."
                defaultValue="Note"
              ></textarea>
            </div>

            <div className="add-box">
              <a href="#!" className="add-inc-btn" onClick={() => addInc()}>
                Add New Income <i class="fa fa-plus-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Add;
