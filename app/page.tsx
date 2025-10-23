'use client'
import Image from "next/image";
export default function Home() {

  const handlesubmit = async(e:any) =>{
    e.preventDefault();
    const data = {username:e.target.name.value,email:e.target.email.value,message:e.target.message.value}
    const res = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  }
  return (
    <>
    <form onSubmit={handlesubmit} action="" method="post" >
      <input type="text" name="name" placeholder="enter your name" />
      <input type="text" name="email" placeholder="enter your email"/>
      <input type="text" name="message" placeholder="enter your message"/>
      <input type="submit" value="submit your issues"/>
    </form>
    </>
  );
}
