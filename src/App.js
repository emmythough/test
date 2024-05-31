import React, { useState } from 'react';
import { auth, signInWithPopup, GoogleAuthProvider, signOut, db, doc, setDoc } from './firebaseConfig';

function App() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);

      // Save user info to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch(error => console.error('Error signing out:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <div>
            <h1>Welcome, {user.displayName}</h1>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        )}
      </header>
    </div>
  );
}

export default App;
