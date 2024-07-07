import React from 'react'

const Page = () => {
    const handleForm=async()=>{
      "use server"
      console.log("hello kenya")
    }
   
  return (
    <div>
        <form action={handleForm}>
           <input type="test"/>
           <button>Send</button>
        </form>
    </div>
  )
}

export default Page