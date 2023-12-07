import React, { useState } from 'react';

function FilterModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const doSomething = () => {
    // Your logic for handling the email
    console.log('Do something with email:', email);
  };

  return (
    <div>
      {isModalOpen && (
        <section className="modal">
          <div className="flex">
            <img src="https://avatars.githubusercontent.com/u/62628408?s=96&v=4" width="50px" height="50px" alt="user" />
            <button className="btn-close" onClick={closeModal}>⨉</button>
          </div>
          <div>
            <h3>Stay in touch</h3>
            <p>
              This is a dummy newsletter form so don't bother trying to test it. Not
              that I expect you to, anyways. 
            </p>
          </div>

          <input type="email" id="email" placeholder="brendaneich@js.com" value={email} onChange={handleEmailChange} />
          <button className="btn" onClick={doSomething}>Do Something</button>
        </section>
      )}

      {isModalOpen && <div className="overlay" onClick={closeModal}></div>}

      <button className="btn btn-open" onClick={openModal}>Open Modal</button>
    </div>
  );
}

export default FilterModal;