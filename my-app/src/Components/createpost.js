import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../Styles/createpost.css';

const EMOJI_API_KEY = '1025bc012266b6a5a3eecd2076d54d894e99eda4'; // need env later
let allEmojis = [];

export const CreatePost = ({ user }) => { // user prop
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts') // get user post
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  function toggleEmojiPanel() {
    const container = document.getElementById('emoji-container');
    const displayStyle = container.style.display;

    if (displayStyle === 'none' || displayStyle === '') {
      container.style.display = 'block';

      fetch(`https://emoji-api.com/emojis?access_key=${EMOJI_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          allEmojis = data;
          displayEmojis(data);
        })
        .catch(error => console.error('Error fetching emojis:', error));
    } else {
      container.style.display = 'none';
    }
  }

  function displayEmojis(emojis, limit = 100) {
    const container = document.getElementById('emoji-grid');
    container.innerHTML = '';

    if (Array.isArray(emojis) && emojis.length > 0) {
      emojis.slice(0, limit).forEach(emoji => {
        const emojiElement = document.createElement('span');
        emojiElement.textContent = emoji.character;
        emojiElement.onclick = () => insertEmoji(emoji.character);
        container.appendChild(emojiElement);
      });
    } else {
      container.textContent = 'No emojis found. Try a different search!';
    }
  }

  function searchEmojis() {
    const searchTerm = document.getElementById('emoji-search').value.toLowerCase();
    const filteredEmojis = allEmojis.filter(emoji => emoji.slug.includes(searchTerm));
    displayEmojis(filteredEmojis);
  }

  function insertEmoji(emoji) {
    const postcontent = document.getElementById('post-content');
    postcontent.value += emoji;
    postcontent.focus();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/posts', { // need post request
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
      .then(response => response.json())
      .then(data => {
        setPosts([...posts, data]);
        setTitle('');
        setContent('');
      })
      .catch(error => console.error('Error posting:', error));
  };

  const handleDeleteClick = async (postId) => {
    try {
      const response = await fetch(`/delete/${postId}`, {  // need delete request (unique)
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postId })
      });

      const data = await response.json();

      if (data.status === 'success') {
        setPosts(posts.filter(post => post.id !== postId));
      } else {
        console.error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="content-container">
      <div className="gridItem1">
        <section className="post-form">
          <h1 className="create-post-header">Create A New Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="create-post-container">
              <textarea
                id="post-title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
              <textarea
                id="post-content"
                rows="15"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={`What's on your mind?`}
              />
            </div>
            <div className="button-row">
              <button type="button" className="emoji-button" onClick={toggleEmojiPanel}>
                <FontAwesomeIcon icon={faSmile} />
              </button>
              <button type="submit" className="post-button">Post</button>
            </div>
          </form>
          <div id="emoji-container" className="emoji-panel" style={{ display: 'none' }}>
            <textarea
              id="emoji-search"
              rows="1"
              name="filter-emojis"
              onInput={searchEmojis}
              placeholder="Search for emojis..."
            />
            <div id="emoji-grid"></div>
          </div>
        </section>
      </div>
      <div className="gridItem2">
        <h1>Your Recent Posts</h1>
        <section className="posts-list">
          {posts.length ? (
            <ul>
              {posts.map(post => (
                <li key={post.id} className="post">
                  <div className="post-content preserve-newlines">
                    <h1 className="spanTitle">{post.title}</h1>
                    <p>Posted By: {post.username} on {new Date(post.timestamp).toLocaleString()}</p>
                    <p className="spanContent">{post.content}</p>
                    <div className="post-status-bar">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="delete-button"
                          onClick={() => handleDeleteClick(post.id)}
                        />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No posts for now</p>
          )}
        </section>
      </div>
    </div>
  );
};