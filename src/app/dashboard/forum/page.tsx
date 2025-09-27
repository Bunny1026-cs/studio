'use client';
import { useState, useRef } from 'react';

type Post = {
  id: number;
  author: string;
  content: string;
  comments: string[];
  createdAt: string;
};

export default function ForumPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Alice",
      content: "This is a very long post about mental wellness. It contains a lot of useful information and personal experiences that might help others in the community. Feel free to read and comment! " +
        "Here is even more content to make this post longer and test the Read More functionality.",
      comments: ["Great post!", "Thanks for sharing!"],
      createdAt: new Date().toLocaleString(),
    },
  ]);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostAuthor, setNewPostAuthor] = useState('');
  const [posting, setPosting] = useState(false);
  const commentRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  // Read More toggle
  const handleReadMore = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  // Comment input change
  const handleCommentChange = (id: number, value: string) => {
    setCommentInputs({ ...commentInputs, [id]: value });
  };

  // Add comment to a post
  const handleAddComment = (id: number) => {
    if (!commentInputs[id]?.trim()) return;
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, comments: [...post.comments, commentInputs[id]] }
        : post
    ));
    setCommentInputs({ ...commentInputs, [id]: "" });
    setTimeout(() => {
      commentRefs.current[id]?.focus();
    }, 0);
  };

  // Create a new post
  const handleCreatePost = async () => {
    if (!newPostAuthor.trim() || !newPostContent.trim()) return;
    setPosting(true);
    setTimeout(() => {
      const newPost: Post = {
        id: posts.length + 1,
        author: newPostAuthor,
        content: newPostContent,
        comments: [],
        createdAt: new Date().toLocaleString(),
      };
      setPosts([newPost, ...posts]);
      setNewPostAuthor('');
      setNewPostContent('');
      setPosting(false);
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10 py-8">
      {/* Create a Post */}
      <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 mb-10">
        <h2 className="font-bold text-2xl mb-4 text-blue-700 flex items-center gap-2">
          <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          <span className="font-extrabold">Create a Post</span>
        </h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition w-full font-semibold"
            placeholder="Your name"
            value={newPostAuthor}
            onChange={e => setNewPostAuthor(e.target.value)}
          />
          <textarea
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition w-full resize-none font-semibold"
            placeholder="What's on your mind?"
            value={newPostContent}
            onChange={e => setNewPostContent(e.target.value)}
            rows={3}
          />
          <button
            className="self-end bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-bold shadow hover:from-blue-600 hover:to-blue-800 transition disabled:opacity-50"
            onClick={handleCreatePost}
            disabled={!newPostAuthor.trim() || !newPostContent.trim() || posting}
          >
            {posting ? "Posting..." : "Post"}
          </button>
        </div>
      </div>

      {/* Forum Posts */}
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-blue-800 text-lg">{post.author}</span>
              <span className="text-xs text-gray-400 font-semibold">{post.createdAt}</span>
            </div>
            <div className="mb-3 text-gray-900 leading-relaxed font-semibold">
              {expanded === post.id
                ? post.content
                : post.content.length > 200
                  ? post.content.slice(0, 200) + "..."
                  : post.content}
              {post.content.length > 200 && (
                <button
                  className="ml-2 text-blue-700 underline font-bold"
                  onClick={() => handleReadMore(post.id)}
                >
                  {expanded === post.id ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <div className="font-bold mb-1 text-gray-700">Comments:</div>
              {post.comments.length === 0 && (
                <div className="text-sm text-gray-400 mb-2 font-semibold">No comments yet. Be the first to comment!</div>
              )}
              <ul className="mb-2 space-y-1">
                {post.comments.map((c, i) => (
                  <li key={i} className="text-sm text-gray-800 bg-gray-100 rounded px-2 py-1 font-semibold">{c}</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200 transition w-full font-semibold"
                  placeholder="Add a comment..."
                  value={commentInputs[post.id] || ""}
                  onChange={e => handleCommentChange(post.id, e.target.value)}
                  ref={el => (commentRefs.current[post.id] = el)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') handleAddComment(post.id);
                  }}
                />
                <button
                  className="bg-blue-600 text-white px-4 py-1 rounded-lg font-bold shadow hover:bg-blue-700 transition disabled:opacity-50"
                  onClick={() => handleAddComment(post.id)}
                  disabled={!commentInputs[post.id]?.trim()}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
