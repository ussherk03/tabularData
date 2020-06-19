import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './fonts/css/all.css';
import './App.css';

// Create Context
let Context = React.createContext();

class Provider extends Component {
  state = [
    // { title: 'Fees', category: 'tuition', amount: 300, invNum: '002', date: '23-03-99', note: 'My Payment' },
    { title: 'Fees', category: 'tuition', amount: 300, invNum: '001', date: '23-03-99', note: 'My Payment' },
    { title: 'SRC', category: 'tuition', amount: 400, invNum: '002', date: '26-06-99', note: 'My Dues' },
    { title: 'PTA', category: 'tuition', amount: 500, invNum: '003', date: '29-09-99', note: 'My Check' }
  ]


  render() {
    return (
      <Context.Provider value={{
        state: this.state,


        delInc: (e) => {
          let target = e.target.closest('tr');
          console.log(target);
          let parent = document.querySelector('.table-row');
          let arrParent = Array.from(parent.children);
          let index = arrParent.findIndex(index => index === target);
          let state = this.state.splice(index, 1);

          if (this.state.length === 0) {
            document.querySelector('#display').style.display = 'block';
          }
        },


        addInc: () => {

          let state = [...state, {
            title: 'Mass', category: 'tuition', amount: 500, invNum: '003', date: '29-09-99', note: 'My Check'
          }];
          console.log(state);
          this.setState({ state });
        }

        // this.setState({
        //   state : this.state.push({
        //     title: 'PTA', category: 'tuition', amount: 500, invNum: '003', date: '29-09-99', note: 'My Check' 
        //   })
        // })
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }

}


/****INCOME COMPONENT */
function Income({ index, income }) {

  return (
    <Context.Consumer>
      {(c) => (
        <React.Fragment>
          {/* { title: 'Fees', category: 'tuition', amount: 300, invNum: '002', date: '23-03-99', note: 'My Payment' }*/}
          <td className="title">{c.state[index].title}</td>
          <td className="category">{c.state[index].category}</td>
          <td className="amnt">{c.state[index].amount}</td>
          <td className="invc-num">{c.state[index].invNum}</td>
          <td className="date">{c.state[index].date}</td>
          <td className="note">{c.state[index].note}</td>
          <td className="action">
            <a href="/edit" id="edit-bttn">
              <i className="fa fa-pen-nib"></i>
            </a>

            <a href="#!" id="del-bttn" onClick={c.delInc}>
              <i className="fa fa-trash"></i>
            </a>
          </td>
        </React.Fragment>
      )}
    </Context.Consumer>

  );
}

/** INCOMES COMPONENT */
function Incomes() {

  return (
    <Context.Consumer>
      {(c) => (

        <>
          <div id="income-header" onLoad={c.addInc()}>
            <i className="fa fa-coins"></i>
            <span className="hero-txt"> Income</span>
          </div>

          <a href="/add" id="add-inc-bttn">
            <i className="fa fa-plus-circle"></i> Add Income
        </a>

          <div id="display">No Incomes to Display</div>

          <table>
            <tr className="header-row">
              <th className="title">Title</th>
              <th className="category">Category</th>
              <th className="amnt">Amount</th>
              <th className="invc-num">Invoice No.</th>
              <th className="date">Date</th>
              <th className="note">Note</th>
              <th className="action">Action</th>
            </tr>

            <Context.Consumer>
              {(c) => (
                <>
                  <tbody className="table-row">
                    {c.state.map((income, index) => (
                      <tr>
                        <Income
                          key={index}
                          income={income}
                          index={index}
                        />
                      </tr>
                    ))}
                  </tbody>
                </>
              )}

            </Context.Consumer>
          </table>

        </React.Fragment>)}
    </Context.Consumer>
  )
}

function Edit() {

  return (
    <Context.Consumer>
      {(c) => (
        <>
          <div className="edit-box">
            <div id="edit-header">
              <i className="fa fa-pen"></i>
              <span className="hero-txt"> Edit Income</span>
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
                  <input type="text" size="60" />
                </div>

                <div id="category">
                  <label>
                    <span>*</span> Category
              </label>

                  <select className="select">
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
                  <input type="text" size="35" />
                </div>

                <div id="invc">
                  <label>Invoice Number</label>
                  <input type="text" size="35" />
                </div>

                <div id="date">
                  <label>
                    <span>*</span> Income date
              </label>
                  <input type="date" />
                </div>
              </div>

              <div>
                <label>Note:</label>
                <textarea className="notes" cols="120" rows="5">
                  Note
            </textarea>
              </div>

              <div className="add-box">
                <a href="#" className="add-inc-btn">Add New Income <i class="fa fa-plus-circle"></i></a>
              </div>
            </div>
          </div>
        </>
      )}
    </Context.Consumer>

  );
}


function Add() {
  return (
    <Context.Consumer>
      {(c) => (
        <div className="edit-box">
          <div id="edit-header">
            <i className="fa fa-pen"></i>
            <span className="hero-txt"> Add New Income</span>
          </div>

          <a href="/incomes" id="view-bttn">
            <i className="fa fa-eye"></i> View all
        </a>

          <h3 id="prompt">
            <i className="fa fa-check-double"></i> Income added successfully !
        </h3>

          <div className="edit-frame">
            <div className="row-1">
              <div id="title">
                <label className="label">
                  <span>*</span> Title
              </label>
                <input type="text" size="60" />
              </div>

              <div id="category">
                <label>
                  <span>*</span> Category
              </label>

                <select className="select">
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
                <input type="text" size="35" />
              </div>

              <div id="invc">
                <label>Invoice Number</label>
                <input type="text" size="35" />
              </div>

              <div id="date">
                <label>
                  <span>*</span> Income date
              </label>
                <input type="date" />
              </div>
            </div>

            <div>
              <label>Note:</label>
              <textarea
                className="notes"
                cols="120"
                rows="5"
                placeholder="Type Here..."
                defaultValue="Note"
              >
              </textarea>
            </div>

            <div className="add-box">
              <a href="#!" className="add-inc-btn" onClick={c.addInc}>
                Add New Income <i class="fa fa-plus-circle"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
}


/**** APP COMPONENT */



