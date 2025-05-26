import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, set, push, onValue } from "firebase/database";
import { app, db } from "../firebase";
import { SimpleEditor } from './tiptap-templates/simple/simple-editor';
import { load } from 'cheerio';

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingPost = location.state?.blog;

  const [user, setUser] = useState(null);
  const [title, setTitle] = useState(existingPost?.title || "");
  const [imageUrl, setImageUrl] = useState(existingPost?.imageUrl || "");
  const [htmlContent, setHtmlContent] = useState(existingPost?.template || "");
  const [jsonContent, setJsonContent] = useState(
    existingPost?.jsonContent ? JSON.parse(existingPost.jsonContent) : null
  );

  console.log(existingPost?.jsonContent)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const transformEditorHtml = (rawHtml) => {
    const $ = load(rawHtml);
    const headings = [];

    $('h2').each((index, elem) => {
      const id = `heading-${index}`;
      headings.push({ id, text: $(elem).text() });
      $(elem)
        .addClass('text-3xl font-Inter font-semibold my-4 mt-16')
        .attr('id', id);
    });

    $('p').each((_, elem) => {
      $(elem).addClass('text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter');
    });

    $('ul').addClass('list-disc pl-6 text-[#5f5e5e] my-4');
    $('li').addClass('mb-2');

    return {
      html: $('body').html(),
      headings,
    };
  };

  const handlePublish = async () => {
    console.log(jsonContent)
    if (!user) {
      alert("Please sign in to publish");
      return;
    }

    if (!htmlContent || typeof jsonContent !== "object" || Array.isArray(jsonContent)) {
      alert("Editor content is not valid.");
      return;
    }

    const { html: transformedHtml, headings } = transformEditorHtml(htmlContent);

    const postData = {
      id: existingPost?.id || Date.now(),
      author: user.displayName || "",
      avatar: user.photoURL || "",
      email: user.email || "",
      title,
      description: htmlContent.replace(/<[^>]+>/g, "").slice(0, 150) + "...",
      template: transformedHtml,
      jsonContent: JSON.stringify(jsonContent),
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      imageUrl,
      headings,
    };

    try {
      if (existingPost && existingPost._key) {
        // Update existing post
        await set(ref(db, `posts/${existingPost._key}`), postData);
      } else {
        // Create new post
        const postRef = push(ref(db, "posts"));
        await set(postRef, postData);
      }
      navigate("/");
    } catch (err) {
      console.error("Failed to save post:", err);
      alert("Error publishing post.");
    }
  };

  return (
    <div className="h-full flex flex-col items-center bg-white bg-grid font-primary">
      <div className="w-2/3 flex-1 flex flex-col items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="w-2/3 p-3 my-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          required
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          className="w-2/3 p-3 my-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <div className="flex-1 flex flex-col w-full">
          <div className="w-full min-h-[400px] border rounded p-4 bg-white shadow">
            <SimpleEditor
              content={jsonContent}
              onChange={({ html, json }) => {
                setHtmlContent(html);
                setJsonContent(json);
              }}
            />
          </div>

          <div className="mt-4 flex justify-center w-full">
            <button
              onClick={handlePublish}
              className="px-6 py-2 bg-green-600 text-white rounded disabled:opacity-50"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
