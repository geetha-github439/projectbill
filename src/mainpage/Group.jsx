import React from 'react'
import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { Nav } from '../Nav';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';


export const Group = () => {

  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [expenceNamePopUp, setExpenceNamePopUp] = useState({ expencename: "", paidperson: "", totalamount: "" });

  const [view, setView] = useState(false);

  const [getAmount, setGetAmount] = useState([]);


  const [expenceData, setExpenceData] = useState([]);
  const [addFriend, setAddFriend] = useState([])


  const [show, setShow] = useState([]);
  const [error, setError] = useState("");
  const [state4, setState4] = useState();
  const friendName = useRef();
  
  const expence = useRef();
  const bill = useRef();
  const paid = useRef()
  const date = useRef();
  const [paidVal, setPaidVal] = useState([]);


  useEffect(() => {


    let a = localStorage.getItem("id");
    let data = {
      id: a
    }

    axios.post("http://localhost:8000/getfriendname", data).then(res => {


      setAddFriend(res.data)

    })

    axios.post("http://localhost:8000/expenceget", data).then(res => {

      setExpenceData(res.data)

    })
    axios.get("http://localhost:8000/signinfo", data).then(res => {
      setState4([...res.data])

    })

  }, [])

  




  const friendSubmit = (e) => {

    e.preventDefault()
    let abc = addFriend.filter((val) => {
      return val.friendname === friendName.current.value;
    })
    
    if (abc.length > 0) {
      setError(" Already exist in your grouop..!")


    }
    else {
      setError("")
      setState(!state)
      let a = localStorage.getItem("groupname");
      let b = localStorage.getItem("id")
      let name = friendName.current.value;
      console.log(friendName.current.value)
      let data = {
        friendname: name,

        groupname: a,
        id: b
      }

      
      setAddFriend((val) => [...val, data])
      axios.post("http://localhost:8000/friendname", data).then(res => {
        console.log(res)

      })
    }

  }
  const expenceSubmit = (e) => {
    
    e.preventDefault();
    let abc = expenceData.filter((val) => {
      return val.expencename === expence.current.value;
    })
    console.log(abc.length)
    if (abc.length > 0) {
      setError("Already do you have a expence with this name..!")


    }

  else{
    setError("")
    setState2(!state2)

    let expencename1 = expence.current.value
    let typebill = bill.current.value


    let data = {
      expencename: expencename1,
      amount: typebill,
      groupname: localStorage.getItem("groupname"),
      paidperson: paid.current.value,
      date: date.current.value,
      selected: selectedArr
    }


    setExpenceData((val) => [...val, data])

    

    axios.post("http://localhost:8000/expenceadd", data).then((res) => {
      console.log({ result: res });
      console.log('Expense Added');
      
    }).catch(err => {
      console.log(err)
    })
  }
  }



  const handleChange = () => {
    setError("")
    setState(!state)
  }
  const addExpencePopUp = () => {
    setError("")
    setState2(!state2)
  }

  const expenceDetailsPopUp = async (name, person, amount) => {
    setState3(!state3);
    setExpenceNamePopUp({ expencename: name, paidperson: person, totalamount: amount })
    let data = {
      expencename: name,

    }

    await axios.post("http://localhost:8000/getSelectedData", data).then((res) => {
      setShow(res.data)
    })






  }
  const selectedArr = []
  const handleChange1 = (event) => {
    let { value, checked } = event.target


    if (checked) {
      selectedArr.push(value)


    }

  }
  const closePopUp = () => {
    setState(!state)

  }
  const closePopUpExpence = () => {

    setState2(!state2)
  }
  const closePopUpCheck = () => {

    setState3(!state3)
  }
  const deleteFunction = (val) => {
    let a = window.confirm("delete confirm")
    if (a) {


      setAddFriend(addFriend.filter((pre) => pre.friendname !== val.friendname))
      let data = {
        friendname: val.friendname
      }

      axios.post("http://localhost:8000/deletefriend", data).then(res => {


      })


    }
  }
  const deleteExpence = (val) => {

    let a = window.confirm("confirm delete")
    if (a) {
      setExpenceData(expenceData.filter((vals) => vals.expencename !== val.expencename))
      let data = {
        expencename: val.expencename,
        groupname: localStorage.getItem("groupname")
      }
      
      axios.post("http://localhost:8000/deleteExpence", data)

    }

  }

  let userExpenceDetails = () => {
    setView(!view)
    console.log(view)
    console.log(localStorage.getItem("id"))
    console.log(localStorage.getItem("userid"))
    axios.get("http://localhost:8000/fetchdata").then((res) => {
      let data = res.data
      
      var paidval = data.filter((val) => {
        return localStorage.getItem("userid") === val.involvedid && val.paidperson !== val.involvedid
      })
      setPaidVal(paidval)
      var paidval1=data.filter((val)=>{
        return localStorage.getItem("userid") === val.paidperson && val.paidperson !== val.involvedid
      })
     setGetAmount(paidval1)
    })
  }



  return (
    <>
      <Nav />
      <div id="group-main-div">
        <div id="add-friends-button">
          <input type="button" value="Add Friends" id="add-frd-button" onClick={handleChange} />
          <p id="group-member-heading">Group members:</p>
          <p id="friend-names-div">You</p>
          {addFriend.map((val, index) => {

            if (localStorage.getItem("userid") !== val.friendname) {
              localStorage.getItem("userid")

              return <div id="friend-names-div"> <p key={index} id="groupmembers-name" > {val.friendname}</p><DeleteIcon onClick={() => deleteFunction(val)} id="moreverticon" /></div>
            }
          })}
        </div>
        <div>
        <h4 id="expence-id"><span style={{color:"Green",fontSize:"22px",textTransform: "capitalize" }}> {localStorage.getItem("groupname")}</span>  Expenses:</h4>
        <div id="expence-total-div">
          
          
          <div>{expenceData.map((val, index) => {
            return <div id="expence-div" key={index}>
              <table >
                <tr>
                  <th>Expence type</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>paidperson</th>
                  <th>Details</th>

                  <th>Delete</th>
                </tr>
                <tr>
                  <td id="expence-td">{val.expencename}</td>
                  <td id="expence-td">{val.amount}/-</td>
                  <td id="expence-td">{val.date}</td>
                  <td id="expence-td">{val.paidperson}</td>
                  <td id="expence-td"><input type="button" value="Check" id="expence-check-button" onClick={() => expenceDetailsPopUp(val.expencename, val.paidperson, val.amount)}></input></td>

                  <td><DeleteIcon onClick={() => deleteExpence(val)} id="expence-delete-icon" /></td>
                </tr>
              </table>
            </div>
          })
          }
          </div>
        </div>
        </div>
        {state ? <div id="pop-up">
          <CloseIcon id="close-icon" onClick={closePopUp} />
          <div id="pop-up-content-frnd">
            <form action="" onSubmit={friendSubmit}>

              <h4> Enter your Friend Name:</h4>
              <input type="text" ref={friendName} placeholder='Enter friend name' list="names" autoFocus/><br />
              <datalist id="names" >
                {state4.map((val, index) => {
                  if (localStorage.getItem("userid") !== val.userid)
                    return <option value={val.userid} key={index} className='frnd-name'>{val.userid}</option>
                })

                }
              </datalist>


              <span style={{ color: "red", marginLeft: "20px" }}>{error}</span><br />
              <input type="submit" id="pop-submit-button" /><br />


            </form>
          </div>
        </div> : ""}


        <input type="button" value="Add Expense" id="add-expence-button" onClick={addExpencePopUp}></input>
        {state2 ? <div id="expence-add-popup">
          <CloseIcon id="close-icon-inexpenceadd" onClick={closePopUpExpence} />
          <table>
            <div id="expence-add-popup-content">
              <form action="" onSubmit={expenceSubmit}>
                <tr>
                  <td>
                    <h4>Expense Name:</h4>
                    <input type="text" ref={expence} placeholder='Enter expense name' required autoFocus/><br />
                    <h4>Who Involved:</h4><br />

                    {addFriend.map((val, index) => {



                      return <div><input type="checkbox" key={index} id="check-box-addexpence" onClick={handleChange1} value={val.friendname} ></input>{val.friendname}</div>

                    })}

                  </td>
                  <td>  <h4>Enter Amount:</h4>
                    <input type="text" ref={bill} placeholder='Enter amount' maxLength={8} required ></input><br />
                    <h4>Who Paid:</h4>
                    <input type="text" ref={paid} placeholder=' Enter paid person name' list="name" required></input><br />
                    <datalist id="name" >
                    
                      {addFriend.map((val, index) => {

                        return <option value={val.friendname} key={index} className='frnd-name'>{val.friendname}</option>
                      })

                      }
                    </datalist>
                    <h4>Date:</h4>
                    <input type="date" ref={date} required></input><br /> </td>
                </tr>


                <span style={{ color: "red", marginLeft: "20px" }}>{error}</span><br />
                <input type="submit" id="pop-submit-button-inexpenceadd" /><br />



              </form>
            </div>
          </table>
        </div> : ""}

        {state3 ? <div id="expence-popup">
          <CloseIcon id="close-icon" onClick={closePopUpCheck} />
          <div id="expence-popup-content">
            <h3 style={{ color: "red", fontSize: "25px", marginLeft: "210px", textTransform: "capitalize" }}>{(expenceNamePopUp.expencename)}</h3>

            <h4 style={{ marginTop: "10px" }}>Total amount paid by: <span style={{ color: "green", textTransform: "capitalize" }}> {(expenceNamePopUp.paidperson)}</span></h4>

            <table >
              <tr>
                <td id="co1" ></td>
                <td id="co22" ></td>
              </tr>
            </table>
            <div>

              {
                show.map((val, index) => {


                  return <div key={index} >
                    <table >
                      <tr>

                        {val.paidperson === val.involvedid ? <td id="co">{val.involvedid} <span style={{ color: "green" }}>(paid person)</span></td> : <td id="co">{val.involvedid}</td>}

                       <td id="co2">{val.paidto}</td>
                      </tr>
                    </table> </div>
                })}

              <h3 id="expence-total">Total:<span id="expence-total-amount">{expenceNamePopUp.totalamount}/-</span></h3>

            </div>
          </div>
        </div> : ""}
        <div id="view-details">
          <button onClick={userExpenceDetails} id="view-details-button">{view ? "View less" : "View your details"}</button><br />

          {view ? <div id="div-view-details">
          <h4>You will get from:</h4>
            <table rules="all" border={1} cellPadding={3} style={{marginTop:"5px"}} id="get">
              <thead>
                <tr>
                  <th >Get From</th>
                  <th>Expense</th>
                  <th>Amount</th>
                </tr>
              </thead>
              {getAmount.map((val, index) => (
                  <tbody style={{textTransform: "capitalize" }}>
                    <tr>
                      <td>{val.involvedid}</td>
                      <td>{val.expencename}</td>
                      <td >{val.paidto}</td>
                    </tr>
                  </tbody>
              ))}



            </table>
            <h4>You need to pay:</h4>
            <table rules="all" border={1} cellPadding={3}  style={{marginTop:"5px"}} id="paid">
              <thead>
                <tr>
                  <th >Pay to</th>
                  <th>Expense</th>
                  <th>Amount</th>
                </tr>
              </thead>
              {paidVal.map((val, index) => (
                  <tbody style={{textTransform: "capitalize" }}>
                    <tr>
                      <td>{val.paidperson}</td>
                      <td>{val.expencename}</td>
                      <td >{val.paidto}</td>
                    </tr>
                  </tbody>
              ))}



            </table> 
            
            
            </div> : ""}
        </div>


      </div>

    </>
  )
}
