import { createContext, useReducer, useState } from "react";

export const PostContext = createContext({
  postList: [],
  tabName: "Home",
  setTabName: () => {},
  addPost: () => {},
  handleDelete: () => {},
  handleClick: () => {},
});

const postListReducer = (currPostList,action)=>{
  let newPostList = currPostList;
  if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);

  }else if(action.type === "ADD_POST"){
    newPostList = [action.payload,...currPostList];
  }
  return newPostList;
}
const PostContextProvider = ({children})=>{
  const [postList, dispatchpostList]= useReducer(postListReducer, DEFAULT_POST_LIST)

  let [tabName, setTabName] = useState("Home");
  // let [postList, setPostList] = useState([DEFAULT_POST_LIST]);

 

  const addPost = (userID,postImage,postTitle,postCotent,postTags,postReaction)=>{
    console.log(`${postTags[1]}, ${postImage}`)

    dispatchpostList({
      type:"ADD_POST",
      payload:{
        id: Date.now(),
        userId:userID,
        title: postTitle,
        disc:postCotent,
        hash1:postTags[0] ,
        hash2:postTags[1] ,
        hash3:postTags[2] ,
        hash4:postTags[3] ,
        likecount: postReaction,
        img:postImage,
        
      }
    })

  }

  let handleDelete = (postId) => {
    dispatchpostList({
      type:"DELETE_POST",
      payload:{
        postId
      }
    })
  };

  let handleClick = (tab) => {
    setTabName(tab);
    console.log(tab);
  };


    return <PostContext.Provider value={{tabName,setTabName,postList,handleDelete,handleClick, addPost}}>
        {children}
    </PostContext.Provider>
}

const DEFAULT_POST_LIST = [
  {
    id: 1,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 105,
    img: "https://images.unsplash.com/photo-1727112184202-ad5d9a803579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D",
    title: "This Is Me",
    disc: "b sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
  },
  {
    id: 2,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 15,
    img: "https://images.unsplash.com/photo-1727271550094-fd70164ec010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
    title: "My Travel History",
    disc: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
  },
  {
    id: 3,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 205,
    img: "https://plus.unsplash.com/premium_photo-1726992603388-0c679297ae09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
    title: "My Book Collections",
    disc: "which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    id: 4,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 95,
    img: "https://images.unsplash.com/photo-1726211438453-2996fec54c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
    title: "Fashion Spot",
    disc: "b sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
  },
  {
    id: 5,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 75,
    img: "https://images.unsplash.com/photo-1727271173705-c9c6fad3acbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    title: "Best Market Places ",
    disc: "by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  },
  {
    id: 6,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 55,
    img: "https://images.unsplash.com/photo-1727324358652-e82abf20aad2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    title: "Indian History",
    disc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over",
  },
  {
    id: 7,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 75,
    img: "https://plus.unsplash.com/premium_photo-1695219820238-34851be608fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D",
    title: "Family tree In India",
    disc: "lege in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word",
  },
  {
    id: 8,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 52,
    img: "https://images.unsplash.com/photo-1568137224279-f19f0f825447?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D",
    title: "my Scchool certificate",
    disc: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
  },
  {
    id: 9,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 35,
    img: "https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Frontend Skills",
    disc: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ",
  },
  {
    id: 10,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 65,
    img: "https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Frontend Frameworks",
    disc: "b sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
  },
  {
    id: 11,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 55,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Learn Python Today",
    disc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
  },
  {
    id: 12,
    hash1: "Travel",
    hash2: "Popular",
    hash3: "myLife",
    hash4: "Fashion",
    likecount: 45,
    img: "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2fGVufDB8fDB8fHww",
    title: "Become Developer In India",
    disc: "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over",
  },
]

export default PostContextProvider;