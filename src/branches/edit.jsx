import React, { Component } from "react";

class Edit extends Component {

  render() {

    const { incomes } = this.props;

    return (
      <>
        <div className="edit-box">
          <div id="edit-header">
            <i className="fa fa-pen"></i>
            <span className="hero-txt edit-hero-txt"> Edit Income:</span>
          </div>

          <a href="/incomes" id="view-bttn">
            <i className="fa fa-eye"></i> View all
          </a>

          <h3 id="prompt">
            <i className="fa fa-check-double"></i> Income Updated successfully !
          </h3>

          <div className="edit-frame">
            <div className="row-1">
              <div id="title">
                <label className="label">
                  <span>*</span> Title
                </label>
                <input type="text" size="60" className="edit-title" />
              </div>

              <div id="category">
                <label>
                  <span>*</span> Category
                </label>

                <select className="select edit-select">
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
                <input type="text" size="35" className="edit-uniform" />
              </div>

              <div id="invc">
                <label>Invoice Number</label>
                <input type="text" size="35" className="edit-invc" />
              </div>

              <div id="date">
                <label>
                  <span>*</span> Income date
                </label>
                <input type="date" className="edit-date" />
              </div>
            </div>

            <div>
              <label>Note:</label>
              <textarea className="notes edit-notes" cols="120" rows="5">
                Note
              </textarea>
            </div>

            <div className="add-box">
              <a href="#" className="add-inc-btn update">
                Update Income <i className="fa fa-plus-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Edit;
