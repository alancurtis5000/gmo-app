import { useState, useEffect } from "react";
import "./../../App.css";
import { API, Auth } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listNotes } from "../../graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "../../graphql/mutations";

const initialFormState = { name: "", description: "" };

function Examples() {
  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
    getUser();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    const response = await API.graphql({
      query: createNoteMutation,
      variables: { input: formData },
    });
    setNotes([...notes, response.data.createNote]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    console.log({ id });
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  async function getUser() {
    const user = await Auth.currentUserInfo();
    console.log(user);
    setUser(user);
  }

  const environment = process.env.NODE_ENV;
  return (
    <div className="app">
      <h1>My Notes Examples dev</h1>
      <h1>{environment}</h1>
      <div className="user">
        <h2>User:</h2>
        <h2>{user.username}</h2>
      </div>

      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Note description"
        value={formData.description}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{ marginBottom: 30 }}>
        {notes.map((note) => (
          <div key={note.id || note.name}>
            <h2>{note.name}</h2>
            <p>{note.description}</p>
            <button onClick={() => deleteNote(note)}>Delete note</button>
          </div>
        ))}
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Examples);
