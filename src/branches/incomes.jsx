import React, { Component } from 'react';
import Income from './income';

class Incomes extends Component {


  render() {
    const { incomes, delInc, editInc } = this.props;

    return (
      <>
        <div id="income-header">
          {/* <i className="fa fa-coins"></i> */}
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

          <tbody className="table-row">
            {incomes.map((income, index) => (
              <Income 
                key={index} 
                index={index}
                incomes={incomes} 
                income={income}
                delInc={delInc}
                editInc={editInc}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Incomes;
