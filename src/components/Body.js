import React, { useState } from 'react'

const Body = () => {

    const apiCall  = ()=>{
        return "heelo"
    }

    const [productName, setProductName] = useState("")
    const [description, setDescription] = useState("")
    const [tone, setTone] = useState("sdf")
    const submitButtonHandler = (event)=>{
        event.preventDefault()
        const values = apiCall()
    }

    const toneHandler = (e)=>{
        setTone (e.target.value)
    }

    const desciptionHandler = (e)=>{
        setDescription (e.target.value)
    }
    const productNameHandler = (e)=>{
        setProductName (e.target.value)
    }

  return (
    <div>
        <form>
            <label>Product Name</label>
            <input value ={productName} onChange={productNameHandler}></input>
            <label>Product Description</label>
            <input value ={description} onChange={desciptionHandler}></input>
            <label >Tone</label>
            <input value ={tone} onChange={toneHandler}></input>
            <button onClick={submitButtonHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Body