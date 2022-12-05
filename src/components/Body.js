import React, { useEffect, useState } from 'react'
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
  });
const openai = new OpenAIApi(configuration);


const Body = () => {

    const [productName, setProductName] = useState("")
    const [description, setDescription] = useState("")
    const [output, setOutput] = useState("")
    const [tone, setTone] = useState("")

    const callApi = async() =>{
       
       try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `create a array of three decriptions of the product below\n\nproduct name : ${productName} \ndescription : ${description}\ntone : ${tone}\n`,
            temperature: 0.7,
            max_tokens: 1097,
            top_p: 1,
            frequency_penalty: 0.09,
            presence_penalty: 0.09,
            })
            console.log(response?.data)
            setOutput(response?.data.choices[0].text)
        } catch (error) {
        console.log(error.message)
       }
    }

    const submitButtonHandler = async(event)=>{
        event.preventDefault()
        console.log("before");
        callApi();
       console.log("afterHit");
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
            <label >Output</label>
            <input value ={output}></input>
            <button onClick={submitButtonHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Body