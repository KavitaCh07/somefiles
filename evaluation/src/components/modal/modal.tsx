import './modal.css';
import { useState } from 'react';
import pathCopy from '../../assets/icons/pathCopy.png';
import eye_on from '../../assets/icons/eye_on.png';
import close_btn from '../../assets/icons/close_btn.png';

const Modal = () => {

  // const [isOpen, setIsOpen] = useState(false);

  const handleModal = (event: any) => {
    event.preventDefault();

    const url = event.target.url.value;
    const siteName = event.target.url.value;
    const selectFolder = event.target.url.value;
    const userName = event.target.url.value;
    const sitePassword = event.target.url.value;
    const notesArea = event.target.url.value;
    
    const modlaData = { url, siteName, selectFolder, userName, sitePassword, notesArea, };
    
    const currentUser = JSON.parse(localStorage.getItem("currentuser") || "[]");
    const oldData = JSON.parse(localStorage.getItem(currentUser) || "[]");
    oldData.push(modlaData);
    localStorage.setItem(currentUser, JSON.stringify(oldData));
  };

  return <div className='modal'>
    <div className='overlay'>
      <div className="modal-content">
        <div className="modal-inner-content">
        <div className="close_btn">
          <img src={close_btn} alt="" />
        </div>
          <div className='add-site'>Add Site</div>
          <form action="" onSubmit={handleModal} className='from-box'>
            <div>
              <label htmlFor="">URL</label><br />
              <input type="url" name="url" id="" className='modal-input' />
            </div>

            <div className="site-div">
              <div>
                <label htmlFor="">Site Name</label><br />
                <input type="text" name="siteName" id="" className='modal-input' />
              </div>

              <div className='selector'>
                <label htmlFor="">Sector/Folder</label><br />
                <input type="text" name="selectFolder" id="" className='modal-input' />
                <img src={pathCopy} className="pathCopy" alt="" />
              </div>
            </div>

            <div className="site-div">
              <div>
                <label htmlFor="">User Name</label><br />
                <input type="text" name="userName" id="" className='modal-input' />
              </div>

              <div className='site-password'>
                <label htmlFor="">Site Password</label><br />
                <input type="text" name="sitePassword" id="" className='modal-input' />
                <img src={eye_on} className="site-password-eye" alt="" />
              </div>
            </div>

            <div className="note-area">
              <label htmlFor="">Notes</label><br />
              <textarea name="notesArea" id="" className='modal-input'></textarea>
            </div>

            <div className="reset-button">
              <div>
                <button type="reset" className='reset-btn'><span className='reset'>Reset</span></button>
              </div>
              <div>
                <button type="submit" className='save-btn'><span className='save'>Save</span></button>
              </div>
            </div>



          </form>
        </div>

      </div>

    </div>


  </div>

}
export default Modal;