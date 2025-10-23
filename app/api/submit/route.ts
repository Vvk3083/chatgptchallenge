import { connectToDB } from "@/lib/mongo";
import { FormData } from "@/models/formData";

export async function POST(req:any){
    connectToDB() 
    const {name,email,message} = await  req.json();
    const newEntry = new FormData({
        name : name,
        email : email,
        message : message
    })
    await newEntry.save();
    return new Response(JSON.stringify({ message: "Data saved successfully!" }), { status: 200 });
}