import React from 'react'
import { useContext } from 'react'
import { CardContext } from '../../store/Card-Context-Store';
import CardList from '../CardList/CardList';
import CreatePostForm from '../CreatePostForm/CreatePostForm';

function MainContent() {
    const {tabName}= useContext(CardContext)
  return (
        <>
            {tabName==="Home"?<CardList/>:<CreatePostForm/>}
        </>
  )
}

export default MainContent