"use client";
import {useState, useEffect} from "react";
import {supabase} from "../lib/supabaseClient";

export default function CMS () {
const [posts, setPosts] = useState ([]);
const [title, setTitle] = useState ("");
const [description, setDescription] = useState ("");
const [errors, setErrors] = useState ({});

function formValidation (title) {
    const errors = {};
    if (title.length < 3 || title.length > 100) {
        errors.title = "Title must be between 3 and 100 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
        
}

useEffect(() => {
    fetchPosts();
  }, []);



  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: false });
      setPosts(data);
  }

  async function addPosts() {
  if(!formValidation(title)) return;
  await supabase.from("posts").insert([{title, description }]);
  setTitle("");
  setDescription ("");
  fetchPosts();
    }

  async function deletePosts (id){
    await supabase.from("posts").delete().eq("id", id);
    fetchPosts();
  }

return (
    <>
    {/* Form section */}
    <div className="mx-10">
        <h1 className="flex justify-center text-4xl font-bold my-5">Post Form</h1>

        <div className="flex flex-col gap-2 justify-center">
            <label>Post Title</label>
        <input className = "border border-grey-500 rounded-lg px-2 py-1" 
            value={title} onChange={(e) => setTitle(e.target.value)} />

        {errors.title && <p className="text-red-500">{errors.title} </p>}

        <label>Post Description</label>
        <input className = "border border-grey-500 rounded-lg px-2 py-1" 
            value={description} onChange={(e) => setDescription (e.target.value)}/>
         </div>
        <button className = "border border-pink-500 py-1 px-2 mt-5 cursur-pointer hover:bg-pink-100 rounded-lg" 
            onClick={addPosts}> Add Posts </button> 
    </div>

    {/* //fetch post section */}
    <h1 className="flex justify-center text-4xl font-bold my-5">
        Post management
        </h1>
    <div className = "grid grid-cols-3 gap-4">
        {posts.map((post)=>(
        <> 
            <div className ="border-2 border-grey-500 shadow-lg p-5">
            <div className="text-xl font-bold my-5">{post.title}</div>
            <div className="text-black line-clamp-2">{post.description}</div>
            <button className="border-2 border-red-500 py-1 px-1 cursur-pointer hover:bg-red-100 rounded-lg"
            onClick={()=> deletePosts(post.id)}>Delete</button>
            </div>
        </>
        ))}
        </div>
</>
);
}
